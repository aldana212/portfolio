import React from "react";
import GithubIcon from "../assets/Icon/GithubIcon";
import LinkedinIcon from "../assets/Icon/LinkedinIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 lg:mt-40 border-t border-(--border)">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-xl font-bold text-(--primary) hover:opacity-80 transition-opacity"
            >
              DA
            </a>
            <span className="text-sm text-(--muted-foreground)">
              Diseñado y desarrollado por Daniel Aldana
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/aldana212?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--muted-foreground) hover:text-(--primary) transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-aldana-84155026a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--muted-foreground) hover:text-(--primary) transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <span className="text-xs text-(--muted-foreground)/60">
              © {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
