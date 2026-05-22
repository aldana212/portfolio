import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import ArrowrightIcon from "../assets/Icon/ArrowrightIcon";
import GithubIcon from "../assets/Icon/GithubIcon";

const ProjectCard = ({ project, isVisible, delay }) => {
  return (
    <article
      className={`
    group rounded-3xl bg-(--card) border border-(--border) overflow-hidden
    hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:border-(--border)/80
    transition-all duration-400
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-(--secondary)/50">
        <div className="absolute inset-0 bg-gradient-to-br from-(--primary)/20 via-transparent to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-(--primary) bg-(--primary)/10  rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-semibold text-(--foreground)">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-(--muted-foreground) leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold  text-(--primary-foreground) bg-(--primary) rounded-xl hover:bg-(--primary)/90 transition-all hover:scale-[1.02]"
          >
            Ver demo
            <ArrowrightIcon className="w-4 h-4 group-hover:translate-x-1 -rotate-45 transition-transform" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-(--foreground) bg-transparent border border-(--border) rounded-xl hover:bg-(--secondary)/50 transition-all"
          >
           <GithubIcon className="w-4 h-4" />
            Código
          </a>
        </div>
      </div>
    </article>
  );
};

const MyProjects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proyectos" ref={sectionRef} className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-xs font-semibold tracking-[0.15em] text-(--primary) uppercase mb-4 transition-all duration-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Proyectos
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--foreground) transition-all duration-600 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Trabajo seleccionado
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
