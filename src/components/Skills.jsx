import { useEffect, useRef, useState } from "react";
import ReactIcon from "../assets/Icon/ReactIcon";
import TailwindIcon from "../assets/Icon/TailwindIcon";
import GitIcon from "../assets/Icon/GitIcon";
import NodeJsIcon from "../assets/Icon/NodeJsIcon";
import TypescriptIcon from "../assets/Icon/TypescriptIcon";
import JavascriptIcon from "../assets/Icon/JavascriptIcon";
import HtmlIcon from "../assets/Icon/HtmlIcon";
import Css3Icon from "../assets/Icon/Css3Icon";
import TanStackIcon from "../assets/Icon/TanStackIcon";
import ApiIcon from "../assets/Icon/ApiIcon";

const skills = [
  { name: "React", Logo: ReactIcon },
  { name: "TypeScript", Logo: TypescriptIcon },
  { name: "JavaScript", Logo: JavascriptIcon },
  { name: "Tailwind CSS", Logo: TailwindIcon },
  { name: "HTML5", Logo: HtmlIcon },
  { name: "CSS3", Logo: Css3Icon },
  { name: "Git", Logo: GitIcon },
  { name: "Node.js", Logo: NodeJsIcon },
  { name: "TanStack Query", Logo: TanStackIcon },
  { name: "REST APIs", Logo: ApiIcon },
];

const Skills = () => {
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
    <section id="stack" ref={sectionRef} className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span
            className={`inline-block text-xs font-semibold tracking-[0.15em] text-(--primary) uppercase mb-4 transition-all duration-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Stack técnico
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--foreground) transition-all duration-600 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Tecnologías que domino
          </h2>
          <p
            className={`mt-4 text-lg text-(--muted-foreground) transition-all duration-600 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Herramientas con las que construyo productos día a día
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              Logo={skill.Logo}
              isVisible={isVisible}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

function SkillCard({ name, Logo, isVisible, delay }) {
  return (
    <div
      className={`
       group aspect-square flex flex-col items-center justify-center p-6 rounded-2xl
        bg-(--card) border border-(--border)
        hover:border-(--primary)/30 hover:bg-(--primary)/5
        hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
        transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        cursor-pointer
        `}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {/* {Logo} */}
      {/* <ReactIcon className="w-10 h-10 text-red-500 transition-transform group-hover:scale-110" /> */}
      <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
      <span className="mt-3 text-sm font-medium text-(--muted-foreground) group-hover:text-(--foreground) transition-colors text-center">
        {name}
      </span>
    </div>
  );
}
