function Hero() {
  return (
    <section id="hero">
      <h1>Hi, I'm Likitha Yarraguntla 👋</h1>

      <h2>
        Computer Science Student | Full Stack Developer | AWS Learner
      </h2>

      <p className="hero-tagline">
        Building responsive web applications with modern technologies.
      </p>

      <p>
        I am a Computer Science student passionate about Full Stack
        Development, AI/ML, and Cloud Computing. I enjoy building scalable,
        user-friendly applications and solving real-world problems through
        code.
      </p>

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="Likitha_Yarraguntla_Resume.pdf"
      >
        <button>Download Resume</button>
      </a>
    </section>
  );
}

export default Hero;