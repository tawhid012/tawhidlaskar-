import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Code2, Server, Smartphone, PenTool as Tool, Mail, User, MapPin, Link2, ExternalLink, MessageSquare } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  sourceUrl?: string;
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-mono text-sm">&lt;/&gt;</span>
          <span className="text-xl font-bold text-blue-600">Tawhid Laskar</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm">
          <Mail size={14} />
          Get In Touch
        </button>
      </header>

      {/* Hero Section */}
      <section className="pt-24 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Building Digital<br />Solutions with<br />Purpose
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            I'm Tawhid, a software engineer and entrepreneur passionate about building digital solutions. I run Limux Agency, providing affordable web development, SEO, and branding to help businesses grow. I'm also working on Nexora Trading Academy and exploring automation tools like Telegram bots. Let's connect and create something great!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-8 py-3 rounded-full flex items-center gap-2 mb-8">
            <ExternalLink size={20} />
            View Projects
          </button>
          <div className="flex gap-6">
            <a href="https://github.com/tawhid012" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors"><Github /></a>
            <a href="https://medium.com/tawhidlaskar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors"><div className="w-6 h-6 font-bold">M</div></a>
            <a href="https://mastodon.social/@tawhidlaskar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors"><Twitter /></a>
            <a href="https://www.instagram.com/tawheed.xds/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors"><Instagram /></a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="text-2xl">📂</div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Limux Agency"
              description="Modern digital agency platform with comprehensive service management"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              tech={['React', 'Node.js', 'MongoDB']}
              demoUrl="https://limuxagency.netlify.app"
            />
            <ProjectCard
              title="ParaNotes"
              description="Feature-rich note-taking application with cloud synchronization"
              image="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80"
              tech={['Vue.js', 'Express', 'PostgreSQL']}
              demoUrl="https://paranotes.netlify.app"
            />
            <ProjectCard
              title="Trade with XO"
              description="Advanced trading platform with real-time market analysis"
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
              tech={['React', 'Python', 'Redis']}
              demoUrl="https://tradewithxo.netlify.app"
            />
            <ProjectCard
              title="OneChain"
              description="Comprehensive blockchain explorer and analytics platform"
              image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
              tech={['Web3', 'Node.js', 'GraphQL']}
              demoUrl="https://onechain.netlify.app"
            />
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 size={32} className="text-blue-600" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-6">
                <Code2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-600 text-lg">HTML5, CSS3, JavaScript, React</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-6">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="text-gray-600 text-lg">Node.js, Python, SQL, MongoDB</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Responsive Design</h3>
              <p className="text-gray-600 text-lg">Mobile-First, Cross-Platform</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-6">
                <Tool size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Development Tools</h3>
              <p className="text-gray-600 text-lg">Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Mail size={24} />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div>
              <label className="flex items-center gap-2 mb-2">
                <User size={20} />
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 mb-2">
                <Mail size={20} />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 mb-2">
                <MessageSquare size={20} />
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow h-32"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-full flex items-center gap-2"
            >
              <Mail size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1">
              <h3 className="flex items-center gap-2 mb-4">
                <User size={20} />
                About Me
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Developer passionate about creating innovative web solutions and delivering exceptional user experiences. With expertise in modern web technologies and a keen eye for design, I help businesses transform their digital presence.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <Mail size={20} />
                <span>Email: contact@tawhidlaskar.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Location: Assam, India</span>
              </div>
            </div>
            <div className="md:w-72">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-600/20 rounded-2xl blur-xl"></div>
                <img 
                  src="https://avatars.githubusercontent.com/u/67519541"
                  alt="Tawhid Laskar"
                  className="relative rounded-2xl w-full aspect-square object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="flex items-center gap-2 mb-4">
                <Link2 size={20} />
                Quick Links
              </h3>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </nav>
            </div>
            <div>
              <h3 className="flex items-center gap-2 mb-4">
                <Link2 size={20} />
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a href="https://github.com/tawhid012" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="https://medium.com/tawhidlaskar" className="text-gray-400 hover:text-white transition-colors">M</a>
                <a href="https://mastodon.social/@tawhidlaskar" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="https://www.instagram.com/tawheed.xds/" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="https://about.me/tawhidlaskar" className="text-gray-400 hover:text-white transition-colors"><User size={20} /></a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>© 2024 Tawhid Laskar. All rights reserved.</p>
            <p className="flex items-center justify-center gap-1 mt-2">
              &lt;/&gt; with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, image, tech, demoUrl, sourceUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <ExternalLink size={16} />
            Live Demo
          </a>
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2">
              <Code2 size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;