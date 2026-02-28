import { XboxHeader } from './XboxHeader';
import { HeroRotator } from './HeroRotator';
import { IconBlade } from './IconBlade';
import { MosaicGrid } from './MosaicGrid';
import { PlayYourWaySection } from './PlayYourWaySection';
import { SocialSection } from './SocialSection';
import { XboxFooter } from './XboxFooter';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <XboxHeader />
      <main>
        <HeroRotator />
        <IconBlade />
        <MosaicGrid />
        <PlayYourWaySection />
        <SocialSection />
      </main>
      <XboxFooter />
    </div>
  );
}