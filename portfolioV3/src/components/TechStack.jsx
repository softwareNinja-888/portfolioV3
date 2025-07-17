import React, { useState } from 'react';
import {
} from "lucide-react";
import {
  PencilRuler,
  Braces,
  Paintbrush,
  CloudCog,
  Code, 
  Database, 
  Cloud, 
  Settings, 
  GitBranch,
  Server,
  Container,
  Layers,
  Menu,
  X,
  User,
  Briefcase,
  FolderOpen,
  MessageSquare,
  BookOpen,
  Rss
} from 'lucide-react';

export function TechStack(){

  const [activeSection, setActiveSection] = useState('stack');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const techStack = [
    {
      category: "Development",
      items: [
        { name: "React.js", description: "JavaScript library for UI", icon: '/react.svg' },
        { name: "Node.js", description: "Backend JavaScript runtime", icon: '/node.svg' },
        { name: "Express", description: "Minimal Node.js framework", icon: '/express.svg' },
        { name: "Prisma", description: "Modern ORM for databases", icon: '/prisma.svg' },
        { name: "PostgreSQL", description: "Open-source SQL database", icon: '/postgresql.svg' },
        { name: "Django", description: "Python web framework", icon: 'django.svg' },
        { name: "Python", description: "General-purpose language", icon: '/python.svg' },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: '/tailwindcss.svg' },
        { name: "Git", description: "Version control system", icon: <GitBranch className="w-6 h-6 text-primary" /> },
        { name: "Figma", description: "UI/UX design tool", icon: '/figma.svg' },
      ]
    }
  ];

  return (
    <>
        <div id="tech" className="max-w-4xl mx-auto my-20">
          <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-primary text-2xl font-mono">#2.</span>
                  <h2 className="text-4xl font-roboto text-white">Tech Stack</h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-quickSand">
                  These are the tools I use most frequently and am highly proficient in. However, I’m a fast learner who continuously explores new technologies, so I’m not limited to what’s listed here. <a href="#contact" className="text-primary">Contact me</a> to see if I can work with a different technology for your project.
              </p>
          </div>

          {techStack.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-roboto text-white mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((tech) => (
                  <div 
                    key={tech.name}
                    className="group p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 bg-gray-900/50 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                            {typeof tech.icon === 'string' ? (
                              <img src={tech.icon} alt={`${tech.name} icon`} className="w-6 h-6" />
                            ) : (
                              tech.icon
                            )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                        <p className="text-sm text-gray-400">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

    </>
  );
};

