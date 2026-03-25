import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisionList } from './components/Vision';
import { Milestones } from './components/Milestones';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <LanguageSwitcher />
      <Header />
      <main>
        <Hero />
        <VisionList />
        <Milestones />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
