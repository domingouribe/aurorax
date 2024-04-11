import { v4 as uuidv4 } from 'uuid';

const siteContents = {
    hero: {
        title: "Diseñadora de Experiencia de usuario y Diseño Estratégico",
        text: "Ayudo a empresas en Latinoamérica a diferenciarse de sus competidores con diseños altamente eficientes centradas en data de las necesidades del cliente sin perder de vista los objetivos comerciales.",
        button: {
            tag: "Agenda una llamada",
            url: "#",
            classes: "Button Button-default"
        },
    },
    helpYouSectionIf: {
        title: "Puedo ayudarte si...",
        cards: [
            {
                id: uuidv4(),
                tag: "UX UI Design",
                text: "Necesitas diseñar una nueva interfaz o funcionalidad para tu producto que entregue la mejor experiencia de usuario para tu sitio web o app.",
                button: {
                    tag: "Necesito UX UI Design",
                    url: "#",
                    classes: "Button Button-primary",
                }
            },
            {
                id: uuidv4(),
                tag: "UX Research",
                text: "Necesitas conocer sobre la persona que usa tu producto o servicio para adaptar tu servicio o producto a lo que hace, necesita y desea.",
                button: {
                    tag: "Necesito UX Research",
                    url: "#",
                    classes: "Button Button-primary",
                }
            },
            {
                id: uuidv4(),
                tag: "UX Audit",
                text: "Necesitas saber si tu proyecto, servicio o producto tiene oportunidades de mejora que puedan estar afectando el performance.",
                button: {
                    tag: "Necesito UX Auditn",
                    url: "#",
                    classes: "Button Button-primary",
                }
            },

        ]
    },
    talkAboutNumbers: [
        {
            title: "Hablemos de números",
            image: "ruta/a/imagen.jpg",
            cards: [
                {
                    id: uuidv4(),
                    image: "src/assets/images/numbers/cardImage1.png",
                    percent: "65%",
                    text: "de los clientes de EE.UU considera que una experiencia positiva con una marca es más influyente que una gran publicidad.",
                    fontSource: "Fuente: PWC - Experience is everything: Here’s how to get it right.",
                },
                {
                    id: uuidv4(),
                    image: "src/assets/images/numbers/cardImage1.png",
                    percent: "100x",
                    text: "veces es el costo de corregir un error después del desarrollo en comparación a arreglarlo antes del desarrollo.",
                    fontSource: "Fuente: HFI - The ROI of User Experience",
                },
                {
                    id: uuidv4(),
                    image: "src/assets/images/numbers/cardImage1.png",
                    percent: "42%",
                    text: "pagaría por una experiencia amigable y acogedora",
                    fontSource: "Fuente: PWC - Experience is everything: Here’s how to get it right.",
                },

            ]
        }
    ],

    succesFullCases: [
        {
            title: "Casos de éxito",
            cards: [
                {
                    id: uuidv4(),
                    image: "assets/images/successfull/cruz-verde.png",
                    name: "Cruz verde",
                    text: "Diseño de servicios, UX Research, UX UI Design y facilitación de Workshop."
                },
                {
                    id: uuidv4(),
                    image: "assets/images/successfull/cruz-verde.png",
                    name: "Hogar de Cristo",
                    text: "UX UI Design. Diseño de solución SaaS para el área de Recaudación."
                },
                {
                    id: uuidv4(),
                    image: "assets/images/successfull/cruz-verde.png",
                    name: "Buildpeer",
                    text: "UX UI Design. Diseño de nuevo módulo para la plataforma SaaS construtech Buildpeer."
                },
                {
                    id: uuidv4(),
                    image: "assets/images/successfull/cruz-verde.png",
                    name: "Developers.net",
                    text: "UX Audit, UX Research, UX UI Design. Rediseño de sitio web."
                },
                {
                    id: uuidv4(),
                    image: "assets/images/successfull/cruz-verde.png",
                    name: "Callpicker",
                    text: "UX UI Design. Re-diseño de sitio web de Callpicker con apoyo de UX Researchers."
                },

                {
                    id: uuidv4(),
                    image: "assets/images/successfull/cruz-verde.png",
                    name: "Axelera",
                    text: "UX UI Design. Rediseño de sitio web de Axelera Credit e interfaz de factoraje."
                },
                {
                    id: uuidv4(),
                    image: "assets/images/successfull/cruz-verde.png",
                    name: "Clak",
                    text: "UX UI Design. Diseño de sitio web, landing page y módulo de perfil de usuario."
                },
            ],

        }
    ],

    testimonials: [
        {
            id: uuidv4(),
            logo: "src/assets/images/testimonials/logos/developers.png",
            text: "Maribel es una rockstar, tiene súper conocimiento y buen trato al cliente y a su equipo. Hace que las cosas puedan funcionar. La recomiendo ampliamente.",
            source: {
                image: "src/assets/images/testimonials/sources/andrea.png",
                name: "Andrea Cambray",
                position: "Digital Marketing Manager",
            },

        },
        {
            id: uuidv4(),
            logo: "src/assets/images/testimonials/logos/uxer.png",
            text: "Maribel es sinónimo de liderazgo, guió a un equipo multidisciplinario de forma estratégica, siempre cuidando los intereses de los clientes y de la empresa.",
            source: {
                image: "assets/images/testimonials/sources/crisaudy.png",
                name: "Crisaudy Montilla",
                position: "UX Researcher",
            },

        },
        {
            id: uuidv4(),
            logo: "src/assets/images/testimonials/logos/logo.png",
            text: "Trabajar con Maribel es sinónimo de trabajo en equipo, es una persona 100% comprometida, colaborativa, proactiva y sobre todo muy detallista.",
            source: {
                image: "src/assets/images/testimonials/sources/andrea.png",
                name: "Mariela Castillo",
                position: "UX UI Designer",
            },

        },
    ],

    contactMe: [
        {
            sectionTitle: "Cuéntame de tu proyecto",
            sectionDescription: "Llena el formulario y me pondré en contacto en un máximo de 24 horas.",
            imageSection: "src/assets/images/contactme/contactBg.png",
        },
    ],

    footer: [
        {
            content: "Diferenciate de tus competidores, alinea tus objetivos comerciales con los objetivos de tus clientes y gana una ventaja competitiva.",
            icons: [
                { name: "email", icon: "icono_email.png" },
                { name: "phone", icon: "icono_telefono.png" }
            ]
        },
        {
            miniMenu: [
                { label: "Blog", link: "blog.html" },
                { label: "Aviso de privacidad", link: "privacy.html" },
                { label: "Términos y condiciones", link: "terms.html" }
            ]
        },
        {
            title: "Únete al newsletter",
            formField: "Correo electrónico",
            formButton: "Suscribirse"
        }
    ],
};

export default siteContents;