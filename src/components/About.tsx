
import React, { useRef, useEffect } from 'react';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineEvent {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    title: "Senior Software Engineer",
    organization: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Lead developer for enterprise applications, managing a team of 5 engineers. Implemented microservices architecture improving system performance by 40%.",
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    title: "Software Developer",
    organization: "Digital Solutions LLC",
    period: "2018 - 2021",
    description: "Developed and maintained full-stack web applications using React and Node.js. Led migration from monolith to microservices architecture.",
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    title: "Junior Developer",
    organization: "Web Creators Co.",
    period: "2016 - 2018",
    description: "Contributed to frontend development of responsive web applications and collaborated with UX/UI designers to implement pixel-perfect interfaces.",
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    title: "MSc in Computer Science",
    organization: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in Software Engineering and Data Structures. Thesis on Optimizing React Applications for Performance.",
    icon: <GraduationCap className="h-5 w-5" />
  }
];

const TimelineItem = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (index % 2 === 0) {
            itemRef.current?.classList.add('animate-fade-in-right');
          } else {
            itemRef.current?.classList.add('animate-fade-in-left');
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);
  
  return (
    <div className="flex relative mb-8 md:mb-0">
      {/* Timeline Line */}
      <div className="hidden md:block w-px bg-primary/20 absolute h-full left-1/2 transform -translate-x-1/2"></div>
      
      {/* Content */}
      <div 
        ref={itemRef}
        className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} opacity-0`}
      >
        <div className="glass-card rounded-xl p-6 h-full">
          <div className="flex items-center gap-2 mb-2 justify-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
              {event.icon}
            </div>
            <span className="text-sm font-medium text-primary">{event.period}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{event.organization}</p>
          <p className="text-sm">{event.description}</p>
        </div>
      </div>
      
      {/* Timeline Dot - Only visible on larger screens */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
      </div>
    </div>
  );
};

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current?.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="section-container">
      <div ref={aboutRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
        <h2 className="heading-lg mb-4">About Me</h2>
        <p className="subheading mx-auto">
          I'm a passionate software engineer with over 6 years of experience building 
          web applications. I focus on creating clean, efficient, and user-friendly solutions
          that solve real-world problems.
        </p>
      </div>
      
      <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-y-8">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
