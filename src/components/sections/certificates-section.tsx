import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const certificates = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Jan 2024',
    url: '#',
  },
  {
    title: 'Advanced React',
    issuer: 'Meta',
    date: 'Sep 2023',
    url: '#',
  },
  {
    title: 'Certified JavaScript Developer',
    issuer: 'Oracle',
    date: 'May 2023',
    url: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Certificates & Awards</h2>
          <p className="mt-4 text-lg text-muted-foreground">My qualifications and recognitions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Card key={cert.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{cert.title}</CardTitle>
                <CardDescription>{cert.issuer} - {cert.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button variant="link" asChild className="p-0 h-auto">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
