import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Gustavo Gómez",
    designation: "Fundador y CEO",
    content:
      "Lidera el proyecto BluLoo con visión ecológica, enfoque de impacto y experiencia en productos sostenibles. Su misión es hacer del ahorro de agua un hábito global.",
    image: "/images/team/gustavo.png",
    star: 5,
  },
  {
    id: 2,
    name: "Patricia Pérez",
    designation: "Diseño & Estrategia Digital",
    content:
      "Encargada de la identidad visual y comunicación de BluLoo. Su creatividad da vida al mensaje ecológico del proyecto.",
    image: "/images/team/patricia.png",
    star: 5,
  },
  {
    id: 3,
    name: "Carlos Giraldo",
    designation: "Director de Operaciones",
    content:
      "Con experiencia en logística y manufactura, Carlos asegura que BluLoo Tabs llegue eficientemente a hogares e instituciones.",
    image: "/images/team/carlos.png",
    star: 5,
  },
  {
    id: 4,
    name: "Victoria Morales",
    designation: "I+D Químico",
    content:
      "Desarrolladora de la fórmula activa de BluLoo. Su trabajo garantiza la biodegradabilidad y eficacia de cada tableta.",
    image: "/images/team/victoria.png",
    star: 5,
  },
  {
    id: 5,
    name: "Daniel Romero",
    designation: "Marketing y Alianzas",
    content:
      "Gestiona relaciones con ONGs, creadores y puntos de venta estratégicos para escalar el alcance de BluLoo Tabs.",
    image: "/images/team/daniel.png",
    star: 5,
  },
  {
    id: 6,
    name: "Laura Martínez",
    designation: "Relaciones Institucionales",
    content:
      "Coordina propuestas con entidades públicas y programas sostenibles para expandir el impacto de BluLoo a gran escala.",
    image: "/images/team/laura.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Equipo BluLoo Tabs"
          paragraph="Conoce a las personas detrás del desarrollo, estrategia y crecimiento de BluLoo Tabs, comprometidos con la innovación ecológica."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
