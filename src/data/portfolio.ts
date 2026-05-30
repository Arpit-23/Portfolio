// ─── Portfolio Data ──────────────────────────────────────────────────────────
// Edit this file to update your portfolio content without touching components.

export const personalInfo = {
  name: "Arpit Mali",
  initials: "AM",
  title: "Full-Stack Developer",
  headline: "Full-Stack Software Developer",
  tagline: "Available for opportunities",
  bio: "Software Developer with 1+ year of hands-on experience building responsive UIs and full-stack web apps using React.js, Material UI, and the MERN stack. I write clean, optimized code and craft RESTful APIs that scale.",
  email: "arpitmali23053@gmail.com",
  phone: "+91 8103077199",
  github: "https://github.com/arpit-23",   // ← update with real URL
  linkedin: "http://linkedin.com/in/arpit-mali-796bb7228/", // ← update with real URL
  cvUrl: "/resume.pdf",                          // ← place resume.pdf in /public
};

export const stats = [
  { label: "Years Experience", value: "1+", icon: "Briefcase" },
  { label: "Projects Built",   value: "10+", icon: "Code" },
  { label: "Tech Stack",       value: "MERN", icon: "Layers" },
];

export const experiences = [
  {
    company: "CIARO Digital Labs LLP",
    location: "Ujjain",
    overallPeriod: "Oct 2024 – Present",
    roles: [
      {
        title: "Full-Time",
        period: "May 2025 – Present",
        description:
          "Leading feature development across MERN-stack products and mentoring on best practices.",
        icon: "Rocket",
      },
      {
        title: "Trainee",
        period: "Feb – Apr 2025",
        description:
          "Strengthened backend skills with Node.js and Express while shipping internal tools.",
        icon: "BookOpen",
      },
      {
        title: "Intern",
        period: "Oct 2024 – Jan 2025",
        description:
          "Built and maintained MERN-stack web applications, developed APIs and responsive UIs, and enhanced performance through testing.",
        icon: "Code2",
      },
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Languages",
    items: ["Python", "Java"],
  },
];

export const projects = [
  {
    title: "StudyNotion",
    subtitle: "EdTech Learning Platform",
    description:
      "An online learning platform connecting instructors with students. Instructors create and publish courses; students browse, purchase, and enroll with an intuitive interface.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    imageAlt: "StudyNotion dashboard",
    liveUrl: "https://study-notion-3yem.vercel.app/",   // ← add live URL
    githubUrl: "", // ← add GitHub URL
  },
  {
    title: "Qubit01",
    subtitle: "Real-Time Quiz Platform",
    description:
      "A real-time quiz platform where hosts create quizzes and players join via PIN. Built with Socket.io for live updates, React for the UI, and Node.js with MongoDB.",
    tags: ["Socket.io", "React", "Express"],
    imageUrl:
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    imageAlt: "Qubit01 quiz interface",
    liveUrl: "https://quiz-app-xj5x.vercel.app/",   // ← add live URL
    githubUrl: "", // ← add GitHub URL
  },
];
