import React from 'react';
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Briefcase, Download, ChevronRight } from 'lucide-react';
import { FaPhone , FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Example using Font Awesome
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
  {/* Navigation */}
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-900">Pranav V</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
          <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#certifications" className="text-gray-700 hover:text-indigo-600 transition-colors">Certifications</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/pranav-8660" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pranav-v-273403229/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
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
            href="https://drive.google.com/your-resume-link"  // Replace with actual resume link
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
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
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
          src="https://images.unsplash.com/photo-1598257006626-9c85b9f23664?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
          Apart from my internship, I have built several projects, including a DevOps Dashboard, an Automated API Health Checker, and a Distributed Logging & Monitoring System.I have also deployed multiple microservices to cloud using various containerization and orchestration tools. These experiences have helped me sharpen my problem-solving skills and real-world application of SRE principles.
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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Programming Languages */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
        <ul className="space-y-2">
          {[{ name: "C", level: 6 }, { name: "C++", level: 6 }, { name: "Java", level: 8 }, { name: "Python", level: 7 }, { name: "Shell", level: 5 }].map((skill) => (
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
      <div className="bg-white p-6 rounded-lg shadow-md">
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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
        <ul className="space-y-2">
          {[{ name: "MySQL", level: 7 }, { name: "MongoDB", level: 6 }, { name: "PostgreSQL", level: 7 }].map((skill) => (
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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Platforms</h3>
        <ul className="space-y-2">
          {[{ name: "AWS (S3, EC2, RDS, EKS)", level: 7 }, { name: "GCP (Google Kubernetes Engine)", level: 5 }].map((skill) => (
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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Other</h3>
        <ul className="space-y-2">
          {[{ name: "JPA", level: 7 }, { name: "Hibernate", level: 6 }, { name: "GenAI", level: 5 }, { name: "FastAPI", level: 6 }, { name: "Prometheus", level: 5 }, { name: "Grafana", level: 5 }].map((skill) => (
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
          src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
          src="https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
          src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
          src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="AWS Certified" 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">AWS Certified Solutions Architect – Associate</h3>
          <p className="text-gray-700 mb-4">
            Credential demonstrating expertise in designing scalable, cost-efficient, and secure applications on AWS.
          </p>
          <a href="https://www.credly.com/badges/example" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <ExternalLink size={16} className="mr-1" /> View Certification
          </a>
        </div>
      </div>

      {/* Certification 2 */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="CKA Certification" 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Kubernetes Administrator (CKA)</h3>
          <p className="text-gray-700 mb-4">
            Industry-recognized certification for Kubernetes cluster management, networking, and security.
          </p>
          <a href="https://www.credly.com/badges/example" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <ExternalLink size={16} className="mr-1" /> View Certification
          </a>
        </div>
      </div>

      {/* Certification 3 */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1606768667367-2d5390ef04d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Terraform" 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">HashiCorp Certified: Terraform Associate</h3>
          <p className="text-gray-700 mb-4">
            Certification proving expertise in Infrastructure as Code (IaC) and automation with Terraform.
          </p>
          <a href="https://www.credly.com/badges/example" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <ExternalLink size={16} className="mr-1" /> View Certification
          </a>
        </div>
      </div>

      {/* Certification 4 */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1603484477859-abe3a04ff024?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Docker" 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Docker Certified Associate (DCA)</h3>
          <p className="text-gray-700 mb-4">
            Official certification for Docker fundamentals, container orchestration, and deployment best practices.
          </p>
          <a href="https://www.credly.com/badges/example" className="text-indigo-600 hover:text-indigo-800 flex items-center">
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
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-md"
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
<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="md:flex md:items-center md:justify-between">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="text-lg font-semibold">Pranav</p>
        <p className="text-gray-400">Software Engineering Intern</p>
      </div>
      <div className="flex justify-center md:justify-end space-x-6">
        <a href="https://github.com/pranav-8660" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/pranav-v-273403229/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Linkedin size={20} />
        </a>
        <a href="mailto:pranavcse2003@gmail.com" className="text-gray-400 hover:text-white">
          <Mail size={20} />
        </a>
      </div>
    </div>
    <div className="mt-8 text-center md:text-left text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} Pranav. All rights reserved.</p>
    </div>
  </div>
</footer>
</div>
  );
}

export default App;