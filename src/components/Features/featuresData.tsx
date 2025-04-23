import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    ),
    title: "Ahorro de Agua",
    paragraph:
      "Hasta 50 litros de agua ahorrados por hogar cada día, usando BluLoo Tabs para múltiples descargas sin necesidad de tirar la cadena tras cada uso.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect width="40" height="40" rx="10" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
    title: "3 Capas Activas",
    paragraph:
      "Neutraliza olores, descompone la orina y mantiene efecto prolongado gracias a su estructura en tres capas activas y biodegradables.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M10 20h20M20 10v20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    title: "Fácil de Usar",
    paragraph:
      "Solo tienes que dejar caer una pastilla BluLoo en el inodoro. Sin instalaciones, sin complicaciones. Efectividad inmediata y visible.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M5 35L35 5M5 5L35 35" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
    title: "Impacto Ambiental Positivo",
    paragraph:
      "Reduce la carga orgánica en aguas residuales, devolviendo agua al sistema sin contaminantes adicionales y apoyando los ODS de la ONU.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    ),
    title: "Compatible y Escalable",
    paragraph:
      "Funciona en hogares, oficinas, hoteles y espacios públicos. Su formato portátil y económico lo hace ideal para distribución masiva.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path d="M5 22.5h30M20 5v35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    title: "Producción en Escala",
    paragraph:
      "Con modelo de distribución mayorista y retail, BluLoo Tabs está listo para conquistar el mercado global del cuidado del baño de $40B.",
  },
];

export default featuresData;
