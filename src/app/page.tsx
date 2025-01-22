import { Hero } from "./_landingPageComponents/Hero";
import { StartTestForm } from "./_landingPageComponents/StartTestForm";
import { Info } from "./_landingPageComponents/Info";

export default function Home() {

  return (
    <main>
      <Hero />
      <Info />
      <StartTestForm />
    </main>
  );
}
