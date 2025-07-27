
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const skills = ['HTML','CSS','JavaScript','Express','Node.js','React','MongoDB','SQL','Python','Java','C'];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg bg-transparent border-white/10 aspect-square">
              <img
                src="/mus_img.jpg"
                alt="Portrait of Muskan"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint="professional portrait"
              />
            </Card>
          </div>
          <div className="md:col-span-3 space-y-6 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">About Me</h2>
            <p className="text-white/80 leading-relaxed">
              I am a passionate and results-driven Full Stack Developer with a knack for creating modern, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. I am a lifelong learner, always eager to explore new technologies and improve my craft.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-headline">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm bg-white/10 text-white border-none">{skill}</Badge>
                ))}
              </div>
            </div>
            <Button asChild size="lg">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
