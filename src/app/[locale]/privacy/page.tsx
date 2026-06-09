'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function PrivacyPolicy() {
    const locale = useLocale();

    const content = {
        en: {
            title: "Privacy Policy",
            subtitle: "Last updated: June 9, 2026",
            intro: "At RBA Commercial Services, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.",
            sections: [
                {
                    title: "1. Information We Collect",
                    text: "We collect information that you voluntarily provide to us when you fill out forms on our website (such as our contact form or callback request form) or communicate with us directly. This information may include your full name, company name, corporate email address, phone number, and details about your facility cleaning needs."
                },
                {
                    title: "2. How We Use Your Information",
                    text: "We use the information we collect to respond to your inquiries, provide customized commercial cleaning quotes, schedule services, manage client relationships, and send updates, alerts, or promotional offers relevant to your business."
                },
                {
                    title: "3. SMS Messaging & Opt-In Consent",
                    text: "If you voluntarily provide your phone number and opt-in to receive text messages (SMS) from us (such as scheduling reminders, service updates, or marketing alerts), we will use your phone number exclusively for those communications. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
                },
                {
                    title: "4. Information Sharing & Disclosure",
                    text: "Except as described in Section 3, we do not sell, rent, or lease your personal information to third parties. We may share your information with trusted third-party service providers (such as website hosting companies or data analytics tools) who assist us in operating our website and business, subject to strict confidentiality agreements."
                },
                {
                    title: "5. Data Security",
                    text: "We implement robust technical and organizational security measures to protect your personal information against unauthorized access, loss, alteration, or disclosure. However, no electronic transmission over the internet or storage technology can be guaranteed to be 100% secure."
                },
                {
                    title: "6. Your Rights & Choices",
                    text: "You have the right to access, update, correct, or request the deletion of your personal information in our possession. If you have opted-in to receive our email newsletter or SMS messages, you can opt-out at any time by following the unsubscribe instructions or replying 'STOP' to our text messages."
                },
                {
                    title: "7. Contact Us",
                    text: "If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:",
                    details: {
                        email: "Email: contact@rbacommercialservices.com",
                        phone: "Phone: 1-800-RBA-CLEAN",
                        address: "Address: 8360 rue birnam, Montreal, QC, Canada"
                    }
                }
            ]
        },
        fr: {
            title: "Politique de confidentialité",
            subtitle: "Dernière mise à jour : 9 juin 2026",
            intro: "Chez RBA Commercial Services, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité décrit comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles lorsque vous visitez notre site Web ou utilisez nos services.",
            sections: [
                {
                    title: "1. Informations collectées",
                    text: "Nous collectons les informations que vous nous fournissez volontairement lorsque vous remplissez des formulaires sur notre site Web (tels que notre formulaire de contact ou de rappel) ou communiquez directement avec nous. Ces informations peuvent inclure votre nom complet, le nom de votre entreprise, votre adresse courriel professionnelle, votre numéro de téléphone et des détails sur vos besoins d'entretien."
                },
                {
                    title: "2. Utilisation des informations",
                    text: "Nous utilisons les informations collectées pour répondre à vos demandes, fournir des devis personnalisés, planifier les services, gérer la relation client et envoyer des mises à jour, des alertes ou des offres promotionnelles pertinentes pour votre entreprise."
                },
                {
                    title: "3. Messagerie SMS et consentement d'inscription",
                    text: "Si vous fournissez volontairement votre numéro de téléphone et acceptez de recevoir des messages texte (SMS) de notre part (pour des rappels d'horaires, des mises à jour de service ou des alertes de marketing), nous utiliserons votre numéro de téléphone exclusivement pour ces communications. Aucune information mobile ne sera partagée avec des tiers ou des affiliés à des fins de marketing ou de promotion. Toutes les catégories ci-dessus excluent les données d'inscription et le consentement de l'expéditeur du message texte ; ces informations ne seront partagées avec aucun tiers."
                },
                {
                    title: "4. Partage et divulgation d'informations",
                    text: "Sauf indication contraire à la section 3, nous ne vendons, ne louons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services tiers de confiance (tels que des hébergeurs de site ou des outils d'analyse de données) qui nous aident à exploiter notre site Web, sous réserve de strictes obligations de confidentialité."
                },
                {
                    title: "5. Sécurité des données",
                    text: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles robustes pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation. Cependant, aucune méthode de transmission ou de stockage électronique ne peut être garantie à 100 % sécurisée."
                },
                {
                    title: "6. Vos droits et choix",
                    text: "Vous disposez d'un droit d'accès, de mise à jour, de rectification ou de suppression de vos données personnelles. Si vous avez accepté de recevoir nos courriels ou SMS, vous pouvez vous désinscrire à tout moment en suivant les instructions de désabonnement ou en répondant 'STOP' à nos SMS."
                },
                {
                    title: "7. Contactez-nous",
                    text: "Pour toute question ou préoccupation concernant cette politique de confidentialité ou nos pratiques de protection des données, veuillez nous contacter à :",
                    details: {
                        email: "Courriel : contact@rbacommercialservices.com",
                        phone: "Téléphone : 1-800-RBA-CLEAN",
                        address: "Adresse : 8360 rue birnam, Montreal, QC, Canada"
                    }
                }
            ]
        },
        es: {
            title: "Política de Privacidad",
            subtitle: "Última actualización: 9 de junio de 2026",
            intro: "En RBA Commercial Services, estamos comprometidos con la protección de su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos su información personal al visitar nuestro sitio web o utilizar nuestros servicios.",
            sections: [
                {
                    title: "1. Información que recopilamos",
                    text: "Recopilamos la información que nos proporciona voluntariamente al completar formularios en nuestro sitio web (como el de contacto o solicitud de llamada) o al comunicarse directamente con nosotros. Esta información puede incluir su nombre completo, nombre de la empresa, dirección de correo electrónico corporativo, número de teléfono y detalles de sus necesidades de limpieza."
                },
                {
                    title: "2. Cómo usamos su información",
                    text: "Utilizamos la información recopilada para responder a sus consultas, proporcionar cotizaciones de limpieza comercial personalizadas, programar servicios, gestionar la relación con el cliente y enviar actualizaciones, alertas u ofertas promocionales relevantes para su negocio."
                },
                {
                    title: "3. Mensajería SMS y consentimiento de aceptación",
                    text: "Si proporciona voluntariamente su número de teléfono y acepta recibir mensajes de texto (SMS) de nuestra parte (como recordatorios, actualizaciones de servicio o alertas de marketing), utilizaremos su número de teléfono exclusivamente para esas comunicaciones. Ninguna información móvil se compartirá con terceros/afiliados con fines de marketing/promoción. Todas las categorías anteriores excluyen los datos de aceptación y el consentimiento del remitente de la mensajería de texto; esta información no se compartirá con terceros."
                },
                {
                    title: "4. Compartir y divulgar información",
                    text: "Excepto lo descrito en la Sección 3, no vendemos, alquilamos ni arrendamos su información personal a terceros. Podemos compartir su información con proveedores de servicios de confianza (como hosting web o herramientas de análisis de datos) que nos ayuden a operar nuestro sitio web, bajo estrictos acuerdos de confidencialidad."
                },
                {
                    title: "5. Seguridad de datos",
                    text: "Implementamos robustas medidas de seguridad técnicas y organizativas para proteger su información personal contra accesos no autorizados, pérdida, alteración o divulgación. Sin embargo, no se puede garantizar que la transmisión de datos por internet sea 100% segura."
                },
                {
                    title: "6. Sus derechos y opciones",
                    text: "Tiene derecho a acceder, actualizar, corregir o solicitar la eliminación de su información personal. Si se ha suscrito a nuestros correos o mensajes de texto, puede cancelar su suscripción en cualquier momento siguiendo las instrucciones correspondientes o respondiendo 'STOP' a nuestros SMS."
                },
                {
                    title: "7. Contáctenos",
                    text: "Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, contáctenos en:",
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
