import {
  BookOpenCheck, Compass, Feather, HeartHandshake, ShieldCheck,
  Sprout, Sun, Users, Video, Wind, type LucideIcon,
} from "lucide-react";

/** Todo el contenido es ficticio (sitio demostrativo). */
export const site = {
  name: "Alma Serena Psicología",
  shortName: "Alma Serena",
  psychologist: "Dra. Valeria Montes",
  specialty: "Psicología clínica y bienestar emocional",
  tagline: "Un espacio para escucharte, comprenderte y avanzar.",
  url: "https://almaserena-psicologia.example",
  email: "hola@almaserena-psicologia.example",
  city: "Monterrey, Nuevo León",
  locale: "es_MX",
  title: "Alma Serena | Psicología clínica en Monterrey",
  description:
    "Terapia psicológica individual para adultos y adolescentes en Monterrey y online. Acompañamiento en ansiedad, autoestima, relaciones, duelo y bienestar emocional.",
  keywords: [
    "psicóloga en Monterrey", "psicología clínica", "terapia online",
    "terapia para adolescentes", "ansiedad y estrés", "bienestar emocional",
  ],
} as const;

export const images = {
  hero: { src: "/images/hero.svg", alt: "Espacio de consulta luminoso con plantas y luz natural" },
  about: { src: "/images/about.svg", alt: "Retrato de la Dra. Valeria Montes en su consultorio" },
} as const;

export const nav = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Preguntas frecuentes", href: "/#preguntas" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const socials = [
  { name: "Facebook", href: "https://facebook.com/almaserenapsicologia" },
  { name: "Instagram", href: "https://instagram.com/almaserenapsicologia" },
  { name: "Twitter/X", href: "https://twitter.com/almaserenapsi" },
] as const;

export const trust: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: HeartHandshake, title: "Atención personalizada", text: "Cada proceso se adapta a ti." },
  { icon: ShieldCheck, title: "Confidencialidad", text: "Tu información se resguarda." },
  { icon: Video, title: "Sesiones online", text: "Desde donde te sientas cómodo." },
  { icon: BookOpenCheck, title: "Enfoque basado en evidencia", text: "Herramientas con respaldo científico." },
];

export const values = [
  "Escucha sin juicios",
  "Acompañamiento personalizado",
  "Confidencialidad",
  "Respeto por cada proceso",
];

export const specialties: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Wind, title: "Ansiedad y estrés", text: "Acompañamiento para comprender y gestionar pensamientos, emociones y situaciones que generan sobrecarga." },
  { icon: Sprout, title: "Autoestima", text: "Trabajo orientado a desarrollar una relación más saludable con uno mismo." },
  { icon: Users, title: "Relaciones", text: "Acompañamiento para comprender patrones emocionales y mejorar la comunicación." },
  { icon: Feather, title: "Duelo y cambios", text: "Espacio para procesar pérdidas, transiciones y etapas importantes de la vida." },
  { icon: Compass, title: "Adolescentes", text: "Acompañamiento psicológico adaptado a las necesidades de adolescentes." },
  { icon: Sun, title: "Bienestar emocional", text: "Herramientas para desarrollar mayor conciencia emocional y hábitos saludables." },
];

export const steps = [
  { title: "Agenda", text: "Elige un horario disponible para una primera sesión." },
  { title: "Primera conversación", text: "Conocemos tu situación y definimos juntos los objetivos del proceso." },
  { title: "Comenzamos", text: "Construimos un espacio de acompañamiento adaptado a tus necesidades." },
];

export const modalities: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Video, title: "Sesión online", text: "Desde la comodidad de tu espacio. Solo necesitas conexión a internet y un lugar donde te sientas en privado." },
  { icon: HeartHandshake, title: "Sesión presencial", text: "En un espacio privado y tranquilo en Monterrey, Nuevo León. La ubicación exacta se comparte al confirmar la cita." },
];

export const testimonials = [
  { quote: "Llegué sin saber por dónde empezar. Poco a poco me sentí escuchada y con más claridad sobre lo que necesitaba.", name: "Mariana (nombre ficticio)" },
  { quote: "Las sesiones online me facilitaron mantener la constancia sin cambiar mi rutina. Fue un espacio tranquilo.", name: "Andrés (nombre ficticio)" },
  { quote: "Agradezco el trato respetuoso y sin prisas. Me llevé herramientas concretas para el día a día.", name: "Lucía (nombre ficticio)" },
];

export const faqs = [
  { q: "¿Cómo sé si la terapia es para mí?", a: "Si sientes que algo te pesa, te confunde o quieres entenderte mejor, la terapia puede ser un buen espacio. No necesitas estar en crisis para pedir apoyo. En la primera conversación lo valoramos juntos." },
  { q: "¿Cuánto dura una sesión?", a: "Las sesiones individuales duran aproximadamente 50 minutos." },
  { q: "¿Las sesiones pueden realizarse online?", a: "Sí. Ofrezco sesiones por videollamada y presenciales en Monterrey. Puedes elegir la modalidad que mejor se adapte a ti." },
  { q: "¿Qué sucede durante la primera sesión?", a: "Es una conversación para conocernos: me cuentas lo que te trae, resolvemos dudas sobre el proceso y definimos juntos los objetivos y la frecuencia de las sesiones." },
  { q: "¿Puedo cancelar o cambiar una cita?", a: "Sí. Te pido avisar con anticipación para reprogramar sin inconvenientes. Los detalles se acuerdan al agendar." },
  { q: "¿La información que comparto es confidencial?", a: "Sí. Lo que se habla en sesión se resguarda con confidencialidad profesional, salvo las excepciones que marca la ley, que se explican desde el inicio." },
];

export const contactReasons = [...specialties.map((s) => s.title), "Aún no lo tengo claro"];
