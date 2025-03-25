
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-lg mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm John, a passionate software engineer with a focus on creating 
              efficient and user-friendly web applications. With over 5 years of 
              professional experience, I've worked with various technologies and frameworks.
            </p>
            
            <p className="text-lg">
              I believe in writing clean, maintainable code and constantly strive to 
              improve my skills and stay updated with the latest trends in the industry.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading tech blogs, or 
              contributing to open-source projects. I'm always open to new opportunities 
              and challenges!
            </p>
          </div>
          
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="John Doe" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
