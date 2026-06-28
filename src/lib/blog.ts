// Static, SEO-focused blog content. No CMS — articles live here as data so they
// build to static HTML, are fully crawlable, and target long-tail local keywords.

import type { Locale } from './site';

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogContent {
  category: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
}

export interface BlogPost {
  slug: string;
  date: string; // ISO published date
  readMinutes: number;
  image: string;
  content: Record<Locale, BlogContent>;
}

export const posts: BlogPost[] = [
  {
    slug: 'how-often-should-you-clean-your-office',
    date: '2026-06-15',
    readMinutes: 5,
    image: '/office-service.png',
    content: {
      en: {
        category: 'Office Cleaning',
        title: 'How Often Should You Clean Your Office? A Montreal Business Guide',
        excerpt:
          'Daily, weekly, or monthly? Here is how to build an office cleaning schedule that keeps your Montreal workplace healthy without overspending.',
        metaTitle: 'How Often Should You Clean Your Office? | Montreal Guide',
        metaDescription:
          'A practical guide to office cleaning frequency for Montreal businesses — daily, weekly and monthly tasks, plus how to right-size your schedule and budget.',
        sections: [
          {
            paragraphs: [
              'One of the most common questions we hear from Montreal business owners is simple: how often does my office actually need to be cleaned? Clean too little and you risk sick days, odours, and a poor impression on clients. Clean too much and you pay for service you do not need. The right answer depends on your space — but there are clear guidelines that work for most workplaces.',
            ],
          },
          {
            heading: 'It comes down to three factors',
            paragraphs: [
              'Before you set a schedule, weigh how much foot traffic your office sees, what industry you are in, and how many shared spaces you have. A 6-person design studio and a 60-person call centre with a public reception have very different needs.',
            ],
            bullets: [
              'Foot traffic: more people means more dirt, germs, and wear on floors and washrooms.',
              'Industry: clinics, food businesses, and client-facing offices have higher hygiene expectations.',
              'Shared spaces: kitchens, washrooms, and meeting rooms always need the most frequent attention.',
            ],
          },
          {
            heading: 'A simple frequency guide',
            paragraphs: ['For a typical Montreal office, this cadence keeps things consistently clean:'],
            bullets: [
              'Daily or 3x weekly: washrooms, kitchen/break areas, high-touch surfaces, waste removal, entrance floors.',
              'Weekly: vacuuming all carpets, mopping hard floors, dusting desks and surfaces, glass doors.',
              'Monthly: baseboards, vents, interior windows, detailed kitchen appliances.',
              'Quarterly: carpet deep-clean, hard-floor buffing, high dusting, upholstery.',
            ],
          },
          {
            heading: 'Signs you are not cleaning enough',
            paragraphs: [
              'Lingering smells, streaky glass, overflowing bins by mid-afternoon, dusty vents, and an uptick in employee sick days are all signals that your current schedule is falling behind. If clients ever notice before you do, it is already costing you.',
            ],
          },
          {
            heading: 'Build a schedule that fits',
            paragraphs: [
              'The most cost-effective approach is rarely the cheapest or the most frequent — it is the one matched to how your space is actually used. A good commercial cleaning partner will walk your facility, recommend a tailored frequency, and adjust as your needs change. That way you pay for results, not guesswork.',
            ],
          },
        ],
      },
      fr: {
        category: 'Entretien de bureaux',
        title: 'À quelle fréquence nettoyer votre bureau ? Guide pour entreprises de Montréal',
        excerpt:
          'Quotidien, hebdomadaire ou mensuel ? Voici comment bâtir un horaire d’entretien qui garde votre bureau montréalais sain sans payer en trop.',
        metaTitle: 'À quelle fréquence nettoyer votre bureau ? | Guide Montréal',
        metaDescription:
          'Guide pratique sur la fréquence de nettoyage des bureaux à Montréal : tâches quotidiennes, hebdomadaires et mensuelles, et comment ajuster votre horaire et budget.',
        sections: [
          {
            paragraphs: [
              'L’une des questions les plus fréquentes des gestionnaires montréalais est simple : à quelle fréquence mon bureau doit-il vraiment être nettoyé ? Trop peu, et vous risquez absences, odeurs et mauvaise impression. Trop, et vous payez pour un service inutile. La bonne réponse dépend de votre espace — mais des repères clairs conviennent à la plupart des milieux de travail.',
            ],
          },
          {
            heading: 'Tout repose sur trois facteurs',
            paragraphs: [
              'Avant de fixer un horaire, évaluez l’achalandage, votre secteur d’activité et le nombre d’espaces partagés. Un studio de 6 personnes et un centre d’appels de 60 personnes avec réception publique n’ont pas les mêmes besoins.',
            ],
            bullets: [
              'Achalandage : plus de gens signifie plus de saleté, de germes et d’usure.',
              'Secteur : cliniques, alimentation et bureaux recevant des clients ont des attentes plus élevées.',
              'Espaces partagés : cuisines, toilettes et salles de réunion exigent l’attention la plus fréquente.',
            ],
          },
          {
            heading: 'Un guide de fréquence simple',
            paragraphs: ['Pour un bureau montréalais typique, ce rythme assure une propreté constante :'],
            bullets: [
              'Quotidien ou 3x/semaine : toilettes, cuisine, surfaces très touchées, déchets, planchers d’entrée.',
              'Hebdomadaire : aspirateur des tapis, lavage des planchers, époussetage des bureaux, portes vitrées.',
              'Mensuel : plinthes, grilles d’aération, fenêtres intérieures, électroménagers en détail.',
              'Trimestriel : nettoyage en profondeur des tapis, polissage des planchers, époussetage en hauteur.',
            ],
          },
          {
            heading: 'Des signes que vous ne nettoyez pas assez',
            paragraphs: [
              'Odeurs persistantes, vitres striées, poubelles pleines en après-midi, grilles poussiéreuses et hausse des absences sont tous des signaux. Si vos clients le remarquent avant vous, cela vous coûte déjà.',
            ],
          },
          {
            heading: 'Bâtir un horaire adapté',
            paragraphs: [
              'L’approche la plus rentable est rarement la moins chère ni la plus fréquente — c’est celle qui correspond à l’usage réel de votre espace. Un bon partenaire visitera vos lieux, recommandera une fréquence sur mesure et l’ajustera au besoin. Vous payez pour des résultats, pas pour des suppositions.',
            ],
          },
        ],
      },
      es: {
        category: 'Limpieza de oficinas',
        title: '¿Con qué frecuencia limpiar su oficina? Guía para negocios de Montreal',
        excerpt:
          '¿Diario, semanal o mensual? Así se arma un plan de limpieza que mantiene su oficina de Montreal saludable sin gastar de más.',
        metaTitle: '¿Con qué frecuencia limpiar su oficina? | Guía Montreal',
        metaDescription:
          'Guía práctica sobre la frecuencia de limpieza de oficinas en Montreal: tareas diarias, semanales y mensuales, y cómo ajustar su plan y presupuesto.',
        sections: [
          {
            paragraphs: [
              'Una de las preguntas más comunes de los empresarios de Montreal es simple: ¿con qué frecuencia necesita limpieza mi oficina? Limpiar de menos trae ausencias, olores y mala impresión. Limpiar de más es pagar por un servicio que no necesita. La respuesta depende de su espacio, pero hay pautas claras que sirven para la mayoría.',
            ],
          },
          {
            heading: 'Se reduce a tres factores',
            paragraphs: [
              'Antes de fijar un plan, considere el tránsito de personas, su industria y cuántos espacios compartidos tiene. Un estudio de 6 personas y un centro de llamadas de 60 con recepción pública tienen necesidades muy distintas.',
            ],
            bullets: [
              'Tránsito: más personas significan más suciedad, gérmenes y desgaste.',
              'Industria: clínicas, alimentos y oficinas de cara al cliente exigen más higiene.',
              'Espacios compartidos: cocinas, baños y salas de reunión requieren la atención más frecuente.',
            ],
          },
          {
            heading: 'Una guía de frecuencia simple',
            paragraphs: ['Para una oficina típica de Montreal, este ritmo mantiene todo limpio de forma constante:'],
            bullets: [
              'Diario o 3 veces por semana: baños, cocina, superficies de alto contacto, basura, pisos de entrada.',
              'Semanal: aspirado de alfombras, trapeado de pisos, limpieza de escritorios, puertas de vidrio.',
              'Mensual: zócalos, rejillas, ventanas interiores, electrodomésticos en detalle.',
              'Trimestral: limpieza profunda de alfombras, pulido de pisos, desempolvado en altura.',
            ],
          },
          {
            heading: 'Señales de que no limpia lo suficiente',
            paragraphs: [
              'Olores persistentes, vidrios con marcas, papeleras llenas a media tarde, rejillas con polvo y más ausencias por enfermedad son señales. Si sus clientes lo notan antes que usted, ya le está costando.',
            ],
          },
          {
            heading: 'Arme un plan a su medida',
            paragraphs: [
              'El enfoque más rentable rara vez es el más barato ni el más frecuente: es el que se ajusta al uso real de su espacio. Un buen socio de limpieza recorrerá sus instalaciones, recomendará una frecuencia a medida y la ajustará según cambien sus necesidades. Así paga por resultados, no por suposiciones.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'how-to-choose-a-commercial-cleaning-company-montreal',
    date: '2026-05-28',
    readMinutes: 6,
    image: '/office.jpg',
    content: {
      en: {
        category: 'Buying Guide',
        title: 'How to Choose a Commercial Cleaning Company in Montreal',
        excerpt:
          'Not all cleaning companies are equal. Ask these questions to separate a reliable long-term partner from a costly mistake.',
        metaTitle: 'How to Choose a Commercial Cleaning Company in Montreal',
        metaDescription:
          'Hiring a commercial cleaning company in Montreal? Use these key questions on insurance, staffing, scope and communication to choose the right partner.',
        sections: [
          {
            paragraphs: [
              'Switching cleaning providers is disruptive, so most businesses want to get it right the first time. The cheapest quote is rarely the best value — what matters is reliability, accountability, and a partner who treats your facility like their own. Here is what to look for before you sign.',
            ],
          },
          {
            heading: '1. Insurance, bonding, and background checks',
            paragraphs: [
              'Ask for proof of liability insurance and confirm crews are bonded and background-checked. If a cleaner is injured on your site or something goes missing, this is what protects you. A professional company provides this without hesitation.',
            ],
          },
          {
            heading: '2. Consistency and staffing',
            paragraphs: [
              'High cleaner turnover is the number one reason service quality slips. Ask how the company recruits, trains, and retains staff, and whether you will get the same crew each visit. Familiar crews learn your space and catch the details a rotating roster never will.',
            ],
          },
          {
            heading: '3. A clear, written scope of work',
            paragraphs: [
              'Vague promises lead to disputes. A good provider gives you a detailed checklist of exactly what is cleaned, how often, and to what standard. When expectations are in writing, accountability follows.',
            ],
          },
          {
            heading: '4. Responsive communication',
            paragraphs: [
              'Things come up — a spill before a big meeting, a schedule change, a one-off deep clean. You want a dedicated contact who answers quickly, not a call centre. Test responsiveness during the quoting process; it predicts the relationship.',
            ],
          },
          {
            heading: '5. Local reputation and references',
            paragraphs: [
              'A company that already serves businesses like yours in Montreal understands local buildings, access rules, and expectations. Ask for references in your industry and check that their service areas actually cover your location.',
            ],
          },
          {
            paragraphs: [
              'Get every promise in writing, start with a trial period if you can, and prioritize the partner who communicates clearly over the one who simply quotes lowest. The right choice pays for itself in fewer headaches and a space that always looks its best.',
            ],
          },
        ],
      },
      fr: {
        category: 'Guide d’achat',
        title: 'Comment choisir une entreprise de nettoyage commercial à Montréal',
        excerpt:
          'Toutes les entreprises de nettoyage ne se valent pas. Posez ces questions pour distinguer un partenaire fiable d’une erreur coûteuse.',
        metaTitle: 'Comment choisir une entreprise de nettoyage à Montréal',
        metaDescription:
          'Vous embauchez une entreprise de nettoyage commercial à Montréal ? Utilisez ces questions clés sur l’assurance, le personnel, la portée et la communication.',
        sections: [
          {
            paragraphs: [
              'Changer de fournisseur de nettoyage est perturbant ; la plupart des entreprises veulent donc bien choisir du premier coup. La soumission la moins chère est rarement la meilleure valeur — ce qui compte, c’est la fiabilité, la responsabilité et un partenaire qui traite vos lieux comme les siens. Voici quoi vérifier avant de signer.',
            ],
          },
          {
            heading: '1. Assurance, cautionnement et vérifications',
            paragraphs: [
              'Demandez une preuve d’assurance responsabilité et confirmez que les équipes sont cautionnées et vérifiées. Si un employé se blesse chez vous ou qu’un objet disparaît, c’est ce qui vous protège. Une entreprise professionnelle le fournit sans hésiter.',
            ],
          },
          {
            heading: '2. Constance et personnel',
            paragraphs: [
              'Le roulement élevé du personnel est la première cause de baisse de qualité. Demandez comment l’entreprise recrute, forme et fidélise, et si vous aurez la même équipe à chaque visite. Une équipe constante apprend votre espace et repère les détails qu’une équipe changeante manque.',
            ],
          },
          {
            heading: '3. Une portée des travaux écrite et claire',
            paragraphs: [
              'Les promesses vagues mènent aux litiges. Un bon fournisseur remet une liste détaillée de ce qui est nettoyé, à quelle fréquence et selon quelle norme. Quand les attentes sont écrites, la responsabilité suit.',
            ],
          },
          {
            heading: '4. Une communication réactive',
            paragraphs: [
              'Des imprévus surviennent — un dégât avant une réunion, un changement d’horaire, un grand ménage ponctuel. Vous voulez un contact dédié qui répond vite, pas un centre d’appels. Testez la réactivité durant la soumission ; elle annonce la relation.',
            ],
          },
          {
            heading: '5. Réputation locale et références',
            paragraphs: [
              'Une entreprise qui sert déjà des organisations comme la vôtre à Montréal connaît les immeubles, les accès et les attentes d’ici. Demandez des références dans votre secteur et vérifiez que ses zones de service couvrent bien votre emplacement.',
            ],
          },
          {
            paragraphs: [
              'Mettez chaque promesse par écrit, commencez par une période d’essai si possible, et privilégiez le partenaire qui communique clairement plutôt que celui qui soumet le plus bas. Le bon choix se rentabilise en moins de tracas et un espace toujours impeccable.',
            ],
          },
        ],
      },
      es: {
        category: 'Guía de compra',
        title: 'Cómo elegir una empresa de limpieza comercial en Montreal',
        excerpt:
          'No todas las empresas de limpieza son iguales. Haga estas preguntas para distinguir a un socio confiable de un error costoso.',
        metaTitle: 'Cómo elegir una empresa de limpieza comercial en Montreal',
        metaDescription:
          '¿Va a contratar limpieza comercial en Montreal? Use estas preguntas clave sobre seguro, personal, alcance y comunicación para elegir al socio correcto.',
        sections: [
          {
            paragraphs: [
              'Cambiar de proveedor de limpieza es disruptivo, por eso la mayoría quiere acertar a la primera. La cotización más barata rara vez es el mejor valor: lo que importa es la fiabilidad, la responsabilidad y un socio que trate su local como propio. Esto es lo que debe revisar antes de firmar.',
            ],
          },
          {
            heading: '1. Seguro, fianza y verificación de antecedentes',
            paragraphs: [
              'Pida prueba del seguro de responsabilidad y confirme que los equipos están afianzados y verificados. Si un empleado se lesiona en su sitio o algo desaparece, esto es lo que lo protege. Una empresa profesional lo entrega sin dudar.',
            ],
          },
          {
            heading: '2. Constancia y personal',
            paragraphs: [
              'La alta rotación de personal es la causa número uno de la caída en la calidad. Pregunte cómo recluta, capacita y retiene la empresa, y si tendrá el mismo equipo en cada visita. Un equipo constante aprende su espacio y detecta detalles que uno rotativo nunca verá.',
            ],
          },
          {
            heading: '3. Un alcance de trabajo claro y por escrito',
            paragraphs: [
              'Las promesas vagas generan disputas. Un buen proveedor entrega una lista detallada de qué se limpia, con qué frecuencia y con qué estándar. Cuando las expectativas están por escrito, llega la responsabilidad.',
            ],
          },
          {
            heading: '4. Comunicación que responde',
            paragraphs: [
              'Surgen imprevistos: un derrame antes de una reunión, un cambio de horario, una limpieza profunda puntual. Quiere un contacto dedicado que responda rápido, no un centro de llamadas. Pruebe la respuesta durante la cotización; predice la relación.',
            ],
          },
          {
            heading: '5. Reputación local y referencias',
            paragraphs: [
              'Una empresa que ya atiende a negocios como el suyo en Montreal entiende los edificios, accesos y expectativas locales. Pida referencias de su industria y confirme que sus zonas de servicio cubren su ubicación.',
            ],
          },
          {
            paragraphs: [
              'Ponga cada promesa por escrito, empiece con un período de prueba si puede y priorice al socio que comunica con claridad sobre el que solo cotiza más bajo. La elección correcta se paga sola con menos problemas y un espacio siempre impecable.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'how-much-does-commercial-cleaning-cost-montreal',
    date: '2026-05-12',
    readMinutes: 6,
    image: '/retail-place.png',
    content: {
      en: {
        category: 'Pricing',
        title: 'How Much Does Commercial Cleaning Cost in Montreal? (2026 Guide)',
        excerpt:
          'A transparent look at what drives commercial cleaning prices — square footage, frequency, and facility type — and how to budget with confidence.',
        metaTitle: 'How Much Does Commercial Cleaning Cost in Montreal? 2026',
        metaDescription:
          'Understand what commercial cleaning costs in Montreal in 2026: pricing models, what drives the price up or down, and how to get an accurate quote.',
        sections: [
          {
            paragraphs: [
              'Commercial cleaning pricing can feel like a black box. The honest answer is that cost depends on a handful of clear variables — and once you understand them, comparing quotes becomes far easier. Here is how pricing actually works in the Montreal market.',
            ],
          },
          {
            heading: 'What you are actually paying for',
            paragraphs: [
              'A professional rate covers more than labour. It includes trained and insured staff, supervision and quality control, equipment and supplies, and the administrative cost of reliable scheduling. A suspiciously low quote usually means one of these is being cut.',
            ],
          },
          {
            heading: 'Common pricing models',
            bullets: [
              'Per square foot: common for offices and recurring contracts; predictable and easy to compare.',
              'Hourly: useful for smaller spaces or variable, one-off jobs.',
              'Flat monthly rate: a fixed fee for a defined scope and frequency — the most popular for ongoing service.',
            ],
          },
          {
            heading: 'What moves the price up or down',
            bullets: [
              'Size and layout of the facility, and how much of it is high-traffic.',
              'Frequency: daily service costs more per month but less per visit than occasional cleans.',
              'Facility type: medical and industrial sites require specialized protocols and equipment.',
              'Special requests: floor waxing, carpet extraction, windows, and after-hours access.',
            ],
          },
          {
            heading: 'How to get an accurate quote',
            paragraphs: [
              'Avoid pricing given sight-unseen over the phone. The most accurate quotes come after a brief walkthrough, where a provider can assess your space and recommend the right frequency. Ask for the scope in writing so you are comparing like for like — not just headline numbers.',
            ],
          },
        ],
      },
      fr: {
        category: 'Tarification',
        title: 'Combien coûte le nettoyage commercial à Montréal ? (Guide 2026)',
        excerpt:
          'Un regard transparent sur ce qui influence les prix du nettoyage commercial — superficie, fréquence et type d’établissement — pour budgéter en confiance.',
        metaTitle: 'Combien coûte le nettoyage commercial à Montréal ? 2026',
        metaDescription:
          'Comprenez les coûts du nettoyage commercial à Montréal en 2026 : modèles de prix, facteurs qui font varier le tarif et comment obtenir une soumission juste.',
        sections: [
          {
            paragraphs: [
              'La tarification du nettoyage commercial peut sembler opaque. La vérité, c’est que le coût dépend de quelques variables claires — et une fois comprises, comparer les soumissions devient bien plus simple. Voici comment fonctionne réellement la tarification sur le marché montréalais.',
            ],
          },
          {
            heading: 'Ce que vous payez réellement',
            paragraphs: [
              'Un tarif professionnel couvre plus que la main-d’œuvre. Il inclut un personnel formé et assuré, la supervision et le contrôle qualité, l’équipement et les produits, ainsi que le coût administratif d’un horaire fiable. Une soumission étonnamment basse signifie souvent qu’on coupe l’un de ces éléments.',
            ],
          },
          {
            heading: 'Modèles de tarification courants',
            bullets: [
              'Au pied carré : fréquent pour bureaux et contrats récurrents ; prévisible et facile à comparer.',
              'À l’heure : utile pour les petits espaces ou les travaux ponctuels variables.',
              'Forfait mensuel : un montant fixe pour une portée et une fréquence définies — le plus populaire en service continu.',
            ],
          },
          {
            heading: 'Ce qui fait varier le prix',
            bullets: [
              'Taille et configuration des lieux, et part des zones très achalandées.',
              'Fréquence : un service quotidien coûte plus par mois mais moins par visite qu’un nettoyage occasionnel.',
              'Type d’établissement : les sites médicaux et industriels exigent des protocoles et équipements spécialisés.',
              'Demandes spéciales : cirage des planchers, extraction des tapis, fenêtres et accès hors heures.',
            ],
          },
          {
            heading: 'Comment obtenir une soumission juste',
            paragraphs: [
              'Évitez les prix donnés au téléphone sans visite. Les soumissions les plus exactes suivent une courte visite, où le fournisseur évalue votre espace et recommande la bonne fréquence. Exigez la portée par écrit pour comparer à valeur égale — pas seulement des chiffres affichés.',
            ],
          },
        ],
      },
      es: {
        category: 'Precios',
        title: '¿Cuánto cuesta la limpieza comercial en Montreal? (Guía 2026)',
        excerpt:
          'Una mirada transparente a lo que determina los precios de limpieza comercial —superficie, frecuencia y tipo de instalación— para presupuestar con confianza.',
        metaTitle: '¿Cuánto cuesta la limpieza comercial en Montreal? 2026',
        metaDescription:
          'Entienda los costos de limpieza comercial en Montreal en 2026: modelos de precio, qué los sube o baja y cómo obtener una cotización precisa.',
        sections: [
          {
            paragraphs: [
              'El precio de la limpieza comercial puede parecer una caja negra. La respuesta honesta es que el costo depende de unas pocas variables claras, y una vez que las entiende, comparar cotizaciones es mucho más fácil. Así funciona el precio en el mercado de Montreal.',
            ],
          },
          {
            heading: 'Qué está pagando en realidad',
            paragraphs: [
              'Una tarifa profesional cubre más que la mano de obra. Incluye personal capacitado y asegurado, supervisión y control de calidad, equipo e insumos, y el costo administrativo de un horario confiable. Una cotización sospechosamente baja suele significar que se recorta alguno de estos.',
            ],
          },
          {
            heading: 'Modelos de precio comunes',
            bullets: [
              'Por pie cuadrado: común para oficinas y contratos recurrentes; predecible y fácil de comparar.',
              'Por hora: útil para espacios pequeños o trabajos puntuales variables.',
              'Tarifa mensual fija: un monto fijo por un alcance y frecuencia definidos — el más popular en servicio continuo.',
            ],
          },
          {
            heading: 'Qué sube o baja el precio',
            bullets: [
              'Tamaño y distribución de la instalación, y cuánto es de alto tránsito.',
              'Frecuencia: el servicio diario cuesta más al mes pero menos por visita que las limpiezas ocasionales.',
              'Tipo de instalación: los sitios médicos e industriales requieren protocolos y equipo especializados.',
              'Pedidos especiales: encerado de pisos, extracción de alfombras, ventanas y acceso fuera de horario.',
            ],
          },
          {
            heading: 'Cómo obtener una cotización precisa',
            paragraphs: [
              'Evite precios dados por teléfono sin ver el lugar. Las cotizaciones más exactas llegan tras un breve recorrido, donde el proveedor evalúa su espacio y recomienda la frecuencia adecuada. Pida el alcance por escrito para comparar de igual a igual, no solo números llamativos.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'medical-clinic-cleaning-protocols',
    date: '2026-04-22',
    readMinutes: 5,
    image: '/medical-clinic.png',
    content: {
      en: {
        category: 'Healthcare',
        title: 'Medical Clinic Cleaning: The Protocols That Protect Patients',
        excerpt:
          'Healthcare spaces demand far more than a standard clean. Here is what proper clinical disinfection actually looks like.',
        metaTitle: 'Medical Clinic Cleaning Protocols That Protect Patients',
        metaDescription:
          'What proper medical clinic cleaning looks like: clinical disinfection, colour-coded tools, high-risk zones, and compliance — for Montreal healthcare facilities.',
        sections: [
          {
            paragraphs: [
              'In a clinic, cleaning is not cosmetic — it is infection control. Patients are more vulnerable, surfaces carry higher risk, and the margin for error is small. Healthcare cleaning follows protocols that go well beyond what a standard office requires.',
            ],
          },
          {
            heading: 'Why clinics are different',
            paragraphs: [
              'Waiting rooms, exam tables, and shared equipment see a constant flow of people, some of them sick. Without disciplined disinfection, these surfaces become transmission points. The goal is not just visibly clean but hygienically safe.',
            ],
          },
          {
            heading: 'Colour-coded tools and cross-contamination control',
            paragraphs: [
              'Professional clinic cleaning uses colour-coded microfibre cloths and mops so the tools used in a washroom never touch an exam surface. This simple system is one of the most effective ways to stop germs from travelling between zones.',
            ],
          },
          {
            heading: 'High-touch and high-risk zones',
            bullets: [
              'Door handles, light switches, and reception counters.',
              'Exam tables, chairs, and shared medical equipment.',
              'Washrooms, with hospital-grade disinfectants and dwell-time compliance.',
              'Waiting-room seating, toys, and check-in tablets or screens.',
            ],
          },
          {
            heading: 'Compliance and documentation',
            paragraphs: [
              'Reputable healthcare cleaning includes the right disinfectants used correctly — including the dwell time a product needs to actually work — plus safe waste handling and documentation. That paper trail matters during inspections and gives patients confidence the moment they walk in.',
            ],
          },
        ],
      },
      fr: {
        category: 'Santé',
        title: 'Nettoyage de cliniques médicales : les protocoles qui protègent les patients',
        excerpt:
          'Les milieux de santé exigent bien plus qu’un nettoyage standard. Voici à quoi ressemble une vraie désinfection clinique.',
        metaTitle: 'Nettoyage de cliniques : protocoles qui protègent les patients',
        metaDescription:
          'À quoi ressemble un vrai nettoyage de clinique : désinfection clinique, outils à code de couleur, zones à risque et conformité — pour les cliniques de Montréal.',
        sections: [
          {
            paragraphs: [
              'Dans une clinique, le nettoyage n’est pas cosmétique — c’est du contrôle des infections. Les patients sont plus vulnérables, les surfaces présentent un risque plus élevé et la marge d’erreur est mince. Le nettoyage en santé suit des protocoles bien au-delà de ceux d’un bureau standard.',
            ],
          },
          {
            heading: 'Pourquoi les cliniques sont différentes',
            paragraphs: [
              'Salles d’attente, tables d’examen et équipement partagé voient un flux constant de personnes, parfois malades. Sans désinfection rigoureuse, ces surfaces deviennent des points de transmission. L’objectif n’est pas seulement une propreté visible, mais une réelle sécurité sanitaire.',
            ],
          },
          {
            heading: 'Outils à code de couleur et contamination croisée',
            paragraphs: [
              'Le nettoyage professionnel de clinique utilise des linges et vadrouilles en microfibre à code de couleur afin que les outils des toilettes ne touchent jamais une surface d’examen. Ce système simple est l’un des plus efficaces pour empêcher les germes de circuler entre les zones.',
            ],
          },
          {
            heading: 'Zones très touchées et à risque',
            bullets: [
              'Poignées de porte, interrupteurs et comptoirs de réception.',
              'Tables d’examen, chaises et équipement médical partagé.',
              'Toilettes, avec désinfectants de qualité hospitalière et temps de contact respecté.',
              'Sièges de salle d’attente, jouets et tablettes ou écrans d’accueil.',
            ],
          },
          {
            heading: 'Conformité et documentation',
            paragraphs: [
              'Un nettoyage en santé sérieux comprend les bons désinfectants utilisés correctement — y compris le temps de contact nécessaire pour qu’un produit agisse — ainsi qu’une gestion sécuritaire des déchets et de la documentation. Cette traçabilité compte lors des inspections et rassure les patients dès leur arrivée.',
            ],
          },
        ],
      },
      es: {
        category: 'Salud',
        title: 'Limpieza de clínicas médicas: los protocolos que protegen a los pacientes',
        excerpt:
          'Los espacios de salud exigen mucho más que una limpieza estándar. Así se ve una verdadera desinfección clínica.',
        metaTitle: 'Limpieza de clínicas: protocolos que protegen a los pacientes',
        metaDescription:
          'Cómo es una limpieza médica adecuada: desinfección clínica, herramientas codificadas por color, zonas de riesgo y cumplimiento — para clínicas de Montreal.',
        sections: [
          {
            paragraphs: [
              'En una clínica, la limpieza no es cosmética: es control de infecciones. Los pacientes son más vulnerables, las superficies tienen mayor riesgo y el margen de error es pequeño. La limpieza sanitaria sigue protocolos que van mucho más allá de los de una oficina estándar.',
            ],
          },
          {
            heading: 'Por qué las clínicas son distintas',
            paragraphs: [
              'Salas de espera, camillas y equipo compartido ven un flujo constante de personas, algunas enfermas. Sin desinfección disciplinada, estas superficies se vuelven puntos de transmisión. La meta no es solo verse limpio, sino ser higiénicamente seguro.',
            ],
          },
          {
            heading: 'Herramientas por color y control de contaminación cruzada',
            paragraphs: [
              'La limpieza profesional de clínicas usa paños y trapeadores de microfibra codificados por color para que las herramientas del baño nunca toquen una superficie de examen. Este sistema simple es de los más eficaces para evitar que los gérmenes viajen entre zonas.',
            ],
          },
          {
            heading: 'Zonas de alto contacto y alto riesgo',
            bullets: [
              'Manijas, interruptores y mostradores de recepción.',
              'Camillas, sillas y equipo médico compartido.',
              'Baños, con desinfectantes de grado hospitalario y tiempo de contacto respetado.',
              'Asientos de sala de espera, juguetes y tabletas o pantallas de registro.',
            ],
          },
          {
            heading: 'Cumplimiento y documentación',
            paragraphs: [
              'Una limpieza sanitaria seria incluye los desinfectantes correctos usados bien —incluido el tiempo de contacto que un producto necesita para funcionar— más manejo seguro de residuos y documentación. Ese registro importa en las inspecciones y da confianza a los pacientes apenas entran.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'post-construction-cleaning-checklist',
    date: '2026-03-30',
    readMinutes: 5,
    image: '/post-construction.png',
    content: {
      en: {
        category: 'Post-Construction',
        title: 'Your Post-Construction Cleaning Checklist for Montreal Sites',
        excerpt:
          'Before tenants move in, dust and debris have to go. Follow this phase-by-phase checklist for a handover-ready space.',
        metaTitle: 'Post-Construction Cleaning Checklist | Montreal Contractors',
        metaDescription:
          'A phase-by-phase post-construction cleaning checklist for Montreal contractors and property managers — from rough clean to white-glove final detailing.',
        sections: [
          {
            paragraphs: [
              'A beautiful build can still feel unfinished if it is covered in drywall dust and adhesive residue. Post-construction cleaning is what turns a completed site into a move-in-ready space. It works best in three phases.',
            ],
          },
          {
            heading: 'Phase 1: Rough clean',
            paragraphs: [
              'Done once the major trades are out, this phase clears the big stuff: leftover debris, packaging, stickers, and large dust deposits. The goal is to get the space safe to work in for the detailed passes that follow.',
            ],
          },
          {
            heading: 'Phase 2: Detail clean',
            paragraphs: [
              'This is where the space starts to shine. Crews work top to bottom so dust never settles on already-cleaned surfaces.',
            ],
            bullets: [
              'High dusting of vents, ducts, light fixtures, and ceiling corners.',
              'Wiping down walls, doors, frames, and baseboards.',
              'Cleaning inside cabinets, closets, and drawers.',
              'Degreasing and detailing kitchens and washrooms.',
            ],
          },
          {
            heading: 'Phase 3: Final / white-glove',
            paragraphs: [
              'The last pass catches everything a final walkthrough would flag: interior glass and window tracks, fingerprints and smudges, floor polishing, and any fine dust that resettled. The result should be inspection- and tenant-ready.',
            ],
          },
          {
            heading: 'Easy things to forget',
            bullets: [
              'Window and glass tracks where fine dust collects.',
              'Light fixtures and switch plates.',
              'HVAC vents — dust here circulates the moment the system runs.',
              'Exterior entrances and the path tenants first see.',
            ],
          },
        ],
      },
      fr: {
        category: 'Après-construction',
        title: 'Votre liste de nettoyage après-construction pour les chantiers de Montréal',
        excerpt:
          'Avant l’arrivée des occupants, la poussière et les débris doivent disparaître. Suivez cette liste par étapes pour un espace prêt à la remise.',
        metaTitle: 'Liste de nettoyage après-construction | Entrepreneurs Montréal',
        metaDescription:
          'Une liste de nettoyage après-construction par étapes pour entrepreneurs et gestionnaires de Montréal — du nettoyage grossier à la finition gant blanc.',
        sections: [
          {
            paragraphs: [
              'Un beau projet peut sembler inachevé s’il est couvert de poussière de gypse et de résidus de colle. Le nettoyage après-construction transforme un chantier terminé en espace prêt à occuper. Il se fait mieux en trois étapes.',
            ],
          },
          {
            heading: 'Étape 1 : Nettoyage grossier',
            paragraphs: [
              'Réalisée une fois les principaux corps de métier partis, cette étape enlève le gros : débris, emballages, autocollants et grands dépôts de poussière. L’objectif est de rendre l’espace sécuritaire pour les passes détaillées qui suivent.',
            ],
          },
          {
            heading: 'Étape 2 : Nettoyage détaillé',
            paragraphs: [
              'C’est ici que l’espace commence à briller. Les équipes travaillent du haut vers le bas pour que la poussière ne retombe jamais sur des surfaces déjà nettoyées.',
            ],
            bullets: [
              'Époussetage en hauteur des grilles, conduits, luminaires et coins de plafond.',
              'Nettoyage des murs, portes, cadres et plinthes.',
              'Nettoyage de l’intérieur des armoires, placards et tiroirs.',
              'Dégraissage et finition des cuisines et toilettes.',
            ],
          },
          {
            heading: 'Étape 3 : Finition / gant blanc',
            paragraphs: [
              'La dernière passe rattrape tout ce qu’une inspection signalerait : vitres et rails de fenêtres, traces de doigts, polissage des planchers et toute poussière fine retombée. Le résultat doit être prêt pour l’inspection et les occupants.',
            ],
          },
          {
            heading: 'Ce qu’on oublie facilement',
            bullets: [
              'Rails de fenêtres et de vitres où s’accumule la poussière fine.',
              'Luminaires et plaques d’interrupteurs.',
              'Grilles de ventilation — la poussière y circule dès que le système démarre.',
              'Entrées extérieures et le chemin que voient d’abord les occupants.',
            ],
          },
        ],
      },
      es: {
        category: 'Postconstrucción',
        title: 'Su lista de limpieza postobra para sitios de Montreal',
        excerpt:
          'Antes de que entren los ocupantes, el polvo y los escombros deben irse. Siga esta lista por fases para un espacio listo para entregar.',
        metaTitle: 'Lista de limpieza postobra | Contratistas de Montreal',
        metaDescription:
          'Una lista de limpieza postobra por fases para contratistas y administradores de Montreal — desde la limpieza gruesa hasta el detallado final de guante blanco.',
        sections: [
          {
            paragraphs: [
              'Una obra hermosa puede sentirse inacabada si está cubierta de polvo de yeso y residuos de adhesivo. La limpieza postobra convierte un sitio terminado en un espacio listo para ocupar. Funciona mejor en tres fases.',
            ],
          },
          {
            heading: 'Fase 1: Limpieza gruesa',
            paragraphs: [
              'Se hace una vez que salieron los oficios principales y retira lo grande: escombros, embalajes, etiquetas y grandes depósitos de polvo. La meta es dejar el espacio seguro para las pasadas detalladas que siguen.',
            ],
          },
          {
            heading: 'Fase 2: Limpieza de detalle',
            paragraphs: [
              'Aquí el espacio empieza a brillar. Los equipos trabajan de arriba hacia abajo para que el polvo nunca caiga sobre superficies ya limpias.',
            ],
            bullets: [
              'Desempolvado en altura de rejillas, ductos, luminarias y esquinas del techo.',
              'Limpieza de paredes, puertas, marcos y zócalos.',
              'Limpieza del interior de gabinetes, clósets y cajones.',
              'Desengrase y detallado de cocinas y baños.',
            ],
          },
          {
            heading: 'Fase 3: Final / guante blanco',
            paragraphs: [
              'La última pasada atrapa todo lo que marcaría un recorrido final: vidrios interiores y rieles de ventanas, huellas, pulido de pisos y cualquier polvo fino que volvió a asentarse. El resultado debe quedar listo para inspección y ocupantes.',
            ],
          },
          {
            heading: 'Lo que se olvida fácil',
            bullets: [
              'Rieles de ventanas y vidrios donde se junta el polvo fino.',
              'Luminarias y placas de interruptores.',
              'Rejillas de ventilación — el polvo circula apenas arranca el sistema.',
              'Entradas exteriores y el camino que los ocupantes ven primero.',
            ],
          },
        ],
      },
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postSlugs(): string[] {
  return posts.map((p) => p.slug);
}

// Newest first, for listings.
export function sortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
