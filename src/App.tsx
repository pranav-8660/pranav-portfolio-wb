import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Briefcase, Download, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Alex Chen</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-700 hover:text-indigo-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
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
                Software Engineer Intern
              </h2>
              <p className="text-lg md:text-xl mb-8 text-indigo-100">
                Passionate about building innovative solutions and open to new opportunities.
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
                  href="#" 
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
                alt="Professional headshot" 
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Working on laptop" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                I'm a Computer Science student and Software Engineer Intern with a passion for building innovative and user-friendly applications. Currently seeking new opportunities to apply my skills in a collaborative environment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey in software development began during my freshman year when I built my first web application. Since then, I've expanded my knowledge through internships, personal projects, and coursework.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me hiking, reading tech blogs, or participating in hackathons. I'm always eager to learn new technologies and solve challenging problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Code className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">React</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">JavaScript</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">TypeScript</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">HTML/CSS</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">Tailwind CSS</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">Node.js</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">Express</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">Python</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">MongoDB</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-3/5"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">SQL</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Tools & Others</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">Git</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">Docker</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-3/5"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">AWS</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-2/5"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">CI/CD</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-3/5"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium text-gray-700">Agile/Scrum</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </li>
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
            {/* Experience 1 */}
            <div className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <div className="mb-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Jun 2024 - Present
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Software Engineer Intern</h3>
              <p className="text-lg font-medium text-indigo-600 mb-2">TechCorp Inc.</p>
              <p className="text-gray-700 mb-4">
                Working on the frontend development team to build and maintain web applications using React and TypeScript.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Developed responsive UI components using React and Tailwind CSS</li>
                <li>Collaborated with backend developers to integrate RESTful APIs</li>
                <li>Participated in code reviews and implemented feedback</li>
                <li>Improved application performance by optimizing render cycles</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <div className="mb-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Jan 2024 - May 2024
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Web Development Teaching Assistant</h3>
              <p className="text-lg font-medium text-indigo-600 mb-2">University of Technology</p>
              <p className="text-gray-700 mb-4">
                Assisted professor in teaching web development fundamentals to undergraduate students.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Conducted weekly lab sessions for 30+ students</li>
                <li>Graded assignments and provided constructive feedback</li>
                <li>Created supplementary learning materials</li>
                <li>Held office hours to assist students with projects</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <div className="mb-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  May 2023 - Aug 2023
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">IT Support Intern</h3>
              <p className="text-lg font-medium text-indigo-600 mb-2">Global Solutions LLC</p>
              <p className="text-gray-700 mb-4">
                Provided technical support and assisted with IT infrastructure maintenance.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Resolved hardware and software issues for employees</li>
                <li>Assisted in network configuration and maintenance</li>
                <li>Documented technical procedures for future reference</li>
                <li>Participated in the implementation of new IT systems</li>
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
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Platform</h3>
                <p className="text-gray-700 mb-4">
                  A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">React</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Node.js</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">MongoDB</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Stripe API</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Task Management App</h3>
                <p className="text-gray-700 mb-4">
                  A productivity application that helps users organize tasks, set deadlines, and track progress with intuitive UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">React</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Firebase</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Tailwind CSS</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Project 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weather Forecast App</h3>
                <p className="text-gray-700 mb-4">
                  A weather application that provides real-time forecasts, historical data, and interactive maps for locations worldwide.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">OpenWeather API</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Chart.js</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Geolocation API</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Project 4" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  A dashboard that aggregates and visualizes social media metrics from multiple platforms in a unified interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">React</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Redux</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">Social Media APIs</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">D3.js</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          
          <div className="md:flex md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:alex.chen@example.com" className="text-indigo-600 hover:text-indigo-800">
                        alex.chen@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Linkedin className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a href="https://linkedin.com/in/alexchen" className="text-indigo-600 hover:text-indigo-800">
                        linkedin.com/in/alexchen
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Github className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">GitHub</p>
                      <a href="https://github.com/alexchen-dev" className="text-indigo-600 hover:text-indigo-800">
                        github.com/alexchen-dev
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Open to Work</h3>
                  <p className="text-gray-700 mb-4">
                    I'm currently looking for software engineering internship opportunities. Feel free to reach out if you have a position that matches my skills and interests.
                  </p>
                  <div className="flex items-center text-indigo-600">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                    </span>
                    Available for immediate start
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
              <p className="text-lg font-semibold">Alex Chen</p>
              <p className="text-gray-400">Software Engineer Intern</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:alex.chen@example.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;