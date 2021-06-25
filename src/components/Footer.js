import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h1 className="contactme">
        <a name="contactme"></a>Contact Me
      </h1>
      <ul className="cfooter">
        <li>Cell Phone: (513)581-3822</li>
        <li>Email: Joshua_B_Lee@yahoo.com</li>
        <li>
          <a
            href="https://github.com/Tibegex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joshua-lee-954b1681/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkdin
          </a>
        </li>
      </ul>
    </footer>
  );
}
