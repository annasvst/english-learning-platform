import Image from "next/image";
import Link from "next/link";
import { Button, ButtonColor } from "@components/Button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-50 min-h-screen flex items-center py-20 px-8 md:px-20">
      <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-8 text-gray-800">
          <h1 className="text-8xl font-semibold tracking-tight">
            <span className="underline decoration-teal-800">İngilizce</span> Seviyeni Öğren
          </h1>
          <Button size={'lg'} color={ButtonColor.Primary}>
            <Link href="#form">Teste Başla</Link>
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/hero/teal-800.png"
            alt="Gülen genç bir kadın"
            layout="responsive"
            width={600}
            height={740}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
