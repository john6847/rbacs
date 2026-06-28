// Service-area data powering the "Areas We Serve" local landing pages.
// Each city has unique, localized copy + FAQs so every page earns its own ranking
// instead of looking like thin duplicate content.

import type { Locale } from './site';

export interface AreaContent {
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string[];
  whyHere: string;
  faqs: { question: string; answer: string }[];
}

export interface Area {
  slug: string;
  name: string;
  /** Short region label shown under the city name */
  region: Record<Locale, string>;
  /** Notable districts / business hubs — reinforces local relevance */
  neighborhoods: string[];
  /** Slugs of nearby areas, used for internal linking */
  nearby: string[];
  content: Record<Locale, AreaContent>;
}

export const areas: Area[] = [
  {
    slug: 'montreal',
    name: 'Montreal',
    region: { en: 'Quebec', fr: 'Québec', es: 'Quebec' },
    neighborhoods: [
      'Downtown / Ville-Marie',
      'Old Montreal',
      'Griffintown',
      'Plateau-Mont-Royal',
      'Mile End',
      'Saint-Laurent',
    ],
    nearby: ['westmount', 'saint-laurent', 'laval'],
    content: {
      en: {
        metaTitle: 'Commercial Cleaning in Montreal | Office & Janitorial Services',
        metaDescription:
          'Reliable commercial cleaning in Montreal for offices, clinics, retail & post-construction. Fully insured, bilingual crews, free quotes. Call +1 514-623-0791.',
        tagline: 'Commercial cleaning across the heart of Montreal',
        intro: [
          'From the high-rise towers of Downtown and the boutiques of Old Montreal to the tech offices of Griffintown and Mile End, RBA Commercial Services keeps Montreal businesses spotless, healthy, and ready for clients.',
          'We tailor every contract to your facility, your hours, and your standards — with consistent crews, detailed checklists, and a facilities manager you can reach directly. No vague promises, just dependable results on every visit.',
        ],
        whyHere:
          'As a Montreal-based company headquartered on rue Birnam, we know the city’s buildings, parking realities, and after-hours access rules first-hand — so service starts on time and runs without friction.',
        faqs: [
          {
            question: 'Do you offer office cleaning in downtown Montreal?',
            answer:
              'Yes. We service offices throughout Ville-Marie and downtown Montreal, including high-rise towers, co-working spaces, and professional suites, with flexible day or after-hours scheduling.',
          },
          {
            question: 'Are your cleaning crews insured and bonded?',
            answer:
              'Every RBA crew is fully insured with $2M liability coverage, bonded, and background-checked, so your Montreal facility is protected at all times.',
          },
          {
            question: 'How fast can I get a quote for my Montreal business?',
            answer:
              'Most quotes are returned within one business day. Reach us at +1 514-623-0791 or request a free walkthrough online and we’ll build a tailored proposal.',
          },
        ],
      },
      fr: {
        metaTitle: 'Nettoyage commercial à Montréal | Entretien de bureaux',
        metaDescription:
          'Nettoyage commercial fiable à Montréal : bureaux, cliniques, commerces et après-construction. Assurés, équipes bilingues, soumissions gratuites. 514-623-0791.',
        tagline: 'Nettoyage commercial au cœur de Montréal',
        intro: [
          'Des tours du centre-ville aux boutiques du Vieux-Montréal, en passant par les bureaux techno de Griffintown et du Mile End, RBA Commercial Services garde les entreprises montréalaises impeccables, saines et prêtes à recevoir leurs clients.',
          'Nous adaptons chaque contrat à votre établissement, à vos horaires et à vos normes — avec des équipes constantes, des listes de contrôle détaillées et un gestionnaire que vous pouvez joindre directement. Aucune promesse vague, que des résultats fiables à chaque visite.',
        ],
        whyHere:
          'Entreprise montréalaise établie rue Birnam, nous connaissons les immeubles de la ville, le stationnement et les accès en dehors des heures — le service commence à l’heure et se déroule sans accroc.',
        faqs: [
          {
            question: 'Offrez-vous le nettoyage de bureaux au centre-ville de Montréal ?',
            answer:
              'Oui. Nous desservons les bureaux de Ville-Marie et du centre-ville, y compris les tours, les espaces de cotravail et les suites professionnelles, avec un horaire flexible de jour ou de soir.',
          },
          {
            question: 'Vos équipes sont-elles assurées et cautionnées ?',
            answer:
              'Chaque équipe RBA est entièrement assurée (responsabilité de 2 M$), cautionnée et soumise à une vérification des antécédents, pour protéger votre établissement en tout temps.',
          },
          {
            question: 'En combien de temps puis-je obtenir une soumission ?',
            answer:
              'La plupart des soumissions sont remises en un jour ouvrable. Appelez le 514-623-0791 ou demandez une visite gratuite en ligne pour une proposition sur mesure.',
          },
        ],
      },
      es: {
        metaTitle: 'Limpieza comercial en Montreal | Oficinas y servicios',
        metaDescription:
          'Limpieza comercial confiable en Montreal: oficinas, clínicas, comercios y postobra. Asegurados, equipos bilingües, presupuestos gratis. 514-623-0791.',
        tagline: 'Limpieza comercial en el corazón de Montreal',
        intro: [
          'Desde las torres del centro y las boutiques del Viejo Montreal hasta las oficinas tecnológicas de Griffintown y Mile End, RBA Commercial Services mantiene los negocios de Montreal impecables, saludables y listos para sus clientes.',
          'Adaptamos cada contrato a su instalación, su horario y sus estándares — con equipos constantes, listas de verificación detalladas y un gerente de instalaciones al que puede contactar directamente. Sin promesas vagas, solo resultados confiables en cada visita.',
        ],
        whyHere:
          'Como empresa de Montreal con sede en la calle Birnam, conocemos de primera mano los edificios de la ciudad, el estacionamiento y los accesos fuera de horario, para que el servicio empiece a tiempo y fluya sin problemas.',
        faqs: [
          {
            question: '¿Ofrecen limpieza de oficinas en el centro de Montreal?',
            answer:
              'Sí. Damos servicio a oficinas en Ville-Marie y el centro de Montreal, incluidas torres, espacios de cotrabajo y suites profesionales, con horarios flexibles de día o de noche.',
          },
          {
            question: '¿Sus equipos están asegurados y afianzados?',
            answer:
              'Cada equipo de RBA está totalmente asegurado (cobertura de 2 M$), afianzado y con verificación de antecedentes, para proteger su instalación en todo momento.',
          },
          {
            question: '¿Qué tan rápido obtengo un presupuesto?',
            answer:
              'La mayoría de los presupuestos se entregan en un día hábil. Llame al 514-623-0791 o solicite una visita gratuita en línea para una propuesta a medida.',
          },
        ],
      },
    },
  },
  {
    slug: 'laval',
    name: 'Laval',
    region: { en: 'Quebec', fr: 'Québec', es: 'Quebec' },
    neighborhoods: ['Chomedey', 'Sainte-Dorothée', 'Vimont', 'Laval-des-Rapides', 'Carré Laval'],
    nearby: ['montreal', 'saint-laurent'],
    content: {
      en: {
        metaTitle: 'Commercial Cleaning in Laval | Office & Clinic Cleaning',
        metaDescription:
          'Professional commercial cleaning in Laval for offices, medical clinics & retail. Insured, bilingual, flexible scheduling. Free quote: +1 514-623-0791.',
        tagline: 'Dependable commercial cleaning for Laval businesses',
        intro: [
          'Laval’s growing business corridors — from Chomedey’s office parks to the retail strips along Boulevard Saint-Martin — deserve a cleaning partner that shows up on time, every time. That’s RBA.',
          'Whether you run a clinic, a corporate office, or a storefront, we build a schedule and checklist around your space so it always looks its best for staff and customers.',
        ],
        whyHere:
          'Just across the bridge from our Montreal headquarters, Laval is part of our core service area — meaning short response times and the same crews you’ll come to recognize.',
        faqs: [
          {
            question: 'Do you clean medical clinics in Laval?',
            answer:
              'Yes. We follow clinical-grade disinfection protocols with colour-coded tools and cross-contamination controls suited to Laval clinics and healthcare offices.',
          },
          {
            question: 'Can you clean outside of business hours in Laval?',
            answer:
              'Absolutely. We offer early-morning, evening, and weekend scheduling so cleaning never disrupts your Laval operations.',
          },
          {
            question: 'Is RBA insured to work in Laval?',
            answer:
              'Yes — fully insured ($2M liability), bonded, and background-checked crews serve every Laval contract.',
          },
        ],
      },
      fr: {
        metaTitle: 'Nettoyage commercial à Laval | Bureaux et cliniques',
        metaDescription:
          'Nettoyage commercial professionnel à Laval : bureaux, cliniques médicales et commerces. Assurés, bilingues, horaires flexibles. Soumission : 514-623-0791.',
        tagline: 'Un nettoyage commercial fiable pour les entreprises de Laval',
        intro: [
          'Les pôles d’affaires en croissance de Laval — des parcs de bureaux de Chomedey aux commerces du boulevard Saint-Martin — méritent un partenaire d’entretien ponctuel et constant. C’est RBA.',
          'Que vous exploitiez une clinique, un bureau ou un commerce, nous bâtissons un horaire et une liste de contrôle adaptés à votre espace pour qu’il soit toujours impeccable.',
        ],
        whyHere:
          'À quelques minutes de notre siège montréalais, Laval fait partie de notre zone de service principale — des délais courts et les mêmes équipes que vous reconnaîtrez.',
        faqs: [
          {
            question: 'Nettoyez-vous les cliniques médicales à Laval ?',
            answer:
              'Oui. Nous appliquons des protocoles de désinfection de niveau clinique avec outils à code de couleur et contrôle de la contamination croisée, adaptés aux cliniques de Laval.',
          },
          {
            question: 'Pouvez-vous nettoyer en dehors des heures à Laval ?',
            answer:
              'Tout à fait. Nous offrons des horaires tôt le matin, en soirée et la fin de semaine pour ne jamais perturber vos activités.',
          },
          {
            question: 'RBA est-elle assurée pour travailler à Laval ?',
            answer:
              'Oui — équipes entièrement assurées (responsabilité de 2 M$), cautionnées et vérifiées pour chaque contrat à Laval.',
          },
        ],
      },
      es: {
        metaTitle: 'Limpieza comercial en Laval | Oficinas y clínicas',
        metaDescription:
          'Limpieza comercial profesional en Laval: oficinas, clínicas médicas y comercios. Asegurados, bilingües, horarios flexibles. Presupuesto: 514-623-0791.',
        tagline: 'Limpieza comercial confiable para negocios de Laval',
        intro: [
          'Los crecientes corredores de negocios de Laval —desde los parques de oficinas de Chomedey hasta los comercios del bulevar Saint-Martin— merecen un socio de limpieza puntual y constante. Eso es RBA.',
          'Ya sea una clínica, una oficina corporativa o una tienda, creamos un horario y una lista de verificación a la medida de su espacio para que siempre luzca impecable.',
        ],
        whyHere:
          'A pocos minutos de nuestra sede en Montreal, Laval forma parte de nuestra zona de servicio principal: tiempos de respuesta cortos y los mismos equipos que reconocerá.',
        faqs: [
          {
            question: '¿Limpian clínicas médicas en Laval?',
            answer:
              'Sí. Seguimos protocolos de desinfección de nivel clínico con herramientas codificadas por color y controles de contaminación cruzada adecuados para clínicas de Laval.',
          },
          {
            question: '¿Pueden limpiar fuera del horario laboral en Laval?',
            answer:
              'Por supuesto. Ofrecemos horarios de madrugada, noche y fines de semana para no interrumpir sus operaciones.',
          },
          {
            question: '¿RBA está asegurada para trabajar en Laval?',
            answer:
              'Sí: equipos totalmente asegurados (2 M$), afianzados y con verificación de antecedentes para cada contrato en Laval.',
          },
        ],
      },
    },
  },
  {
    slug: 'longueuil',
    name: 'Longueuil',
    region: { en: 'Quebec', fr: 'Québec', es: 'Quebec' },
    neighborhoods: ['Vieux-Longueuil', 'Saint-Hubert', 'Greenfield Park', 'Place Charles-Le Moyne'],
    nearby: ['brossard', 'montreal'],
    content: {
      en: {
        metaTitle: 'Commercial Cleaning in Longueuil | Janitorial Services',
        metaDescription:
          'Commercial & office cleaning in Longueuil and the South Shore. Insured, reliable, bilingual crews. Get a free quote today: +1 514-623-0791.',
        tagline: 'Commercial cleaning for Longueuil and the South Shore',
        intro: [
          'Longueuil businesses — from the offices around Place Charles-Le Moyne to the industrial and aerospace hub of Saint-Hubert — count on RBA for clean, healthy, professional spaces.',
          'We design maintenance plans that fit your operation: daily, weekly, or one-time deep cleans, always delivered by trained, insured crews who treat your facility like their own.',
        ],
        whyHere:
          'Longueuil anchors our South Shore coverage. We understand the commute and the buildings here, so we schedule crews efficiently and keep your service consistent.',
        faqs: [
          {
            question: 'Do you serve all of Longueuil including Saint-Hubert?',
            answer:
              'Yes — we cover Vieux-Longueuil, Saint-Hubert, Greenfield Park, and the surrounding South Shore for offices, retail, and industrial sites.',
          },
          {
            question: 'Can you handle industrial and post-construction cleaning in Longueuil?',
            answer:
              'We do. Our crews handle heavy dust, debris, and inspection-ready detailing for renovations and new builds across Longueuil.',
          },
          {
            question: 'How do I start service in Longueuil?',
            answer:
              'Call +1 514-623-0791 or request a free walkthrough online. We’ll assess your site and return a tailored quote within one business day.',
          },
        ],
      },
      fr: {
        metaTitle: 'Nettoyage commercial à Longueuil | Entretien ménager',
        metaDescription:
          'Nettoyage commercial et de bureaux à Longueuil et sur la Rive-Sud. Équipes assurées, fiables et bilingues. Soumission gratuite : 514-623-0791.',
        tagline: 'Nettoyage commercial pour Longueuil et la Rive-Sud',
        intro: [
          'Les entreprises de Longueuil — des bureaux de la place Charles-Le Moyne au pôle aérospatial de Saint-Hubert — comptent sur RBA pour des espaces propres, sains et professionnels.',
          'Nous concevons des plans d’entretien adaptés à vos activités : quotidiens, hebdomadaires ou grands ménages ponctuels, toujours livrés par des équipes formées et assurées.',
        ],
        whyHere:
          'Longueuil est au cœur de notre couverture de la Rive-Sud. Nous connaissons les trajets et les immeubles d’ici, ce qui assure un service efficace et constant.',
        faqs: [
          {
            question: 'Desservez-vous tout Longueuil, y compris Saint-Hubert ?',
            answer:
              'Oui — nous couvrons le Vieux-Longueuil, Saint-Hubert, Greenfield Park et la Rive-Sud, pour bureaux, commerces et sites industriels.',
          },
          {
            question: 'Faites-vous le nettoyage industriel et après-construction à Longueuil ?',
            answer:
              'Oui. Nos équipes gèrent la poussière lourde, les débris et la finition prête à l’inspection pour rénovations et constructions neuves.',
          },
          {
            question: 'Comment démarrer le service à Longueuil ?',
            answer:
              'Appelez le 514-623-0791 ou demandez une visite gratuite en ligne. Nous évaluons votre site et remettons une soumission en un jour ouvrable.',
          },
        ],
      },
      es: {
        metaTitle: 'Limpieza comercial en Longueuil | Servicios de aseo',
        metaDescription:
          'Limpieza comercial y de oficinas en Longueuil y la Rive-Sud. Equipos asegurados, confiables y bilingües. Presupuesto gratis: 514-623-0791.',
        tagline: 'Limpieza comercial para Longueuil y la Rive-Sud',
        intro: [
          'Los negocios de Longueuil —desde las oficinas de la Place Charles-Le Moyne hasta el polo aeroespacial de Saint-Hubert— confían en RBA para espacios limpios, saludables y profesionales.',
          'Diseñamos planes de mantenimiento a la medida de su operación: diarios, semanales o limpiezas profundas puntuales, siempre con equipos capacitados y asegurados.',
        ],
        whyHere:
          'Longueuil es el centro de nuestra cobertura en la Rive-Sud. Conocemos los trayectos y los edificios de la zona, lo que asegura un servicio eficiente y constante.',
        faqs: [
          {
            question: '¿Atienden todo Longueuil, incluido Saint-Hubert?',
            answer:
              'Sí: cubrimos Vieux-Longueuil, Saint-Hubert, Greenfield Park y la Rive-Sud, para oficinas, comercios y sitios industriales.',
          },
          {
            question: '¿Hacen limpieza industrial y postobra en Longueuil?',
            answer:
              'Sí. Nuestros equipos manejan polvo pesado, escombros y acabado listo para inspección en renovaciones y obras nuevas.',
          },
          {
            question: '¿Cómo inicio el servicio en Longueuil?',
            answer:
              'Llame al 514-623-0791 o solicite una visita gratuita en línea. Evaluamos su sitio y entregamos un presupuesto en un día hábil.',
          },
        ],
      },
    },
  },
  {
    slug: 'brossard',
    name: 'Brossard',
    region: { en: 'Quebec', fr: 'Québec', es: 'Quebec' },
    neighborhoods: ['Quartier DIX30', 'Solar Uniquartier', 'Secteur R', 'Panama'],
    nearby: ['longueuil', 'montreal'],
    content: {
      en: {
        metaTitle: 'Commercial Cleaning in Brossard | Office & Retail Cleaning',
        metaDescription:
          'Office, retail & commercial cleaning in Brossard, including Quartier DIX30. Insured, bilingual, flexible scheduling. Free quote: +1 514-623-0791.',
        tagline: 'Polished commercial cleaning for Brossard',
        intro: [
          'Brossard pairs major retail destinations like Quartier DIX30 with a fast-growing base of corporate offices and clinics. RBA keeps these high-traffic, customer-facing spaces consistently spotless.',
          'From storefront glass and high-gloss floors to executive suites, we deliver the detail-oriented standard your clients and staff expect.',
        ],
        whyHere:
          'With the REM connecting Brossard to downtown, the area is booming. Our crews handle the high foot traffic of DIX30 retailers and the precision demands of nearby professional offices alike.',
        faqs: [
          {
            question: 'Do you clean retail stores in Quartier DIX30?',
            answer:
              'Yes. We specialize in retail cleaning — entrance glass, high-gloss floors, fitting rooms, and display detailing — ideal for DIX30 and Brossard storefronts.',
          },
          {
            question: 'Can you scale to large commercial spaces in Brossard?',
            answer:
              'We service everything from boutique suites to large offices and multi-tenant buildings, with crews and scheduling sized to your square footage.',
          },
          {
            question: 'Are you available evenings and weekends in Brossard?',
            answer:
              'Yes — flexible after-hours and weekend scheduling keeps cleaning out of the way of your customers and staff.',
          },
        ],
      },
      fr: {
        metaTitle: 'Nettoyage commercial à Brossard | Bureaux et commerces',
        metaDescription:
          'Nettoyage de bureaux, commerces et espaces commerciaux à Brossard, dont le Quartier DIX30. Assurés, bilingues, flexibles. Soumission : 514-623-0791.',
        tagline: 'Un nettoyage commercial soigné pour Brossard',
        intro: [
          'Brossard allie de grandes destinations commerciales comme le Quartier DIX30 à une base croissante de bureaux et de cliniques. RBA garde ces espaces achalandés toujours impeccables.',
          'Des vitrines et planchers lustrés aux suites de direction, nous offrons le souci du détail attendu par vos clients et votre personnel.',
        ],
        whyHere:
          'Avec le REM qui relie Brossard au centre-ville, le secteur est en plein essor. Nos équipes gèrent autant l’achalandage du DIX30 que la précision exigée par les bureaux professionnels.',
        faqs: [
          {
            question: 'Nettoyez-vous les commerces du Quartier DIX30 ?',
            answer:
              'Oui. Nous sommes spécialisés en nettoyage commercial — vitrines, planchers lustrés, cabines d’essayage et présentoirs — idéal pour le DIX30 et Brossard.',
          },
          {
            question: 'Pouvez-vous gérer de grands espaces commerciaux à Brossard ?',
            answer:
              'Nous desservons des suites boutiques jusqu’aux grands bureaux et immeubles multilocataires, avec des équipes adaptées à votre superficie.',
          },
          {
            question: 'Êtes-vous disponibles soirs et fins de semaine à Brossard ?',
            answer:
              'Oui — des horaires flexibles en dehors des heures pour ne jamais déranger vos clients et votre personnel.',
          },
        ],
      },
      es: {
        metaTitle: 'Limpieza comercial en Brossard | Oficinas y comercios',
        metaDescription:
          'Limpieza de oficinas, comercios y espacios comerciales en Brossard, incluido Quartier DIX30. Asegurados, bilingües, flexibles. Presupuesto: 514-623-0791.',
        tagline: 'Limpieza comercial pulida para Brossard',
        intro: [
          'Brossard combina grandes destinos comerciales como Quartier DIX30 con una base creciente de oficinas y clínicas. RBA mantiene estos espacios concurridos siempre impecables.',
          'Desde vidrios de fachada y pisos brillantes hasta suites ejecutivas, ofrecemos el estándar detallista que esperan sus clientes y su personal.',
        ],
        whyHere:
          'Con el REM conectando Brossard con el centro, la zona está en auge. Nuestros equipos manejan tanto el alto tránsito de DIX30 como la precisión que exigen las oficinas profesionales.',
        faqs: [
          {
            question: '¿Limpian tiendas en Quartier DIX30?',
            answer:
              'Sí. Nos especializamos en limpieza comercial: vidrios de entrada, pisos brillantes, probadores y vitrinas, ideal para DIX30 y Brossard.',
          },
          {
            question: '¿Pueden con grandes espacios comerciales en Brossard?',
            answer:
              'Atendemos desde suites boutique hasta grandes oficinas y edificios multiinquilino, con equipos y horarios acordes a su superficie.',
          },
          {
            question: '¿Están disponibles noches y fines de semana en Brossard?',
            answer:
              'Sí: horarios flexibles fuera de hora para no interferir con sus clientes ni su personal.',
          },
        ],
      },
    },
  },
  {
    slug: 'westmount',
    name: 'Westmount',
    region: { en: 'Quebec', fr: 'Québec', es: 'Quebec' },
    neighborhoods: ['Greene Avenue', 'Victoria Village', 'Sherbrooke Street', 'Westmount Square'],
    nearby: ['montreal', 'saint-laurent'],
    content: {
      en: {
        metaTitle: 'Commercial Cleaning in Westmount | Premium Office Cleaning',
        metaDescription:
          'Premium commercial & office cleaning in Westmount. Discreet, detail-obsessed, insured crews for professional suites & boutiques. Free quote: +1 514-623-0791.',
        tagline: 'Premium commercial cleaning for Westmount',
        intro: [
          'Westmount’s professional offices, law and medical practices, and upscale boutiques along Greene Avenue hold a higher standard — and so do we.',
          'RBA delivers discreet, meticulous service with consistent crews who respect your space, your clients, and your privacy. The result is an environment that quietly reflects your reputation.',
        ],
        whyHere:
          'Westmount clients expect polish without disruption. Our checklists and trained specialists are built for exactly that — premium results, delivered without fuss.',
        faqs: [
          {
            question: 'Do you offer premium office cleaning in Westmount?',
            answer:
              'Yes. We provide detail-focused cleaning for Westmount professional suites, law and medical offices, and boutiques, with discreet, vetted crews.',
          },
          {
            question: 'Can cleaning be done discreetly around clients?',
            answer:
              'Absolutely. We schedule around your hours and train crews to work quietly and professionally in client-facing Westmount environments.',
          },
          {
            question: 'Do you use eco-friendly products in Westmount?',
            answer:
              'Yes — green-certified, eco-conscious products are available for a healthier, safer workplace on request.',
          },
        ],
      },
      fr: {
        metaTitle: 'Nettoyage commercial à Westmount | Bureaux haut de gamme',
        metaDescription:
          'Nettoyage commercial et de bureaux haut de gamme à Westmount. Équipes discrètes, minutieuses et assurées. Soumission gratuite : 514-623-0791.',
        tagline: 'Un nettoyage commercial haut de gamme pour Westmount',
        intro: [
          'Les bureaux professionnels de Westmount, les cabinets juridiques et médicaux et les boutiques chics de l’avenue Greene ont des normes élevées — nous aussi.',
          'RBA offre un service discret et méticuleux, avec des équipes constantes qui respectent votre espace, vos clients et votre confidentialité. Le résultat reflète votre réputation.',
        ],
        whyHere:
          'La clientèle de Westmount exige du raffinement sans dérangement. Nos listes de contrôle et nos spécialistes formés sont conçus pour cela : des résultats haut de gamme, sans tracas.',
        faqs: [
          {
            question: 'Offrez-vous un nettoyage de bureaux haut de gamme à Westmount ?',
            answer:
              'Oui. Nous offrons un nettoyage minutieux pour les suites professionnelles, cabinets juridiques et médicaux et boutiques de Westmount, avec des équipes discrètes et vérifiées.',
          },
          {
            question: 'Le nettoyage peut-il se faire discrètement près des clients ?',
            answer:
              'Tout à fait. Nous planifions selon vos heures et formons les équipes à travailler discrètement dans les environnements de Westmount.',
          },
          {
            question: 'Utilisez-vous des produits écologiques à Westmount ?',
            answer:
              'Oui — des produits certifiés écologiques sont disponibles sur demande pour un milieu de travail plus sain.',
          },
        ],
      },
      es: {
        metaTitle: 'Limpieza comercial en Westmount | Oficinas premium',
        metaDescription:
          'Limpieza comercial y de oficinas premium en Westmount. Equipos discretos, meticulosos y asegurados. Presupuesto gratis: 514-623-0791.',
        tagline: 'Limpieza comercial premium para Westmount',
        intro: [
          'Las oficinas profesionales de Westmount, los despachos jurídicos y médicos y las boutiques exclusivas de la avenida Greene exigen un estándar más alto, y nosotros también.',
          'RBA ofrece un servicio discreto y meticuloso, con equipos constantes que respetan su espacio, sus clientes y su privacidad. El resultado refleja su reputación.',
        ],
        whyHere:
          'La clientela de Westmount espera refinamiento sin interrupciones. Nuestras listas de verificación y especialistas capacitados están hechos para eso: resultados premium, sin complicaciones.',
        faqs: [
          {
            question: '¿Ofrecen limpieza de oficinas premium en Westmount?',
            answer:
              'Sí. Brindamos limpieza detallista para suites profesionales, despachos jurídicos y médicos y boutiques de Westmount, con equipos discretos y verificados.',
          },
          {
            question: '¿La limpieza puede hacerse de forma discreta cerca de clientes?',
            answer:
              'Por supuesto. Programamos según su horario y capacitamos a los equipos para trabajar discretamente en entornos de Westmount.',
          },
          {
            question: '¿Usan productos ecológicos en Westmount?',
            answer:
              'Sí: hay productos certificados ecológicos disponibles a pedido para un lugar de trabajo más saludable.',
          },
        ],
      },
    },
  },
  {
    slug: 'saint-laurent',
    name: 'Saint-Laurent',
    region: { en: 'Montreal Borough', fr: 'Arrondissement de Montréal', es: 'Distrito de Montreal' },
    neighborhoods: ['Technoparc Montréal', 'Bois-Franc', 'Marché Central area', 'Côte-Vertu'],
    nearby: ['montreal', 'laval'],
    content: {
      en: {
        metaTitle: 'Commercial Cleaning in Saint-Laurent | Office & Industrial',
        metaDescription:
          'Commercial, office & industrial cleaning in Saint-Laurent and the Technoparc. Insured, reliable, bilingual crews. Free quote: +1 514-623-0791.',
        tagline: 'Commercial & industrial cleaning for Saint-Laurent',
        intro: [
          'Saint-Laurent is one of Montreal’s largest employment hubs — home to the Technoparc, aerospace and tech firms, warehouses, and corporate offices. RBA keeps these demanding facilities clean and compliant.',
          'From office towers to warehouse floors and post-construction sites, we match the right crew, equipment, and schedule to your operation.',
        ],
        whyHere:
          'Headquartered nearby on rue Birnam, Saint-Laurent is practically our backyard. That proximity means fast response and reliable, recurring service.',
        faqs: [
          {
            question: 'Do you clean offices in the Saint-Laurent Technoparc?',
            answer:
              'Yes. We service tech and aerospace offices, labs, and corporate suites throughout the Technoparc and greater Saint-Laurent.',
          },
          {
            question: 'Can you handle warehouse and industrial cleaning?',
            answer:
              'We do — heavy-duty floor care, dust extraction, and high-ceiling detailing for Saint-Laurent warehouses and industrial sites.',
          },
          {
            question: 'How quickly can you start in Saint-Laurent?',
            answer:
              'Because our headquarters is minutes away, we can typically schedule a walkthrough fast and start service shortly after your quote is approved.',
          },
        ],
      },
      fr: {
        metaTitle: 'Nettoyage commercial à Saint-Laurent | Bureaux et industrie',
        metaDescription:
          'Nettoyage commercial, de bureaux et industriel à Saint-Laurent et au Technoparc. Équipes assurées et bilingues. Soumission gratuite : 514-623-0791.',
        tagline: 'Nettoyage commercial et industriel pour Saint-Laurent',
        intro: [
          'Saint-Laurent est l’un des plus grands pôles d’emploi de Montréal — Technoparc, entreprises aérospatiales et technos, entrepôts et bureaux. RBA garde ces installations exigeantes propres et conformes.',
          'Des tours de bureaux aux planchers d’entrepôt et aux chantiers, nous adaptons l’équipe, l’équipement et l’horaire à vos activités.',
        ],
        whyHere:
          'Notre siège, rue Birnam, est tout près : Saint-Laurent, c’est pratiquement notre cour. Cette proximité assure une réponse rapide et un service récurrent fiable.',
        faqs: [
          {
            question: 'Nettoyez-vous les bureaux du Technoparc de Saint-Laurent ?',
            answer:
              'Oui. Nous desservons les bureaux technos et aérospatiaux, les laboratoires et les suites corporatives du Technoparc et de Saint-Laurent.',
          },
          {
            question: 'Gérez-vous le nettoyage d’entrepôts et industriel ?',
            answer:
              'Oui — entretien de planchers robustes, extraction de poussière et finition en hauteur pour les entrepôts et sites industriels.',
          },
          {
            question: 'En combien de temps pouvez-vous commencer à Saint-Laurent ?',
            answer:
              'Comme notre siège est à quelques minutes, nous planifions vite une visite et démarrons peu après l’approbation de la soumission.',
          },
        ],
      },
      es: {
        metaTitle: 'Limpieza comercial en Saint-Laurent | Oficinas e industria',
        metaDescription:
          'Limpieza comercial, de oficinas e industrial en Saint-Laurent y el Technoparc. Equipos asegurados y bilingües. Presupuesto gratis: 514-623-0791.',
        tagline: 'Limpieza comercial e industrial para Saint-Laurent',
        intro: [
          'Saint-Laurent es uno de los mayores polos de empleo de Montreal: hogar del Technoparc, empresas aeroespaciales y tecnológicas, almacenes y oficinas. RBA mantiene estas instalaciones exigentes limpias y en regla.',
          'Desde torres de oficinas hasta pisos de almacén y obras de postconstrucción, asignamos el equipo, el equipamiento y el horario adecuados a su operación.',
        ],
        whyHere:
          'Con sede cercana en la calle Birnam, Saint-Laurent es prácticamente nuestro patio. Esa cercanía significa respuesta rápida y servicio recurrente confiable.',
        faqs: [
          {
            question: '¿Limpian oficinas en el Technoparc de Saint-Laurent?',
            answer:
              'Sí. Atendemos oficinas tecnológicas y aeroespaciales, laboratorios y suites corporativas en el Technoparc y en Saint-Laurent.',
          },
          {
            question: '¿Pueden con limpieza de almacenes e industrial?',
            answer:
              'Sí: cuidado de pisos resistentes, extracción de polvo y detallado en altura para almacenes y sitios industriales.',
          },
          {
            question: '¿Qué tan rápido pueden empezar en Saint-Laurent?',
            answer:
              'Como nuestra sede está a minutos, solemos agendar una visita pronto y comenzar poco después de aprobar el presupuesto.',
          },
        ],
      },
    },
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function areaSlugs(): string[] {
  return areas.map((a) => a.slug);
}
