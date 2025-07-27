import VantaBackground from '@/components/vanta-background';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <VantaBackground />
      <div className="relative z-10 p-4 space-y-6 bg-black/30 backdrop-blur-sm rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
          John Doe
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto">
          Creative Full Stack Developer | Building a Better Web, One Line of Code at a Time
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="#projects">
              View My Work
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
