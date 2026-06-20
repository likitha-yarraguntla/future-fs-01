function Projects() {
  const projects = [
    {
      title: "React E-commerce App",
      description:
        "Developed a responsive e-commerce application using React.js with product listings, shopping cart functionality, authentication, and an admin dashboard.",
      technologies: "React.js, CSS, JavaScript",
      features: [
        "User Authentication",
        "Shopping Cart Functionality",
        "Admin Dashboard",
        "Responsive Design",
      ],
      github: "https://github.com/likitha-yarraguntla/react-ecommerce-app",
    },
    {
      title: "Blog Platform",
      description:
        "Built a full-stack blog platform with features to create, edit, and manage blog posts using modern web technologies.",
      technologies: "React.js, Node.js, MongoDB",
      features: [
        "Create and Edit Blog Posts",
        "Content Management",
        "Responsive Design",
        "User-Friendly Interface",
      ],
      github: "https://github.com/likitha-yarraguntla/blog-platform",
    },
    {
      title: "Task Management Application",
      description:
        "Created a task management application to organize, track, and manage daily tasks efficiently with a clean user interface.",
      technologies: "React.js, CSS, JavaScript",
      features: [
        "Add and Delete Tasks",
        "Task Status Tracking",
        "Clean User Interface",
        "Responsive Layout",
      ],
      github: "https://github.com/likitha-yarraguntla",
    },
    {
      title: "Calculator App",
      description:
        "Designed a responsive calculator application using HTML, CSS, and JavaScript with basic arithmetic operations.",
      technologies: "HTML, CSS, JavaScript",
      features: [
        "Basic Arithmetic Operations",
        "Interactive User Interface",
        "Responsive Design",
        "Real-Time Calculations",
      ],
      github: "https://github.com/likitha-yarraguntla",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "25px" }}>
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <ul className="project-features">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <p className="tech-stack">
            <strong>Tech Stack:</strong> {project.technologies}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View on GitHub</button>
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;