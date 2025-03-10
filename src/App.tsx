import React from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { createRequire } from 'module';
import { getServiceID, getTemplateId, getApiPublicKey } from "../pass.ts";




import softimg from "./assets/softimg.jpeg";
import terracert from "./assets/teracert.png";
import awsscert from "./assets/awssscert.jpg";
import javacert from "./assets/javacert.png";
import databasecert from "./assets/databasecert.png";
import officeaif from "./assets/officeman.avif";
import springsec from "./assets/springsec.png";
import aiimg from "./assets/aiimg.jpeg";
import systemmet from "./assets/systemmetr.avif";
import awsss from "./assets/awss3.png";

import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Briefcase, Download, ChevronRight } from 'lucide-react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Example using Font Awesome
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pranav V
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/pranav-8660" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pranav-v-273403229/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                <Linkedin size={20} />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-out`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex space-x-4 justify-center">
              <a href="https://github.com/pranav-8660" className="text-gray-500 hover:text-gray-700">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pranav-v-273403229/" className="text-gray-500 hover:text-gray-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm Pranav V
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Software Engineer | DevOps Enthusiast
              </h2>
              <p className="text-lg md:text-xl mb-8 text-indigo-100">
                Passionate about building scalable microservices, DevOps solutions, and cloud-native applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
                >
                  Contact Me
                  <ChevronRight size={16} className="ml-2" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1oeFDxWUiKevGchn5pNkw3UbgXr9HexuE/view"  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 bg-opacity-60 hover:bg-opacity-70 transition-colors"
                >
                  Download Resume
                  <Download size={16} className="ml-2" />
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5">
              <img
                src={officeaif}
                alt="Pranav V - Software Engineer"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={softimg}
                alt="Software Engineer at work"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate <strong>Software Engineer Intern</strong> with a strong focus on <strong>DevOps, Cloud Computing, and Backend-Microservices</strong>. I thrive in building scalable, efficient, and highly available applications.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Currently interning at <strong>Practo</strong>, I have been working on implementing <strong>DevOps solutions, infrastructure automation, and backend optimization</strong>. My experience spans building effecient microservices, backend systems, cloud platforms, Docker, Kubernetes and distributed systems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Apart from my internship, I have built several projects, including a DevOps Dashboard, an Automated API Health Checker, and a Distributed Logging & Monitoring System. I have also deployed multiple microservices to cloud using various containerization and orchestration tools. These experiences have helped me sharpen my problem-solving skills and real-world application of Backend, DevOps and SRE principles.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, I enjoy exploring new cloud technologies, contributing to open-source projects, and sharing knowledge through tech blogs and discussions. I'm always eager to take on new challenges and contribute to impactful projects.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>

          <div className="flex flex-wrap gap-8">
            {/* Programming Languages */}
            <div className="w-full md:w-[calc((100%-4rem)/3)] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
              <ul className="space-y-2">
                {[{ name: "C", level: 6 }, { name: "C++", level: 5 }, { name: "Java", level: 8 }, { name: "Python", level: 6 }, { name: "Shell", level: 5 }].map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-32 font-medium text-gray-700">{skill.name}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${(skill.level / 8) * 100}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frameworks & Tools */}
            <div className="w-full md:w-[calc((100%-4rem)/3)] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frameworks & Tools</h3>
              <ul className="space-y-2">
                {[{ name: "Spring", level: 7 }, { name: "Spring Boot", level: 8 }, { name: "Docker", level: 7 }, { name: "Kubernetes", level: 6 }, { name: "Terraform", level: 5 }, { name: "REST APIs", level: 8 }, { name: "Microservices", level: 7 }].map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-32 font-medium text-gray-700">{skill.name}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${(skill.level / 8) * 100}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases */}
            <div className="w-full md:w-[calc((100%-4rem)/3)] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
              <ul className="space-y-2">
                {[{ name: "MySQL", level: 7 }, { name: "MongoDB", level: 6 }, { name: "PostgreSQL", level: 5 }].map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-32 font-medium text-gray-700">{skill.name}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${(skill.level / 8) * 100}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cloud Platforms */}
            <div className="w-full md:w-[calc((100%-4rem)/3)] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Platforms</h3>
              <ul className="space-y-2">
                {[{ name: "AWS-S3", level: 6 }, { name: "AWS-RDS", level: 7 }, { name: "AWS-EC2", level: 6 }, { name: "AWS-EKS", level: 4 }, { name: "AWS-IAM", level: 3 }, { name: "GCP-GKE", level: 5 }].map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-48 font-medium text-gray-700">{skill.name}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${(skill.level / 8) * 100}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other */}
            <div className="w-full md:w-[calc((100%-4rem)/3)] bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other</h3>
              <ul className="space-y-2">
                {[{ name: "JPA", level: 7 }, { name: "Hibernate", level: 6 }, { name: "GenAI", level: 5 }, { name: "FastAPI", level: 6 }, { name: "Prometheus", level: 3 }, { name: "Grafana", level: 2 }].map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-32 font-medium text-gray-700">{skill.name}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${(skill.level / 8) * 100}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>

          <div className="space-y-12">
            {/* Experience 1 - Practo */}
            <div className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <div className="mb-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Feb 2024 - Present
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Software Engineering Intern</h3>
              <p className="text-lg font-medium text-indigo-600 mb-2">Practo</p>
              <p className="text-gray-700 mb-4">
                Working as a <strong>DevOps & Backend Engineering Intern</strong>, contributing to microservices, automation, and cloud infrastructure improvements.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Developed and maintained backend microservices using <strong>Spring Boot</strong> and <strong>FastAPI</strong></li>
                <li>Implemented an <strong>Automated API Health Checker</strong> using <strong>Celery, Redis, and WebSockets</strong></li>
                <li>Designed <strong>containerized solutions</strong> with <strong>Docker & Kubernetes</strong> for deployment</li>
                <li>Integrated <strong>Logging & Monitoring</strong> solutions using <strong>ELK Stack, Prometheus, and Grafana</strong></li>
                <li>Worked on <strong>Infrastructure Automation</strong> using <strong>Terraform</strong> and <strong>AWS services</strong></li>
              </ul>
            </div>

            {/* Experience 2 - DevOps Dashboard Project */}
            <div className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <div className="mb-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Personal Project
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">DevOps Dashboard</h3>
              <p className="text-lg font-medium text-indigo-600 mb-2">Self-Initiated</p>
              <p className="text-gray-700 mb-4">
                Developed a <strong>real-time system monitoring dashboard</strong> to track system performance and resource utilization.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Built a <strong>FastAPI</strong> backend to collect <strong>CPU, Memory, and Disk Metrics</strong></li>
                <li>Created a <strong>React-based UI</strong> with real-time updates using <strong>WebSockets</strong></li>
                <li>Implemented a <strong>PostgreSQL</strong> database for storing historical data</li>
                <li>Deployed <strong>Dockerized services</strong> and set up monitoring with <strong>Prometheus & Grafana</strong></li>
              </ul>
            </div>

            {/* Experience 3 - Sentiment Analysis Project */}
            <div className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <div className="mb-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Personal Project
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Automating Sentiment Analysis for Business Intelligence</h3>
              <p className="text-lg font-medium text-indigo-600 mb-2">Self-Initiated</p>
              <p className="text-gray-700 mb-4">
                Developed a <strong>sentiment analysis system</strong> to analyze <strong>iPhone 15 customer reviews</strong> from Amazon.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Used <strong>NLTK</strong> to classify sentiments as <b>Positive</b>, <b>Negative</b>, or <b>Neutral</b></li>
                <li>Implemented an <strong>AI-powered Query System</strong> using <strong>GPT-3.5 & Ada-v2</strong></li>
                <li>Developed an <strong>interactive React frontend</strong> for sentiment insights</li>
                <li>Created a <strong>Power BI dashboard</strong> for advanced data visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: GenAI iPhone Sales Query */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={aiimg}
                alt="GenAI Sales Query"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">GenAI iPhone Sales Query System</h3>
                <p className="text-gray-700 mb-4">
                  RAG-powered analytics tool combining FastAPI, FAISS, and OpenAI for intelligent sales data queries.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Python</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">FastAPI</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">OpenAI</span>
                </div>
                <a href="https://github.com/pranav-8660/GenAI-iPhone-Sales-Query" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <Github size={16} className="mr-1" /> Code
                </a>
              </div>
            </div>

            {/* Project 2: System Metrics Monitor */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={systemmet}
                alt="System Metrics"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">System Metrics Monitor</h3>
                <p className="text-gray-700 mb-4">
                  Multi-server monitoring solution tracking CPU, memory, disk, and network metrics via FastAPI and Docker.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Python</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">FastAPI</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Docker</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Psutil</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/pranav-8660/system_metrics_of_cpu" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Spring Security Vault */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={springsec}
                alt="Security Vault"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spring Security Vault Integration</h3>
                <p className="text-gray-700 mb-4">
                  Secure credential management system integrating Spring Security with HashiCorp Vault for secrets protection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Java</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Spring Boot</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">HashiCorp Vault</span>
                </div>
                <a href="https://github.com/pranav-8660/springsecurity-SecurityVault" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <Github size={16} className="mr-1" /> Code
                </a>
              </div>
            </div>

            {/* Project 4: AWS S3 Microservice */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={awsss}
                alt="AWS S3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AWS S3 File Management</h3>
                <p className="text-gray-700 mb-4">
                  Secure file handling microservice with presigned URLs and PostgreSQL metadata storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Java</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">AWS S3</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Spring Boot</span>
                </div>
                <a href="https://github.com/pranav-8660/AWS-S3-Microservice" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <Github size={16} className="mr-1" /> Code
                </a>
              </div>
            </div>

            {/* Project 5: E-commerce Backend */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="E-commerce Backend"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Backend System</h3>
                <p className="text-gray-700 mb-4">
                  Integrated microservices for product management and coupon validation with Docker/Kubernetes support.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Spring Boot</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">PostgreSQL</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Docker</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/pranav-8660/Product-Microservice" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Github size={16} className="mr-1" /> Product Service
                  </a>
                  <a href="https://github.com/pranav-8660/Coupon-Microservice" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Github size={16} className="mr-1" /> Coupon Service
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6: Mail Sender Microservice */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Email Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk Email Microservice</h3>
                <p className="text-gray-700 mb-4">
                  High-throughput email service supporting attachments and multiple SMTP providers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Java</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Spring Boot</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">SMTP</span>
                </div>
                <a href="https://github.com/pranav-8660/Mail-Sender-Microservice" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <Github size={16} className="mr-1" /> Code
                </a>
              </div>
            </div>

          </div>
          {/* GitHub CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Explore more innovative projects on my GitHub profile!
            </p>
            <a
              href="https://github.com/pranav-8660"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              <Github className="mr-2 h-5 w-5" />
              Visit My GitHub
            </a>
          </div>

        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certification 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src={awsscert}
                alt="AWS Academy Cloud Foundations"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AWS Academy Cloud Foundations</h3>
                <p className="text-gray-700 mb-4">
                  Credential demonstrating expertise in designing scalable, cost-efficient, and secure applications on AWS.
                </p>
                <a href="https://www.credly.com/badges/921ec538-b270-447c-bd0a-6bc6a3a5a24d/print" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <ExternalLink size={16} className="mr-1" /> View Certification
                </a>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src={terracert}
                alt="CKA Certification"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Udemy Labs- Terraform for Beginners, KodeKloud</h3>
                <p className="text-gray-700 mb-4">
                  It provides hands-on experience in Infrastructure as Code (IaC) using Terraform. It covers core concepts like providers, modules, state management, and deployment on cloud platforms.
                </p>
                <a href="https://certificates.kodekloud.com/294a9d2f-8bd0-4b3b-a0ab-81daf56023de/37c7f3c6-d60f-477c-8e71-3a7907facca7/1fdf0ef1-76ea-4e4f-9da8-bcda202f5e62.pdf" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <ExternalLink size={16} className="mr-1" /> View Certification
                </a>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src={javacert}
                alt="Terraform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Udemy-Master Spring Boot 3 & Spring Framework 6 with Java</h3>
                <p className="text-gray-700 mb-4">
                  To build modern, scalable applications using the latest Spring technologies. It includes hands-on projects, Spring Boot fundamentals, REST API development, microservices, security, and database integration.
                </p>
                <a href="https://www.udemy.com/certificate/UC-75ae86da-dbf8-44ed-bbe8-a7e01de00fe7/" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <ExternalLink size={16} className="mr-1" /> View Certification
                </a>
              </div>
            </div>

            {/* Certification 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src={databasecert}
                alt="Docker"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">NPTEL-Data Base Management System</h3>
                <p className="text-gray-700 mb-4">
                  It provides a foundational understanding of database concepts, SQL, relational models, normalization, indexing, and transactions. It covers both theoretical and practical aspects, making it ideal for mastering DBMS principles.
                </p>
                <a href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs79/Course/NPTEL23CS79S3464106410092374.pdf" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <ExternalLink size={16} className="mr-1" /> View Certification
                </a>
              </div>
            </div>
          </div>

          {/* View More Certifications Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              View all my certifications on my LinkedIn profile!
            </p>
            <a
              href="https://www.linkedin.com/in/pranav-v-273403229/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Certifications
            </a>
          </div>

        </div>
      </section>


      <section id="contact" className="py-16 bg-white">
          
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>

          <div className="md:flex md:gap-12">
            {/* Contact Form */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const pass = require('../pass.js');
                  emailjs.sendForm(
                    "getServiceID()",
                    "getTemplateId()",
                    e.currentTarget,
                    "getApiPublicKey()"
                  )
                  .then((result) => {
                    alert('Message sent successfully!');
                    (e.target as HTMLFormElement).reset();
                  }, (error) => {
                    alert('Failed to send message. Please try again.');
                  });
                }}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            

            </div>

            {/* Contact Information */}
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:pranavcse2003@gmail.com"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        pranavcse2003@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaLinkedin className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/pranav-v-273403229/"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        linkedin.com/in/pranav-v-273403229
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaGithub className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">GitHub</p>
                      <a
                        href="https://github.com/pranav-8660"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        github.com/pranav-8660
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <span className="text-indigo-600">+91-8088967652</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Open to Work</h3>
                  <p className="text-gray-700 mb-4">
                    Seeking opportunities in Backend Development, Gen-AI, or DevOps to leverage my skills in building scalable systems and cloud infrastructure.
                  </p>
                  <div className="flex items-center text-indigo-600">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                    </span>
                    Available for internship and Full-time opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            {/* Left Section */}
            <div className="text-center md:text-left mb-8 md:mb-0 space-y-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Pranav Venkatesh
              </h2>
              <p className="text-gray-400 font-medium">Building Digital Experiences</p>
            </div>

            {/* Socialr Links */}
            <div className="flex justify-center md:justify-end space-x-8">
              <a
                href="https://github.com/pranav-8660"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} className="hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/pranav-v-273403229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} className="hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:pranavcse2003@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Send Email"
              >
                <Mail size={24} className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-700" />

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pranav V. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Crafted with passion and React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;