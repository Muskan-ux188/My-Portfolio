import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Intern Web Developer',
    company: 'Vault Of Codes',
    duration: 'july 2025',
    description: 'Worked on improving in website components.',
  },
  {
    role: 'IOT Developer',
    company: 'Arduino Project',
    duration: 'April 2024',
    description: 'Worked on bluetooth connectivity Phone and smart locker',
  },
  {
    role: 'Database Engineer',
    company: 'Raspberr pi Project',
    duration: 'December 2024',
    description: 'Worked on creating, Managing, and maintaining product databases for an automated checkout system.',
  }

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