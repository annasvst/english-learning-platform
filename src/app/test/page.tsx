import { Hero } from "./_landingPageComponents/Hero";
import { StartTestForm } from "./_landingPageComponents/StartTestForm";
import { Info } from "./_landingPageComponents/Info";
import { Features } from "./_landingPageComponents/Features";

export default function TestHomePage() {

  return (
    <main>
      <Hero />
      <Features />
      <div className="bg-teal-800 h-1"></div>
      <Info />
      <StartTestForm />
    </main>
  );
}
