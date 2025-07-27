import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const projects = [
  {
    title: 'Spotify Clone',
    description: 'A clone of spotify made using HTML and CSS',
    imageUrl: '/spotify_clone.png',
    tags: ['HTML','CSS'],
    liveUrl: 'https://github.com/Muskan-ux188/Spotify-clone/tree/main',
    codeUrl: '#',
    aiHint: 'online store'
  },
  {
    title: 'Giva Clone',
    description: 'Clone of Giva accesories shopping site Made.',
    imageUrl: '/giva.png',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'productivity app'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on performance and design.',
    imageUrl: '/port.png',
    tags: ['Astro', 'Tailwind CSS', 'Vercel','react','vanta'],
    liveUrl: '#',
    codeUrl: 'https://github.com/Muskan-ux188/My-Portfolio',
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
