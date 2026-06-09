'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function TermsOfService() {
    const locale = useLocale();

    const content = {
        en: {
            title: "Terms of Service",
            subtitle: "Last updated: June 9, 2026",
            intro: "Welcome to RBA Commercial Services. By accessing our website or using our commercial cleaning services, you agree to be bound by the following Terms of Service. Please read them carefully.",
            sections: [
                {
                    title: "1. Acceptance of Terms",
                    text: "By accessing, browsing, or using this website, or by hiring RBA Commercial Services for cleaning or sanitation needs, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations."
                },
                {
                    title: "2. Use of Our Site & Services",
                    text: "You agree to use this site solely for lawful purposes, such as requesting callbacks, booking commercial cleaning appointments, or acquiring information about our services. You are prohibited from using this site to transmit malicious code, spam, or engage in behavior that disrupts the website's performance."
                },
                {
                    title: "3. SMS Communications & Compliance",
                    text: "When you provide your mobile phone number on our contact forms (such as in callback request forms) and check the marketing consent checkbox, you explicitly consent to receive automated notifications, appointment updates, service reminders, and marketing text messages (SMS) from RBA Commercial Services. Message and data rates may apply. Message frequency varies. You may opt-out of SMS communications at any time by replying 'STOP' to any text message we send. For assistance, you can reply 'HELP' or contact our support team."
                },
                {
                    title: "4. Payments, Cancellations & Scheduling",
                    text: "For commercial cleaning contracts, invoices are issued according to the agreed-upon billing cycle (e.g., monthly). Payments must be made within the net terms specified on the invoice. Any cancellation or rescheduling of a scheduled cleaning visit must be communicated to us at least 24 hours in advance to avoid a rescheduling fee."
                },
                {
                    title: "5. Intellectual Property Rights",
                    text: "All content, designs, text, graphics, logos, and images on this website are the intellectual property of RBA Commercial Services and are protected by Canadian and international copyright and trademark laws. You may not copy, reproduce, or distribute any content without our prior written consent."
                },
                {
                    title: "6. Limitation of Liability",
                    text: "RBA Commercial Services operates with fully insured, bonded, and trained specialists. However, RBA Commercial Services will not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services or our website, including but not limited to loss of business profit, business disruption, or property damage beyond our control or coverage limits."
                },
                {
                    title: "7. Governing Law",
                    text: "These Terms of Service are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada. Any legal actions arising from these terms shall be filed in the competent courts of Toronto, Ontario, Canada."
                },
                {
                    title: "8. Contact Information",
                    text: "For questions or comments regarding these Terms of Service, please contact us at:",
                    details: {
                        email: "Email: contact@rbacommercialservices.com",
                        phone: "Phone: 1-800-RBA-CLEAN",
                        address: "Address: 8360 rue birnam, Montreal, QC, Canada"
                    }
                }
            ]
        },
        fr: {
            title: "Conditions d'utilisation",
            subtitle: "Dernière mise à jour : 9 juin 2026",
            intro: "Bienvenue chez RBA Commercial Services. En accédant à notre site Web ou en utilisant nos services d'entretien commercial, vous acceptez d'être lié par les conditions d'utilisation suivantes. Veuillez les lire attentivement.",
            sections: [
                {
                    title: "1. Acceptation des conditions",
                    text: "En accédant, naviguant ou utilisant ce site Web, ou en engageant RBA Commercial Services pour des services d'entretien, vous reconnaissez avoir lu, compris et accepté d'être lié par ces conditions d'utilisation et par toutes les lois et réglementations applicables."
                },
                {
                    title: "2. Utilisation du site et des services",
                    text: "Vous acceptez d'utiliser ce site uniquement à des fins légales, telles que la demande de rappel, la réservation de rendez-vous de nettoyage ou la recherche d'informations sur nos services. Il est interdit d'utiliser ce site pour transmettre des codes malveillants, des spams ou perturber les performances du site."
                },
                {
                    title: "3. Communications SMS et conformité",
                    text: "Lorsque vous fournissez votre numéro de téléphone mobile dans nos formulaires (tels que le formulaire de rappel) et cochez la case de consentement marketing, vous consentez explicitement à recevoir des notifications automatisées, des mises à jour de rendez-vous, des rappels de service et des messages texte (SMS) de RBA Commercial Services. Des tarifs de messages et de données peuvent s'appliquer. La fréquence des messages varie. Vous pouvez désactiver les communications SMS à tout moment en répondant 'STOP' à n'importe quel message texte que nous envoyons. Pour obtenir de l'aide, vous pouvez répondre 'HELP' ou contacter notre support."
                },
                {
                    title: "4. Paiements, annulations et planification",
                    text: "Pour les contrats de nettoyage commercial, les factures sont émises selon le cycle convenu (par exemple, mensuellement). Les paiements doivent être effectués dans les délais nets spécifiés. Toute annulation ou report d'une visite doit nous être communiqué au moins 24 heures à l'avance pour éviter des frais de report."
                },
                {
                    title: "5. Droits de propriété intellectuelle",
                    text: "Tout le contenu, la conception, les textes, les graphiques, les logos et les images de ce site Web sont la propriété intellectuelle de RBA Commercial Services et sont protégés par les lois canadiennes et internationales sur le droit d'auteur. Vous ne pouvez copier ou reproduire aucun contenu sans notre consentement écrit préalable."
                },
                {
                    title: "6. Limitation de responsabilité",
                    text: "RBA Commercial Services emploie des spécialistes qualifiés, entièrement assurés et cautionnés. Cependant, RBA Commercial Services ne pourra être tenue responsable de tout dommage indirect, accessoire, spécial ou consécutif résultant de l'utilisation de nos services ou de notre site Web, y compris la perte de profit, l'interruption d'activité ou les dommages matériels échappant à notre contrôle ou au-delà de nos limites de couverture."
                },
                {
                    title: "7. Loi applicable",
                    text: "Ces conditions d'utilisation sont régies et interprétées conformément aux lois de la province de l'Ontario et aux lois fédérales du Canada. Toute action en justice découlant de ces conditions sera déposée devant les tribunaux compétents de Toronto, Ontario, Canada."
                },
                {
                    title: "8. Informations de contact",
                    text: "Pour toute question ou commentaire concernant ces conditions d'utilisation, veuillez nous contacter à :",
                    details: {
                        email: "Courriel : contact@rbacommercialservices.com",
                        phone: "Téléphone : 1-800-RBA-CLEAN",
                        address: "Adresse : 8360 rue birnam, Montreal, QC, Canada"
                    }
                }
            ]
        },
        es: {
            title: "Términos de Servicio",
            subtitle: "Última actualización: 9 de junio de 2026",
            intro: "Bienvenido a RBA Commercial Services. Al acceder a nuestro sitio web o utilizar nuestros servicios de limpieza comercial, usted acepta estar sujeto a los siguientes Términos de Servicio. Por favor, léalos detenidamente.",
            sections: [
                {
                    title: "1. Aceptación de los Términos",
                    text: "Al acceder, navegar o utilizar este sitio web, o al contratar a RBA Commercial Services para servicios de limpieza o desinfección, usted reconoce que ha leído, comprendido y acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables."
                },
                {
                    title: "2. Uso de Nuestro Sitio y Servicios",
                    text: "Acepta usar este sitio únicamente para fines lícitos, como solicitar una llamada, reservar citas de limpieza comercial o adquirir información sobre nuestros servicios. Se le prohíbe utilizar este sitio para transmitir código malicioso, correo no deseado (spam) o interrumpir el rendimiento del sitio."
                },
                {
                    title: "3. Comunicaciones por SMS y cumplimiento",
                    text: "Al proporcionar su número de teléfono móvil en nuestros formularios de contacto (como los formularios de solicitud de llamada) y marcar la casilla de consentimiento de marketing, acepta recibir notificaciones automatizadas, actualizaciones de citas, recordatorios de servicio y mensajes de texto (SMS) de RBA Commercial Services. Pueden aplicarse tarifas de mensajes y datos. La frecuencia de los mensajes varía. Puede cancelar las comunicaciones por SMS en cualquier momento respondiendo 'STOP' a cualquier mensaje de texto que le enviemos. Para obtener ayuda, puede responder 'HELP' o comunicarse con nuestro soporte."
                },
                {
                    title: "4. Pagos, cancelaciones y programación",
                    text: "Para contratos de limpieza comercial, las facturas se emiten según el ciclo de facturación acordado (por ejemplo, mensual). Los pagos deben realizarse dentro de los plazos especificados en la factura. Cualquier cancelación o reprogramación de una visita debe comunicarse con al menos 24 horas de anticipación para evitar un cargo adicional."
                },
                {
                    title: "5. Derechos de propiedad intelectual",
                    text: "Todo el contenido, diseños, texto, gráficos, logotipos e imágenes en este sitio web son propiedad intelectual de RBA Commercial Services y están protegidos por las leyes de derechos de autor y marcas registradas canadienses e internacionales. No puede copiar ni reproducir ningún contenido sin nuestro consentimiento previo por escrito."
                },
                {
                    title: "6. Limitación de responsabilidad",
                    text: "RBA Commercial Services opera con especialistas capacitados, totalmente asegurados y con fianza. Sin embargo, RBA Commercial Services no será responsable de ningún daño indirecto, incidental, especial o consecuente que resulte del uso de nuestros servicios o sitio web, incluidos la pérdida de ganancias comerciales, la interrupción del negocio o los daños a la propiedad fuera de nuestro control o cobertura de seguro."
                },
                {
                    title: "7. Ley aplicable",
                    text: "Estos Términos de Servicio se rigen e interpretan de acuerdo con las leyes de la Provincia de Ontario y las leyes federales de Canadá. Cualquier acción legal derivada de estos términos se presentará ante los tribunales competentes de Toronto, Ontario, Canadá."
                },
                {
                    title: "8. Información de contacto",
                    text: "Para preguntas o comentarios sobre estos Términos de Servicio, contáctenos en:",
                    details: {
                        email: "Correo electrónico: contact@rbacommercialservices.com",
                        phone: "Teléfono: 1-800-RBA-CLEAN",
                        address: "Dirección: 8360 rue birnam, Montreal, QC, Canada"
                    }
                }
            ]
        }
    };

    const currentLocale = (locale === 'fr' || locale === 'es') ? locale : 'en';
    const activeText = content[currentLocale];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white text-slate-900 pt-40 pb-32 px-6 md:px-12">
                <div className="max-w-[1200px] mx-auto">
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-12 mb-16">
                        <FadeIn isActive={true} delay={0.1}>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Legal</span>
                        </FadeIn>
                        <FadeIn isActive={true} delay={0.2}>
                            <h1 className="serif-display text-5xl md:text-7xl font-light tracking-tight text-[#0d121b] mb-4">
                                {activeText.title}
                            </h1>
                        </FadeIn>
                        <FadeIn isActive={true} delay={0.3}>
                            <p className="text-sm text-slate-400 font-light">{activeText.subtitle}</p>
                        </FadeIn>
                    </div>

                    {/* Content Intro */}
                    <p className="text-lg text-slate-600 font-light leading-relaxed mb-12 max-w-4xl">
                        {activeText.intro}
                    </p>

                    {/* Sections */}
                    <div className="space-y-12 max-w-4xl">
                        {activeText.sections.map((section, idx) => (
                            <div key={idx} className="border-t border-slate-100 pt-8 first:border-t-0 first:pt-0">
                                <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-slate-600 font-light leading-relaxed mb-4">
                                    {section.text}
                                </p>
                                {section.details && (
                                    <div className="mt-4 bg-slate-50 p-6 border border-slate-100 space-y-2 text-sm font-medium text-slate-700">
                                        <p>{section.details.email}</p>
                                        <p>{section.details.phone}</p>
                                        <p>{section.details.address}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
