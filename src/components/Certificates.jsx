function Certificates() {
  const certificates = [
    "AWS Cloud Practitioner Essentials",
    "Software Engineering Job Simulation",
    "IoT Network Specialist Certificate Programme",
    "HTML5 - The Language",
    "Interview Skills",
  ];

  return (
    <section id="certificates">
      <h2>Certifications</h2>

      <p>
        I continuously enhance my technical and professional skills through
        industry-recognized courses and certification programs.
      </p>

      <ul>
        {certificates.map((certificate, index) => (
          <li key={index}>{certificate}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;