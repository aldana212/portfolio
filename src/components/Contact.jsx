import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((presentValue) => ({ ...presentValue, [name]: value }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className={`
            inline-block text-xs font-semibold tracking-[0.15em] text-(--primary) uppercase mb-4
            transition-all duration-600
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            Contacto
          </span>
          <h2
            className={`
            text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--foreground)
            transition-all duration-600 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            ¿Tienes un proyecto en mente?
          </h2>
          <p
            className={`
            mt-4 text-lg text-(--muted-foreground)
            transition-all duration-600 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            Escríbeme y conversemos sobre cómo puedo ayudarte
          </p>
        </div>

        {/* Direct Contact Option */}
        <div
          className={`
           mb-8 p-6 rounded-2xl bg-(--card) border border-(--border)
           flex flex-col sm:flex-row items-center justify-between gap-4
           transition-all duration-600 delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
        >
          <span className="text-(--muted-foreground)">
            O escríbeme directamente a
          </span>
          <a
            href="mailto:david@example.com"
            className="text-(--primary) font-semibold hover:underline"
          >
            danielaldana212@gmail.com
          </a>
        </div>

        {/* Contact Form */}
        <div
          className={`
          p-8 lg:p-12 rounded-3xl bg-(--card) border border-(--border)
           transition-all duration-600 delay-400
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <CustomInput
              type="text"
              label="Nombre"
              value={value.name}
              name="name"
              placeholder="Tu nombre"
              onChange={handleChange}
            />

            {/* Email Field */}
            <CustomInput
              type="text"
              label="Email"
              name="email"
              value={value.email}
              placeholder="tu@email.com"
              onChange={handleChange}
            />
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-(--muted-foreground) mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Cuéntame sobre tu proyecto..."
              className="w-full h-[130px] bg-transparent resize-none px-[20px] py-[18px] rounded-[16px] border border-(--border) placeholder:text-(--muted-foreground)/50 focus:outline-none focus:border-(--primary)
        focus:ring-(--primary)/10      text-[16px] text-(--foreground) 
        transition-all duration-300 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`
              w-full flex items-center justify-center gap-2 px-8 py-5 rounded-xl
              text-base font-semibold text-(--primary-foreground) bg-(--primary)
              hover:bg-(--primary)/90 hover:scale-[1.01]
              disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
              transition-all cursor-pointer
            `}
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                Enviar mensaje
                {/* <Send size={18} /> */}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
