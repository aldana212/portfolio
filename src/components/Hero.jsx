import React from "react";
import ArrowrightIcon from "../assets/Icon/ArrowrightIcon";
import DownloadIcon from "../assets/Icon/DownloadIcon";
import ReactIcon from "../assets/Icon/ReactIcon";
import GithubIcon from "../assets/Icon/GithubIcon";
import LinkedinIcon from "../assets/Icon/LinkedinIcon";
import TypescriptIcon from "../assets/Icon/TypescriptIcon";
import TailwindIcon from "../assets/Icon/TailwindIcon";
import GitIcon from "../assets/Icon/GitIcon";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-(--primary)/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--success)/10 border border-(--success)/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-(--success) opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-(--success)" />
              </span>
              <span className="text-xs font-medium text-(--success)">
                Disponible para proyectos
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <p className="text-lg lg:text-xl text-(--muted-foreground) opacity-0 animate-fade-in-up stagger-1">
                Hola, soy Daniel
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] opacity-0 animate-fade-in-up stagger-2">
                <span className="text-(--foreground)">Frontend Developer</span>
                <br />
                <span className="text-(--primary)">especializado en React</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-(--muted-foreground) max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-3">
              Construyo interfaces que combinan rendimiento técnico con
              experiencias de usuario excepcionales.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up stagger-4">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-(--primary-foreground) bg-(--primary) rounded-xl hover:bg-(--primary)/90 transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)]"
              >
                Ver proyectos
                <ArrowrightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Daniel_Aldana_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-(--foreground) bg-transparent border border-border rounded-xl hover:bg-secondary/50 transition-all"
              >
                <DownloadIcon className="w-5 h-5" />
                Descargar CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 opacity-0 animate-fade-in-up stagger-5">
              <a
                href="https://github.com/aldana212?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-(--secondary)/30 border border-(--border) hover:border-(--primary)/30 text-(--muted-foreground) hover:text-(--primary) transition-all hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-aldana-84155026a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-(--secondary)/30 border border-(--border) hover:border-(--primary)/30 text-(--muted-foreground) hover:text-(--primary) transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Bento Grid */}
          <div className="hidden lg:block opacity-0 animate-fade-in-up stagger-3">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 aspect-square max-w-md ml-auto">
              {/* Large cell - Featured Project Preview */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-card border border-(--border) group">
                <div className="absolute inset-0 bg-gradient-to-br from-(--primary)/20 via-(--primary)/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ReactIcon className="w-24 h-24 text-(--primary)/50 group-hover:text-(--primary)/80 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-(--muted-foreground) uppercase tracking-wider">
                    Especialista en
                  </span>
                  <p className="text-lg font-semibold text-(--foreground)">
                    React Ecosystem
                  </p>
                </div>
              </div>

              {/* Years of experience */}
              <div className="rounded-2xl bg-card border border-(--border) p-4 flex flex-col justify-center items-center hover:border-(--primary)/30 transition-colors">
                <span className="text-3xl font-bold text-(--foreground)">
                  2+
                </span>
                <span className="text-xs text-(--muted-foreground) text-center">
                  años de experiencia
                </span>
              </div>

              {/* Projects count */}
              <div className="rounded-2xl bg-card border border-(--border) p-4 flex flex-col justify-center items-center hover:border-(--primary)/30 transition-colors">
                <span className="text-3xl font-bold text-(--foreground)">
                  15+
                </span>
                <span className="text-xs text-(--muted-foreground) text-center">
                  proyectos
                </span>
              </div>

              {/* Tech Stack Mini Grid */}
              <div className="col-span-2 rounded-2xl bg-card border border-(--border) p-4 hover:border-(--primary)/30 transition-colors">
                <div className="grid grid-cols-3 gap-2 h-full">
                  <div className="flex items-center justify-center rounded-lg bg-(--secondary)/50 p-2">
                    <TypescriptIcon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-center rounded-lg bg-(--secondary)/50 p-2">
                    <TailwindIcon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-center rounded-lg bg-(--secondary)/50 p-2">
                    <GitIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Collaboration indicator */}
              <div className="rounded-2xl bg-(--primary)/10 border border-(--primary)/20 p-4 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-(--primary)">
                  100%
                </span>
                <span className="text-xs text-(--primary)/80 text-center">
                  Remoto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
