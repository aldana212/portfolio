import React, { useEffect, useRef, useState } from "react";

const Metric = ({ value, label }) => {
  return (
    <div className="text-center">
      <span className="block text-3xl lg:text-4xl font-bold text-(--foreground)">
        {value}
      </span>
      <span className="block mt-1 text-sm text-(--muted-foreground)">
        {label}
      </span>
    </div>
  );
};

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre-mi" ref={sectionRef} className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-center">
        {/* Label */}
        <span
          className={`inline-block text-xs font-semibold tracking-[0.15em] text-(--primary) uppercase mb-4 transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Sobre mí
        </span>

        {/* Title */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--foreground) leading-tight transition-all duration-600 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Desarrollador frontend enfocado en la experiencia del usuario
        </h2>

        {/* Description */}
        <p
          className={`mt-8 text-lg lg:text-xl text-(--muted-foreground) leading-relaxed max-w-2xl mx-auto transition-all duration-600 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Técnico en Desarrollo de Software con certificado del SENA,
          complementado con formación en Análisis y Desarrollo de Sistemas de
          Información. Cuento con experiencia construyendo aplicaciones web en
          React dentro de proyectos reales y entornos de trabajo, participando
          en el desarrollo de interfaces, mantenimiento de sistemas e
          integración de APIs. Me especializo en crear interfaces modernas,
          rápidas y escalables, aplicando buenas prácticas de desarrollo,
          componentes reutilizables y enfoque en rendimiento y accesibilidad. Mi
          objetivo es construir productos funcionales y bien diseñados que
          mejoren la experiencia del usuario.
        </p>

        {/* Metrics */}
        <div
          className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 transition-all duration-600 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Metric value="2+" label="años de experiencia profesional" />
          <div className="hidden sm:block w-px h-12 bg-border" />
          <Metric value="15+" label="proyectos entregados" />
          <div className="hidden sm:block w-px h-12 bg-border" />
          <Metric value="React, Vite" label="stack principal" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
