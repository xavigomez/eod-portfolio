import type { AboutData } from "~/types/about";

// Images
import meImage from "~/assets/images/me.jpg";
import testimonial1 from "~/assets/images/about/about-testimonials-1.png";
import testimonial2 from "~/assets/images/about/about-testimonials-2.png";

export const about: AboutData = {
  meta: {
    title: "About me",
    description:
      "Product designer with over 6 years of experience, combining analytical thinking with creative problem-solving.",
    image: "https://placehold.co/1200x630/f5f5f4/1c1917?text=About+Me", // FIXME: Add proper OG image for about page (1200x630px)
  },
  image: meImage,
  bio: [
    `I'm a curious and <strong>creative</strong> person with a strong <strong>analytical</strong> mindset. I initially explored engineering because I enjoy understanding how things work and solving complex problems, but I later shifted toward design. That journey led me to <strong>product design</strong>, where I found the perfect balance between creativity and analysis.`,
    `I have over <strong>6 years of experience</strong> working as a product designer across different companies, teams, industries, and digital products. This variety has helped me develop a <strong>broad perspective, adapt quickly to new contexts, and grow continuously</strong> as a professional. I enjoy collaborating closely with cross-functional teams to turn complex problems into clear, usable solutions.`,
    `In my work, I focus on <strong>end-to-end</strong> product design. I aim to design solutions that genuinely <strong>help users</strong> achieve their goals while also driving <strong>business impact</strong>.`,
  ],
  education: [
    {
      title: "Digital Product Designer",
      institution: "The Hero Camp",
      year: "2021",
    },
    {
      title: "User experience Interaction",
      institution: "Design Foundation (IxDF)",
      year: "2020",
    },
    {
      title: "Degree in Design and Digital Creation",
      institution: "UOC",
      year: "2016 - 2019",
    },
  ],
  values: [
    "Solving meaningful user and business problems",
    "Simplifying complexity into clear experiences",
    "Designing scalable, data-informed systems",
    "Build strong collaboration across cross-functional teams",
    "Creating impact, not just screens",
    "Ethical design — no dark patterns",
  ],
  reviews: [
    {
      avatar: testimonial1,
      name: "Clara Palomar",
      role: "Senior Product Designer",
      quote:
        "Sin duda lo que más destaca es su ambición por seguir mejorando, tanto a nivel personal como de equipo. Es una diseñadora independiente y decidida que consigue transmitir su energía a las personas que trabajan con ella.",
      company: "Declarando",
      year: "2019",
    },
    {
      avatar: testimonial2,
      name: "Daniel García Martín",
      role: "Senior Product Designer",
      quote:
        "Trabajé supervisando el trabajo de Elisabeth durante mi paso por Eventscase. Eli tiene un excelente grado de compromiso y de organización en todas las tareas que realiza. Tiene una habilidad excelente para la realización de research y de producto digital y también tiene muy buenas propuestas para la mejora de procesos y operaciones. Su carácter es brillante y tiene una actitud perfecta. Mantén siempre esa curiosidad por mejorar y por hacer un producto que valga la pena ¡gracias por este tiempo trabajando juntos!",
      company: "Eventscase",
      year: "2023",
    },
  ],
};
