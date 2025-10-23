'use client';
import React, { useState } from "react";
import styles from './page.module.css';

interface Project {
  title: string;
  type: string;
  link: string;
  description: string;
  details: {
    developers: string[];
    designers: string[];
    contentCreators: string[];
    seoSpecialists: string[];
    technologies: string[];
    timeline: string;
    results: string;
  };
}

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  skills: string[];
  projects: string[];
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | ''>('');

  const projects: Project[] = [
    {
      title: 'Web Development & Digital Marketing for Tech Startup',
      type: 'Web Development',
      link: 'https://primepath-next.vercel.app/',
      description: 'Built a responsive website and executed tailored digital campaigns to accelerate brand growth and engagement for a rising tech company.',
      details: {
        developers: ['kumar'],
        designers: [],
        contentCreators: ['Ram'],
        seoSpecialists: ['RamKumar'],
        technologies: ['Next.js'],
        timeline: '1 months',
        results: 'Built a fully optimized website for mobile and desktop, improving conversion rates and overall performance.'
      }
    },
    // {
    //   title: 'Healthcare Mobile App',
    //   type: 'Mobile Development',
    //   link: 'https://example-healthapp.com',
    //   description: 'Developed a comprehensive healthcare app for patient management and telemedicine services.',
    //   details: {
    //     developers: ['Michael Chen', 'Alex Kim'],
    //     designers: ['Emma Rodriguez', 'James Wilson'],
    //     contentCreators: ['Sophia Martinez'],
    //     seoSpecialists: ['Lisa Thompson', 'Robert Davis'],
    //     technologies: ['React Native', 'Firebase', 'Node.js'],
    //     timeline: '6 months',
    //     results: 'Achieved 50,000+ downloads in first 3 months with 4.8-star rating'
    //   }
    // },
    // {
    //   title: 'Corporate Branding Campaign',
    //   type: 'Digital Marketing',
    //   link: 'https://example-corporate.com',
    //   description: 'Complete rebranding and digital marketing campaign for a Fortune 500 company.',
    //   details: {
    //     developers: ['Alex Kim'],
    //     designers: ['James Wilson', 'Emma Rodriguez'],
    //     contentCreators: ['David Wilson', 'Sophia Martinez'],
    //     seoSpecialists: ['Robert Davis', 'Lisa Thompson'],
    //     technologies: ['WordPress', 'Google Analytics', 'SEMrush'],
    //     timeline: '4 months',
    //     results: 'Increased brand awareness by 65% and organic traffic by 120%'
    //   }
    // },
    {
      title: 'E-commerce Platform design',
      type: 'Web Development',
      link: '',
      description: 'Interactive learning platform with personalized content and progress tracking.',
      details: {
        developers: ['Emma'],
        designers: [''],
        contentCreators: [''],
        seoSpecialists: [''],
        technologies: ['Python', 'Django', '', ''],
        timeline: '1 months',
        results: 'Successfully hosted and maintained a scalable platform with exceptional performance and user satisfaction.'
      }
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Kumar',
      position: 'Lead Frontend Developer',
      bio: 'Specialized in React and Vue.js with 1 years of experience building responsive web applications.',
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript'],
      projects: ['E-commerce Platform Redesign', 'Educational Platform']
    },
    {
      name: 'Emma',
      position: 'Full Stack Developer',
      bio: 'Expert in Python and Django, with a passion for building scalable and efficient web solutions.',
      skills: ['Python', 'Django', 'React', 'PHP'],
      projects: ['E-commerce Platform design', ]
    },
    // {
    //   name: 'Alex Kim',
    //   position: 'Mobile Developer',
    //   bio: 'Specialized in cross-platform mobile development using React Native and Flutter.',
    //   skills: ['React Native', 'Flutter', 'Firebase', 'Node.js'],
    //   projects: ['Healthcare Mobile App', 'Corporate Branding Campaign', 'Educational Platform']
    // },
    // {
    //   name: 'Emma Rodriguez',
    //   position: 'UI/UX Designer',
    //   bio: 'Award-winning designer focused on creating intuitive user experiences across all platforms.',
    //   skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
    //   projects: ['E-commerce Platform Redesign', 'Healthcare Mobile App', 'Corporate Branding Campaign', 'Educational Platform']
    // },
    // {
    //   name: 'James Wilson',
    //   position: 'Graphic Designer',
    //   bio: 'Creative visual designer with a keen eye for typography, color theory, and brand identity.',
    //   skills: ['Graphic Design', 'Branding', 'Typography', 'Illustration'],
    //   projects: ['Healthcare Mobile App', 'Corporate Branding Campaign']
    // },
    // {
    //   name: 'David Wilson',
    //   position: 'Content Creator',
    //   bio: 'Creative storyteller with expertise in developing engaging content that drives conversions.',
    //   skills: ['Content Creation', 'Video Production', 'Social Media', 'Storytelling'],
    //   projects: ['E-commerce Platform Redesign', 'Corporate Branding Campaign']
    // },
    {
      name: 'Ramkumar',
      position: 'Content Writer',
      bio: 'Versatile writer with expertise in creating compelling copy for diverse industries and audiences.',
      skills: ['Content Writing', 'Copywriting', 'Blog Management', 'Proofreading'],
      projects: ['Web Development & Digital Marketing for Tech Startup']
    },
    {
      name: 'Ramkumar',
      position: 'SEO Specialist',
      bio: 'Data-driven SEO expert with proven track record of improving search rankings and organic traffic.',
      skills: ['SEO', 'Technical SEO', 'Analytics', 'Link Building'],
      projects: ['Web Development & Digital Marketing for Tech Startup', 'E-commerce Platform design']

    },
    {
      name: 'Ramkumar',
      position: 'Digital Marketing Specialist',
      bio: 'Strategic marketer with expertise in PPC, social media advertising, and conversion optimization.',
      skills: ['PPC', 'Social Media Marketing', 'Email Marketing', 'Campaign Management'],
      projects: ['Web Development & Digital Marketing for Tech Startup']
    }
  ];

  const openProjectLink = (link: string) => {
    window.open(link, '_blank');
  };

  const nextProject = () => {
    setSwipeDirection('left');
    setTimeout(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
      setSwipeDirection('');
    }, 300);
  };

  const prevProject = () => {
    setSwipeDirection('right');
    setTimeout(() => {
      setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
      setSwipeDirection('');
    }, 300);
  };

  // Function to get team members by role
  const getTeamMembersByRole = (role: string) => {
    return teamMembers.filter(member => 
      member.position.toLowerCase().includes(role.toLowerCase())
    );
  };

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.sectionTitle}>Our Projects</h1>
          <p>Explore our portfolio of successful digital solutions and meet the talented team behind them</p>
        </div>

        <div className={styles.projectsContent}>
          <h2>What We Create</h2>
          <p>At Primepath, we transform ideas into powerful digital experiences. Our multidisciplinary team collaborates to deliver innovative solutions that drive results for our clients across various industries.</p>
        </div>

        <div className={styles.featuredProject}>
          <h2 className={styles.sectionTitle}>Featured Project</h2>
          <div className={styles.projectShowcase}>
            <div className={styles.projectNavigation}>
              <button className={styles.navBtn} onClick={prevProject}>&lt;</button>
              <div className={`${styles.projectDisplay} ${swipeDirection ? styles[`swipe-${swipeDirection}`] : ''}`}>
                <div className={styles.projectMainInfo}>
                  <h3>{projects[activeProject].title}</h3>
                  <div className={styles.projectMeta}>
                    <span>{projects[activeProject].type}</span>
                  </div>
                  <p>{projects[activeProject].description}</p>
                  
                  {/* Developer Contributions Section */}
                  <div className={styles.teamContributions}>
                    <h4>Team Contributions</h4>
                    <div className={styles.contributionsGrid}>
                      <div className={styles.contributionRole}>
                        <h5>Development Team</h5>
                        {projects[activeProject].details.developers.map((dev, index) => {
                          const developer = teamMembers.find(m => m.name === dev);
                          return (
                            <div key={index} className={styles.teamMemberContribution}>
                              <strong>{dev}</strong> - {developer?.position}
                              <div className={styles.memberSkills}>
                                {developer?.skills.slice(0, 3).join(' • ')}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className={styles.contributionRole}>
                        <h5>Design Team</h5>
                        {projects[activeProject].details.designers.map((designer, index) => {
                          const designMember = teamMembers.find(m => m.name === designer);
                          return (
                            <div key={index} className={styles.teamMemberContribution}>
                              <strong>{designer}</strong> - {designMember?.position}
                              <div className={styles.memberSkills}>
                                {designMember?.skills.slice(0, 3).join(' • ')}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <button 
                    className={`${styles.btn} ${styles.primary}`} 
                    onClick={() => openProjectLink(projects[activeProject].link)}
                  >
                    Visit Project
                  </button>
                </div>
                
                <div className={styles.projectDetails}>
                  <h4>Project Details</h4>
                  <div className={styles.detailGrid}>
                    <div className={`${styles.detailItem} ${styles.fullWidth}`}>
                      <span className={styles.detailLabel}>Technologies Used:</span>
                      <div className={styles.techTags}>
                        {projects[activeProject].details.technologies.map((tech, index) => (
                          <span key={index} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Timeline:</span>
                      <span>{projects[activeProject].details.timeline}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Content Team:</span>
                      <span>{projects[activeProject].details.contentCreators.join(', ')}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>SEO Team:</span>
                      <span>{projects[activeProject].details.seoSpecialists.join(', ')}</span>
                    </div>
                    <div className={`${styles.detailItem} ${styles.fullWidth}`}>
                      <span className={styles.detailLabel}>Results:</span>
                      <span className={styles.resultsHighlight}>{projects[activeProject].details.results}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.navBtn} onClick={nextProject}>&gt;</button>
            </div>
            
            <div className={styles.projectIndicators}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === activeProject ? styles.active : ''}`}
                  onClick={() => setActiveProject(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.allProjects}>
          <h2 className={styles.sectionTitle}>All Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`${styles.projectCard} ${index === activeProject ? styles.active : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <div className={styles.projectMeta}>
                    <span>{project.type}</span>
                  </div>
                  <p>{project.description}</p>
                  
                  <div className={styles.projectTeamPreview}>
                    <div className={styles.teamPreview}>
                      <strong>Developers:</strong> 
                      <div className={styles.previewNames}>
                        {project.details.developers.slice(0, 2).join(', ')}
                        {project.details.developers.length > 2 && ` +${project.details.developers.length - 2} more`}
                      </div>
                    </div>
                    
                    <div className={styles.projectTech}>
                      <strong>Technologies:</strong> 
                      <div className={styles.previewTech}>
                        {project.details.technologies.slice(0, 3).join(', ')}
                        {project.details.technologies.length > 3 && '...'}
                      </div>
                    </div>
                    
                    <div className={styles.projectTimeline}>
                      <strong>Timeline:</strong> {project.details.timeline}
                    </div>
                  </div>
                </div>
                <div className={styles.projectLink}>
                  <button 
                    className={styles.btn} 
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectLink(project.link);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <p className={styles.teamIntro}>Meet the talented professionals who bring our projects to life</p>
          
          {/* Developers Team */}
          <div className={styles.roleTeamSection}>
            <h3 className={styles.roleTitle}>Development Team</h3>
            <div className={styles.teamGrid}>
              {getTeamMembersByRole('developer').map((member, index) => (
                <div key={index} className={`${styles.teamCard} ${styles.slideInLeft}`}>
                  <div className={styles.memberImage}>
                    <div className={styles.imagePlaceholder}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.position}>{member.position}</p>
                    <div className={styles.memberSkills}>
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                    <p className={styles.bio}>{member.bio}</p>
                    <div className={styles.memberProjects}>
                      <strong>Featured Projects:</strong>
                      <div className={styles.projectTags}>
                        {member.projects.slice(0, 2).map((project, idx) => (
                          <span key={idx} className={styles.projectTag}>{project}</span>
                        ))}
                        {member.projects.length > 2 && (
                          <span className={styles.projectTag}>+{member.projects.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Team */}
          <div className={styles.roleTeamSection}>
            <h3 className={styles.roleTitle}>Design Team</h3>
            <div className={styles.teamGrid}>
              {getTeamMembersByRole('designer').map((member, index) => (
                <div key={index} className={`${styles.teamCard} ${styles.slideInLeft}`}>
                  <div className={styles.memberImage}>
                    <div className={styles.imagePlaceholder}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.position}>{member.position}</p>
                    <div className={styles.memberSkills}>
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                    <p className={styles.bio}>{member.bio}</p>
                    <div className={styles.memberProjects}>
                      <strong>Featured Projects:</strong>
                      <div className={styles.projectTags}>
                        {member.projects.slice(0, 2).map((project, idx) => (
                          <span key={idx} className={styles.projectTag}>{project}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content & Marketing Team */}
          <div className={styles.roleTeamSection}>
            <h3 className={styles.roleTitle}>Content & Marketing Team</h3>
            <div className={styles.teamGrid}>
              {getTeamMembersByRole('content').concat(getTeamMembersByRole('marketing')).map((member, index) => (
                <div key={index} className={`${styles.teamCard} ${styles.slideInLeft}`}>
                  <div className={styles.memberImage}>
                    <div className={styles.imagePlaceholder}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.position}>{member.position}</p>
                    <div className={styles.memberSkills}>
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                    <p className={styles.bio}>{member.bio}</p>
                    <div className={styles.memberProjects}>
                      <strong>Featured Projects:</strong>
                      <div className={styles.projectTags}>
                        {member.projects.slice(0, 2).map((project, idx) => (
                          <span key={idx} className={styles.projectTag}>{project}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;