import dashboardImg from "../assets/projects/inventory-dashboard.png";
import tasksImg from "../assets/projects/tasks-app.png";
import moviesImg from "../assets/projects/moviesImg.png";

export const projects = [
  {
    id: 1,
    title: "Inventory SaaS",
    type: "Full Stack SaaS",
    description:
      "Sistema de gestión de inventario multi-empresa con control de roles (RBAC), movimientos tipo kardex, dashboard de métricas y registro de auditoría de acciones.",

    image: dashboardImg,

    features: [
      "Multi-empresa (SaaS)",
      "Control de roles (RBAC)",
      "Movimientos de inventario (kardex)",
      " Dashboard de métricas",
      "Registro de auditoría",
    ],

    tags: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "React Query",
      "Zustand",
      "Tailwind",
    ],

    demoUrl: "https://inventory-dashboard-flax-gamma.vercel.app/",
    githubUrl: "https://github.com/aldana212/inventory-dashboard",
    highlight: true,
  },

  {
    id: 2,
    title: "Task Manager App",
    type: "Frontend App (LocalStorage)",

    description:
      "Aplicación de gestión de tareas con CRUD completo, persistencia en LocalStorage y UI interactiva con React.",

    image: tasksImg,

    features: [
      "CRUD completo",
      "Persistencia en LocalStorage",
      "UI interactiva",
      "Filtros de tareas",
      "Estados (pendiente / completado)",
    ],

    tags: ["React", "LocalStorage", "Tailwind"],

    demoUrl: "https://react-task-manager-localstorage.vercel.app/",
    githubUrl: "https://github.com/aldana212/React-Task-Manager-Localstorage",
    highlight: false,
  },
  {
    id: 3,
    title: "Movie Explorer App",
    type: "Frontend App (API Integration)",

    description:
      "Aplicación para buscar, explorar y guardar películas usando la API de TMDB. Incluye búsqueda global, filtros por género, detalle de películas y sistema de favoritos.",

    image: moviesImg,

    features: [
      "Búsqueda global de películas",
      "Filtros por género",
      "Detalle completo de película",
      "Sistema de favoritos",
      "Consumo de API (TMDB)",
      "Diseño responsive",
    ],

    tags: [
      "React",
      "TypeScript",
      "TMDB API",
      "React Query",
      "Zustand",
      "Tailwind",
    ],

    demoUrl: "https://movie-radar-one.vercel.app",
    githubUrl: "https://github.com/aldana212/MovieRadar",
    highlight: true,
  },
];
