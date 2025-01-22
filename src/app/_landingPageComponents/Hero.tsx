import Image from "next/image";
import Link from "next/link";
import { Button, ButtonColor } from "../_components/Button";

export const Hero = () => {
  return (
    <section className="bg-teal-800 text-gray-50 min-h-screen flex items-center py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          <h1 className="text-7xl font-semibold">
            İngilizce Seviyenizi Test Edin
          </h1>
          <ul className="space-y-4">
            <li>
              <h2 className="text-2xl font-bold">Hızlı</h2>
              <p className="text-2xl">30 dakikadan kısa sürer</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold">Anında Sonuç</h2>
              <p className="text-2xl">
                Tamamlandıktan hemen sonra sonuçları alın
              </p>
            </li>
            <li>
              <h2 className="text-2xl font-bold">Güvenilir</h2>
              <p className="text-2xl">
                Dil uzmanları tarafından doğruluk için geliştirilmiştir
              </p>
            </li>
          </ul>
          <Button color={ButtonColor.Accent}>
            <Link href="#form">Teste Başla</Link>
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/hero_section_image.jpg"
            alt="Gülen genç bir kadın"
            layout="responsive"
            width={600}
            height={740}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
