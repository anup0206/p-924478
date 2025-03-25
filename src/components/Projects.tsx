
import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product management, user authentication, and payment processing using Stripe.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/johndoe/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for organizing tasks with features like drag and drop, categorization, and real-time updates.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    liveUrl: "https://task-app-demo.com",
    githubUrl: "https://github.com/johndoe/task-manager"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design and smooth animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    githubUrl: "https://github.com/johndoe/portfolio"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "rounded-xl overflow-hidden bg-white shadow-lg opacity-0",
        "transform transition-all duration-500",
        index % 2 === 0 ? 'hover:translate-y-[-8px]' : 'hover:translate-y-[-8px]'
      )}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="heading-md mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="skill-tag">{tech}</span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-sm py-2"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary text-sm py-2"
            >
              <span>Code</span>
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="heading-lg mb-4">My Projects</h2>
        <p className="subheading mx-auto">
          A collection of projects that showcase my skills and experience.
          Each project reflects my ability to solve complex problems and work with different technologies.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
