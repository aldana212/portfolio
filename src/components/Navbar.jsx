import React, { useEffect } from "react";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";
import CloseIcon from "../assets/Icon/CloseIcon";
import MenuIcon from "../assets/Icon/MenuIcon";

const navLinks = [
  {
    id: 1,
    name: "Proyectos",
    href: "#proyectos",
  },

  {
    id: 2,
    name: "Stack",
    href: "#stack",
  },

  {
    id: 3,
    name: "Sobre mí",
    href: "#sobre-mi",
  },

  {
    id: 5,
    name: "Contacto",
    href: "#contacto",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-(--card)/80 backdrop-blur-xl border border-(--border) shadow-lg"
            : "bg-(--card)/60 backdrop-blur-md border border-(--border)/50"
        }`}
        style={{ borderRadius: "16px" }}
      >
        <div className="flex items-center gap-8 px-6 py-3">
          {/* Logo - Monograma */}
          <a
            href="/"
            className="text-xl font-bold text-(--primary) hover:opacity-80 transition-opacity"
          >
            DA
          </a>

          {/* Desktop Navigation */}
          <div className="max-w-max hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                className="max-w-max flex items-center gap-[8px] cursor-pointer"
                key={link.name}
              >
                <div className="w-[16px] h-[16px] flex justify-center items-center">
                  {link.icon}
                </div>
                <a
                  key={link.href}
                  href={link.href}
                  className="relative min-w-max text-sm font-medium text-(--muted-foreground) hover:text-(--foreground) transition-colors group"
                >
                  {link.name}
                  {/* Underline Animation */}
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-(--primary) transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-(--primary-foreground) bg-(--primary) rounded-lg hover:bg-(--primary)/90 transition-all hover:scale-[1.02]"
          >
            Hablemos
          </a>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 "
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6 text-(--muted-foreground) hover:text-(--foreground) transition-colors" />
            ) : (
              <MenuIcon className="w-6 h-6 text-(--muted-foreground) hover:text-(--foreground) transition-colors" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-(--background)/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <div
                className="max-w-max flex items-center gap-[8px] cursor-pointer"
                key={link.name}
              >
                <div className="w-[16px] h-[16px] flex justify-center items-center">
                  {link.icon}
                </div>
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-(--foreground) hover:text-(--primary) transition-colors"
                >
                  {link.name}
                </a>
              </div>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-4 text-lg font-semibold text-(--primary-foreground) bg-(--primary) rounded-xl hover:bg-(--primary)/90 transition-all"
            >
              Hablemos
            </a>
            {/* Theme Toggle Mobile */}
            <div className="mt-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
