import React from "react";
import CTA from "../components/CTA";
import { skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const resumeLink = "https://drive.google.com/drive/u/0/folders/1QDdgIKqmWIwWEZxY2gCYHeYqzG7LEUBk"; // Replace with your Google Drive link

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello/Namaste, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Naman Vikram
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm a third-year Computer Science and Engineering student at the
          Indian Institute of Information Technology, Raichur. My focus lies in
          applying machine learning algorithms to real-world problems, both in
          coursework and personal projects. Outside academia, I actively organize
          events for the NSS and enjoy playing football and badminton. These
          experiences not only fuel my creativity but also provide a
          well-rounded perspective that enhances my approach to machine learning
          and AI challenges.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Resume</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I invite you to take a look at my detailed resume for a comprehensive
            overview of my education, projects, skills, and experiences. You can
            find my resume on{" "}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Google Drive
            </a>
            .
          </p>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
