import React from 'react';
import { portfolioData } from './portfolioData';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import HackerText from './components/HackerText';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FolderGit2, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  Award,
  Terminal,
  Zap,
  Trophy,
  Activity
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen text-primary font-sans selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
      {/* <CustomCursor /> */}
      
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Header Section */}
        <header className="mb-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 animate-fade-in max-w-4xl mx-auto">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-accent text-xs font-mono mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SYSTEM ONLINE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              <span className="text-primary dark:text-white relative inline-block group">
                <HackerText text={portfolioData.personalInfo.name} />
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted font-light font-mono border-r-4 border-cyan-500 pr-2 w-fit">
              {portfolioData.personalInfo.title}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-mono text-muted pt-4">
              {portfolioData.personalInfo.location && (
                <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-default">
                  <MapPin size={16} />
                  <span>{portfolioData.personalInfo.location}</span>
                </div>
              )}
              {portfolioData.personalInfo.email && (
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={16} />
                  <span>{portfolioData.personalInfo.email}</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="flex gap-4">
            {portfolioData.socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 glass-card rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label={link.name}
                >
                  <Icon size={24} className="text-muted group-hover:text-accent transition-colors" />
                </a>
              );
            })}
          </div>
        </header>

        <div className="max-w-3xl mx-auto space-y-32">
          
            {/* About Section */}
            <Section title="System.Init()" icon={Terminal}>
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-slate-200 dark:border-gray-800">
                <p className="text-secondary leading-relaxed text-lg font-light">
                  <span className="text-accent font-mono text-xl mr-2">&gt;</span>
                  {portfolioData.summary}
                </p>
              </div>
            </Section>

            {/* Merged Skills & Certifications Section */}
            <Section title="Skills_&_Certifications" icon={Code}>
              <div className="space-y-12">
                {/* Tech Stack Subsection */}
                <div>
                   <h3 className="text-lg font-bold text-muted uppercase tracking-widest mb-6 font-mono flex items-center gap-2">
                    <span className="text-accent">#</span> Tech_Stack
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.skills.map((skillGroup, index) => (
                      <div key={index} className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-gray-800">
                        <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-4 font-mono flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-gray-300 rounded-lg text-xs font-mono shadow-sm hover:border-cyan-500/50 hover:bg-cyan-50/50 dark:hover:bg-transparent hover:text-accent transition-all duration-300 cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Subsection */}
                <div>
                  <h3 className="text-lg font-bold text-muted uppercase tracking-widest mb-6 font-mono flex items-center gap-2">
                    <span className="text-accent">#</span> Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolioData.certifications.map((cert) => (
                      <div key={cert.id} className="group flex items-start justify-between p-4 rounded-xl border border-slate-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-500/5 glass-card">
                        <div>
                          <h4 className="font-bold text-primary text-sm font-mono mb-1">
                            {cert.name}
                          </h4>
                          <span className="text-xs text-muted block">{cert.issuer}</span>
                        </div>
                        <span className="text-[10px] px-2 py-1 rounded bg-slate-100 dark:bg-white/5 font-mono text-muted whitespace-nowrap ml-2">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* Achievements & Interests Section */}
            <Section title="System_Activity" icon={Zap}>
              <div className="space-y-16">
                
                {/* Achievements Subsection */}
                <div className="animate-fade-in-up">
                   <h3 className="text-lg font-bold text-muted uppercase tracking-widest mb-8 font-mono flex items-center gap-3">
                    <Trophy size={20} className="text-accent" />
                    Achievements_&_Milestones
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {portfolioData.achievements.map((item) => (
                      <div key={item.id} className="group relative p-6 rounded-2xl border border-slate-200 dark:border-gray-800 bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all duration-300">
                        <div className="absolute top-6 right-6 text-xs font-mono text-muted bg-slate-200 dark:bg-white/10 px-2 py-1 rounded">
                          {item.date}
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                            <Award size={24} />
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-xl font-bold text-primary font-mono group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                            <span className="inline-block text-xs font-mono text-accent/80 mb-2">
                              &lt;{item.category} /&gt;
                            </span>
                            <p className="text-secondary text-sm leading-relaxed max-w-2xl">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests Subsection */}
                <div className="animate-fade-in-up delay-100">
                  <h3 className="text-lg font-bold text-muted uppercase tracking-widest mb-8 font-mono flex items-center gap-3">
                    <Activity size={20} className="text-accent" />
                    Interests_&_Follows
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolioData.interests.map((interest) => (
                      <div key={interest.id} className="group p-6 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#111] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                        <h4 className="text-lg font-bold text-primary font-mono mb-3 group-hover:text-accent transition-colors">
                          {interest.title}
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">
                          {interest.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </Section>

            {/* Projects Section */}
            <Section title="Deployed_Modules" icon={FolderGit2}>
              <div className="grid grid-cols-1 gap-12">
                {portfolioData.projects.map((project) => (
                  <div key={project.id} className="group relative rounded-2xl overflow-hidden h-[400px] border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500">
                    
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full bg-slate-900">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-end mb-4">
                        <h3 className="text-2xl font-bold text-white font-mono">{project.title}</h3>
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors">
                                <Github size={20} />
                              </a>
                           )}
                           {project.link && (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-cyan-500/80 hover:bg-cyan-500 text-white backdrop-blur-md transition-colors">
                                <ExternalLink size={20} />
                              </a>
                           )}
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education Section (Standalone now) */}
            <Section title="Education" icon={GraduationCap}>
              <div className="space-y-8">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-slate-200 dark:border-gray-800">
                      <h3 className="text-lg font-bold text-primary font-mono">{edu.institution}</h3>
                      <div className="text-accent text-sm font-mono mb-2">{edu.degree}</div>
                      <span className="text-xs text-muted bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">{edu.date}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Footer */}
            <footer className="pt-24 pb-12 text-center border-t border-slate-200 dark:border-gray-800">
              <p className="text-muted font-mono text-xs">
                &lt;Built by <span className="text-accent">{portfolioData.personalInfo.name}</span> /&gt;
              </p>
            </footer>

        </div>
      </div>
    </div>
  );
}

// Reusable Section Component
const Section = ({ title, icon: Icon, children }) => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary font-mono">
        <span className="text-accent opacity-50">0x</span>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default App;
