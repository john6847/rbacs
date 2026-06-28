const GHL_API_BASE = 'https://services.leadconnectorhq.com';

const FACILITY_TYPE_FIELD_ID =
  process.env.GHL_FACILITY_TYPE_FIELD_ID ?? 'qJgXPue0nDafJsNXvDIi';
const DESCRIPTION_FIELD_ID =
  process.env.GHL_DESCRIPTION_FIELD_ID ?? 'i1DDKy6pHS3xXgI4yQIR';

const FACILITY_LABELS: Record<string, string> = {
  office: 'Office Cleaning',
  medical: 'Clinical Sanitation',
  retail: 'Retail Luxe',
  industrial: 'Post-Construction',
};

const FREQUENCY_LABELS: Record<string, string> = {
  daily: 'Daily',
  weekly: 'Weekly',
  biweekly: 'Bi-weekly',
  'one-time': 'One-time',
};

export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  facilityType?: string;
  scale?: number | string;
  frequency?: string;
  commencement?: string;
};

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(' ');
  if (spaceIndex === -1) {
    return { firstName: trimmed, lastName: '' };
  }
  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  };
}

function buildDescription(payload: ContactFormPayload): string {
  const lines: string[] = ['Quote request from RBA website'];

  if (payload.scale) {
    lines.push(`Scale: ${Number(payload.scale).toLocaleString()} SQ FT`);
  }
  if (payload.frequency) {
    lines.push(
      `Frequency: ${FREQUENCY_LABELS[payload.frequency] ?? payload.frequency}`
    );
  }
  if (payload.commencement) {
    lines.push(`Commencement: ${payload.commencement}`);
  }

  return lines.join('\n');
}

export async function upsertContactToGhl(payload: ContactFormPayload) {
  const apiKey = process.env.PK_INTEGRATIONS;
  const locationId = process.env.LOCATION_ID;

  if (!apiKey || !locationId) {
    throw new Error('GHL credentials are not configured');
  }

  const { firstName, lastName } = splitName(payload.name);
  const customFields: { id: string; field_value: string }[] = [];

  if (payload.facilityType) {
    customFields.push({
      id: FACILITY_TYPE_FIELD_ID,
      field_value:
        FACILITY_LABELS[payload.facilityType] ?? payload.facilityType,
    });
  }

  const description = buildDescription(payload);
  if (description) {
    customFields.push({
      id: DESCRIPTION_FIELD_ID,
      field_value: description,
    });
  }

  const body: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    email: payload.email,
    source: 'RBA Website',
    tags: ['website-quote'],
  };

  if (payload.phone) body.phone = payload.phone;
  if (payload.organization) body.companyName = payload.organization;
  if (customFields.length > 0) body.customFields = customFields;

  const response = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`GHL API error (${response.status}): ${errorBody}`);
  }

  return response.json();
}
