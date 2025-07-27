
import Header from '@/components/header';
import HomeSection from '@/components/sections/home-section';
import AboutSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import CertificatesSection from '@/components/sections/certificates-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        
        <div className="backdrop-blur-sm">
          <ScrollAnimationWrapper>
            <AboutSection />
          </ScrollAnimationWrapper>
        </div>

        <div className="backdrop-blur-sm">
          <ScrollAnimationWrapper>
            <ExperienceSection />
          </ScrollAnimationWrapper>
        </div>

        <div className="backdrop-blur-sm">
          <ScrollAnimationWrapper>
            <ProjectsSection />
          </ScrollAnimationWrapper>
        </div>

        <div className="backdrop-blur-sm">
          <ScrollAnimationWrapper>
            <CertificatesSection />
          </ScrollAnimationWrapper>
        </div>

        <div className="backdrop-blur-sm">
          <ScrollAnimationWrapper>
            <ContactSection />
          </ScrollAnimationWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
}
