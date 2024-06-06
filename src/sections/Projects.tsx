import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/videoapp.jpg",
      projectName: "Zerox A Video Conferencing App",
      projectDescription:
        "I made a Fullstack app a copy like zoom Api. It has feature like create personal room record screen sharescreen with real time peer to peer data send.",
      projectTech: [
        "NextJS",
        "Redux Form-Handling",
        "Shadcn",
        "Express",
        "Typescript",
        "Stream",
        "Zod",
        "Clerk",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/chatapp.jpg",
      projectName: "Realtime Chat App",
      projectDescription:
        "This is a chat app made with Nextjs and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for Next.",
      projectTech: [
        "Nextjs",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
        "Shadcn"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/bankingapp.png",
      projectName: "Banking Platform with Finance Management",
      projectDescription:
        "I made a Fullstack app a Banking Platform with Finance Management. Features: User login and signup, send and receive friend requests, share real-time data through Socket.io, addfriends, and manage friend lists.",
      projectTech: [
        "Nextjs",
        "Node.js",
        "Clerk",
        "MongoDB",
        "Express",
        "Horizon",
        "Typescript",
        "Plaid"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/admindash.png",
      projectName: " Admin Dashboard",
      projectDescription:
        "I made a Fullstack app a Achieved real-time data handling efficiency. Easily analytic data from different years, helping you make smarter decisions in our Admin Dashboard",
      projectTech: [
        "Nextjs",
        "Shadcn",
        "Typescript"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      alt={projectName}
                      quality={100}
                    />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
