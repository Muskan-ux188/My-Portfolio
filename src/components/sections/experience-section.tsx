import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Intern Web Developer',
    company: 'Vault Of Codes',
    duration: 'july 2025',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-black/10 backdrop-blur-lg border border-white/10 rounded-lg p-6 flex flex-col gap-4 hover:border-primary transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                  <p className="font-semibold text-primary">{exp.company}</p>
                </div>
              </div>
              <p className="text-sm text-white/60">{exp.duration}</p>
              <p className="text-white/80 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}