import { FaCode, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import Container from "./Container";

const socialLinks = [
  {
    id: 1,
    icon: FaEnvelope,
    linkTo: "https://github.com/FaizanMateen",
  },
  {
    id: 2,
    icon: FaGithub,
    linkTo: "https://github.com/FaizanMateen",
  },
  {
    id: 3,
    icon: FaLinkedin,
    linkTo: "https://www.linkedin.com/in/mohammed-faizan-mateen/",
  },
];

function Footer() {
  return (
    <footer className="border-t-2 border-stone-500 bg-definedColor-base2 pt-2 font-['Sono']">
      <Container>
        <div className="flex flex-row justify-between gap-4">
          <p className="flex items-center gap-2">
            <span>
              <FaCode className="h-5 w-5" />
            </span>
            Coded by
            <span className="font-bold tracking-wide">
              Mohammed Faizan Mateen
            </span>
          </p>
          <ul className="flex items-center gap-4 text-2xl font-bold">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.linkTo} target="_blank" rel="noreferrer">
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Concepts from
          <span className="font-bold"> Today I Learned </span>
          project from{" "}
          <span className="text-definedColor-faded underline underline-offset-0">
            <a
              href="https://www.udemy.com/course/full-stack-crash-course/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 active:text-blue-950"
            >
              Jonas Schmedtmann's course
            </a>
          </span>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
