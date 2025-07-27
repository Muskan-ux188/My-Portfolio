import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product management, user authentication, and a Stripe-integrated checkout process.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Firebase'],
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'online store'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop boards, and notification system.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'productivity app'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on performance and design.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Astro', 'Tailwind CSS', 'Vercel'],
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'personal website'
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">My Projects</h2>
          <p className="mt-4 text-lg text-white/80">A selection of my recent work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-transparent border-white/10">
              <CardHeader>
                <div className="aspect-video relative">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover rounded-t-lg" data-ai-hint={project.aiHint}/>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-none">{tag}</Badge>)}
                </div>
                <CardDescription className="text-white/70">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                    <Link href={project.codeUrl}>View Code</Link>
                </Button>
                <Button asChild>
                    <Link href={project.liveUrl}>Live Demo</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
