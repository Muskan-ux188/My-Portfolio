const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Innovate Inc.',
    duration: '2021 - Present',
    description: 'Leading the development of a large-scale e-commerce platform using Next.js and TypeScript. Mentoring junior developers and improving code quality across the team.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Tech Solutions LLC',
    duration: '2019 - 2021',
    description: 'Developed and maintained client websites and internal tools using React, Node.js, and GraphQL. Collaborated with designers and product managers to deliver high-quality features.',
  },
  {
    role: 'Web Developer Intern',
    company: 'CodeStarters',
    duration: '2018 - 2019',
    description: 'Assisted in building responsive user interfaces with HTML, CSS, and JavaScript. Gained hands-on experience with version control and agile development methodologies.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Work Experience</h2>
          <p className="mt-4 text-lg text-white/80">My professional journey and key achievements.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-white/10 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'}>
                  <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                  <p className="font-semibold text-primary">{exp.company}</p>
                  <p className="text-sm text-white/60">{exp.duration}</p>
                </div>

                <div className={`relative ${index % 2 === 0 ? 'md:col-start-2 md:text-left' : 'md:text-left'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-2.5 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background/80"></div>
                  <div className="md:hidden absolute -left-4 top-0 bottom-0 w-1 bg-white/10"></div>
                  
                  <p className="text-white/80 leading-relaxed pl-4 md:pl-0">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
