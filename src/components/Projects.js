import "./Projects.css";

export default function Projects() {
  return (
    <>
      <section className="projects">
        <h1 id="projects">Projects</h1>
        <div className="container">
          <figure>
            <a href="https://github.com/Tibegex/Yoda_Speak_Quiz">
              <img
                src="Yoda-SS-2.png"
                alt="Yoda Speak App"
                width="600px"
                height="600px"
              />

              <figcaption className="project1">Yoda Speak App</figcaption>
            </a>
          </figure>
          <figure>
            <a href="https://github.com/Tibegex/Random-Num-Gen">
              <img
                src="Randomnumgen.PNG"
                alt="Random Password Generator"
                width="300px"
                height="300px"
              />
              <figcaption className="project1">
                Random Password Generator
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="https://github.com/Tibegex/Fullstack-Quiz">
              <img
                src="Quiz.PNG"
                alt="Fullstack Quiz"
                width="300px"
                height="300px"
              />
              <figcaption className="project1">Fullstack Quiz</figcaption>
            </a>
          </figure>
          <figure>
            <a href="https://fast-bastion-27038.herokuapp.com/">
              <img
                src="callendar.PNG"
                alt="Appointment Scheduler Homepage "
                width="300px"
                height="300px"
              />
              <figcaption className="project1">
                Appointment Scheduler
              </figcaption>
            </a>
          </figure>
        </div>
      </section>
    </>
  );
}
