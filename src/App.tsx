import React from "react";
import { useState } from "react";
import { GitFork, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import welcomeLaptop from "./assets/welcomeLaptopr.png";
import codergraphic from "./assets/codergraphic.png";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Layout,
  Server,
  Download,
  MapPin,
  Building2, 
  Calendar,
  Puzzle,
  FilePen
} from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  
  const username = "harshgitdeep";

  // Removed unused repos state and fetch logic

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={`px-6 md:px-24 py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
}

const experiences = [
  {
    company: "Cyber Groups Infinity, Noida",
    role: "SDE Intern",
    period: "September 2024 - Present",
    description: "Spearheaded the migration of HRMS from .NET Framework 4 to .NET Core 8.0, ensuring seamless transition with minimal downtime. Optimized legacy code, improved performance, and integrated modern APIs.",
    tech: ["Dotnet", "React.js", "Angular.js", "Next.js" ,"Git" ,"SQL Server"],
  },
];

function App() {

    const [repos, setRepos] = useState([]);


  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center text-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-4 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 relative z-10">
              Harshdeep Singh
            </span>
            <div></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-gray-50 blur-3xl opacity-50 z-0"></div>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center text-lg text-gray-500 mb-3 gap-2"
          >
            <MapPin />
            <span>Mohali, India</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/harshgitdeep"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/harshdeepsingh-/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:harshzone3@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-600 text-justify mb-6">
            Software Development Engineer Intern with experience in developing
            interactive and scalable web applications. Currently in the third
            year of a Bachelor of Engineering program, with a focus on frontend
            development.
          </p>
          <p className="text-lg text-gray-600 text-justify">
            Proficient in modern web technologies, including React and Next.js,
            to build responsive and optimized user interfaces. Continuously
            improving technical expertise to develop efficient and
            high-performance solutions.
          </p>
        </div>
        <div className="flex justify-center mt-5"></div>
      </Section>

      <div className="flex items-center justify-center text-center">
        <motion.img
          src={welcomeLaptop}
          alt=""
          width="300"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-lg"
        />
      </div>

      {/* Experience Section */}
      <Section className="">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full z-10"></div>

                {/* Content */}
                <div
                  className={`ml-6 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  } w-full md:w-5/12`}
                >
                  <div className="bg-white p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-gray-500">
                      <Building2 size={18} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-4 text-gray-500">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      {/* Skills Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <Code className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">
                HTML, CSS, React, JavaScript, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <Server className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Express, Dotnet</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <Database className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-gray-600">SQL, MongoDB</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <Layout className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">
                Programming Language
              </h3>
              <p className="text-gray-600">Java, C, C++</p>
            </div>
          </div>
        </div>
      </Section>
      <div className="flex items-center justify-center text-center">
        <motion.img
          src={codergraphic}
          alt=""
          width="250"
          // whileHover={{ scale: 1.1, rotate: 2 }}
          // transition={{ type: "", stiffness: 300, damping: 20 }}
          className="rounded-lg"
        />
      </div>
      {/* Projects Section */}
      <Section className="">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {[
              {
                icon: FilePen,
                name: "WordHive - Blogging Platform",
                description:
                  "A modern blogging platform that allows users to create, edit, and share blog posts. Integrated Cloudinary for image hosting and MongoDB for efficient data storage. Built with React for a seamless user experience and Node.js for backend services.",
                tech: [
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Cloudinary",
                ],
                link: "https://wordhive.vercel.app",
              },
              {
                icon: Puzzle,
                name: "Solve9 - Sudoku Solver",
                description:
                  "Successfully solved Sudoku puzzles using a backtracking algorithm with 9x9 matrices. Implemented recursion and array data structures to navigate and validate puzzle cells. Created a user-friendly, responsive interface for inputting Sudoku puzzles, increasing application usability.",
                link: "https://solve9.vercel.app/",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gray-50 opacity-100"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <project.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-semibold">{project.name}</h3>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-600 text-justify mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      `{/* Resume Section */}
      <Section className="">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent opacity-50"></div>
            <h2 className="text-3xl font-bold mb-6 relative z-10">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-gray-600 mb-8 relative z-10">
              Download my resume to see my complete work history and technical
              expertise.
            </p>
            <a
              href="https://docs.google.com/document/d/1jJCVo7uhVIY9s7Jry8QmccK3Lt3405eowTKlphsYs_I/edit?tab=t.0"
              target="_blank"
              rel="noreferrer"
              download
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gray-900 rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out"></span>
              <span className="relative flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </span>
            </a>
          </motion.div>
        </div>
      </Section>
      {/* GitHub Section */}
      <Section className="max-w-4xl mx-auto mt-20">
        {/* <h2 className="text-3xl font-bold mb-12 text-center">GitHub Profile</h2> */}
        <div className="flex flex-col items-center gap-6">
          <a
            href={`https://github.com/harshgitdeep`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-lg font-semibold flex items-center gap-2 hover:text-gray-900"
          >
            <Github className="w-10 h-10" /> @harshgitdeep
          </a>
          <img
            src={`https://ghchart.rshah.org/harshgitdeep`}
            alt={`harshgitdeep's GitHub chart`}
            className="w-full max-w-lg shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-semibold mt-12 mb-6 text-center"></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo: Repo) => (
            <div
              key={repo.id}
              className="p-6 bg-gray-50 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-2">{repo.name}</h4>
              <p className="text-gray-600 text-sm mb-4">
                {repo.description || "No description available."}
              </p>
              <div className="flex justify-center gap-4 text-gray-700">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5" /> {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-5 h-5" /> {repo.forks_count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* Contact Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in hearing about new projects and
            opportunities. <br />
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <a
            href="mailto:harshzone3@gmail.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gray-900 rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out"></span>
            <span className="relative flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Say Hello
            </span>
          </a>
        </div>
      </Section>
      {/* Footer */}
      <footer className="px-6 py-8 text-center text-gray-600 border-t">
        <p>
          © 2025 <a href="https://github.com/harshgitdeep">harshgitdeep</a>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
