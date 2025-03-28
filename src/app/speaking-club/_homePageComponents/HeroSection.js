'use client';

import Image from "next/image";
import { Button, ButtonColor } from "@/app/_components/Button/index.tsx"; 
import { Trophy, Calendar, VideoCamera } from "@phosphor-icons/react";

export default function HeroSection() {
  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <section className="bg-rose-50 text-gray-50 min-h-[70vh] flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6 text-gray-800 p-8 md:p-20">
            <h1 className="font-extrabold text-3xl md:text-4xl">
              İngilizce Konuşma Potansiyelinizi Keşfedin!
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              İngilizce konuşurken zorlanıyor musunuz? O halde, rahat ve keyifli
              bir ortamda pratik yaparak kendinizi geliştirin, akıcı ve özgüvenli
              konuşmanın tadını çıkarın! Konuşma kulübümüze katılın.
            </p>
            <Button color={ButtonColor.Accent} onClick={scrollToProgram}>Hemen Başla</Button> 
          </div>
          <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative">
            <Image
              src="/images/speaking-club/homepage.jpg"
              alt="People talking"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section className="bg-rose-50 py-12 md:py-20">
        <div className="container mx-auto">
          <h2 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
            3 Basit Adımda Başlayın
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"> 
            <div className="p-4 md:p-6 flex flex-col items-center text-center min-h-[250px] md:min-h-[300px]"> 
              <div className="w-16 h-16 bg-custom-pink rounded-full flex items-center justify-center mb-3 md:mb-4"> 
                <Trophy size={32} weight="bold" style={{ color: 'black' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Seviyenize Uygun Oturum Seçin</h3>
              <p className="text-gray-600">
                Başlangıç (A2) veya Orta Seviye (B1) gruplarından kendinize en uygun olanı seçin!
              </p>
            </div>
            <div className="p-4 md:p-6 flex flex-col items-center text-center min-h-[250px] md:min-h-[300px]">
              <div className="w-16 h-16 bg-custom-pink rounded-full flex items-center justify-center mb-3 md:mb-4"> 
                <Calendar size={32} weight="bold" style={{ color: 'black' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Randevu Alın</h3>
              <p className="text-gray-600">
                Ödeme işleminizi gerçekleştirin, oturum bağlantınızı hemen e-posta ile alarak başlayın!
              </p>
            </div>
            <div className="p-4 md:p-6 flex flex-col items-center text-center min-h-[250px] md:min-h-[300px]"> 
              <div className="w-16 h-16 bg-custom-pink rounded-full flex items-center justify-center mb-3 md:mb-4"> 
                <VideoCamera size={32} weight="bold" style={{ color: 'black' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Meet'te görüşmek için hazır olun</h3>
              <p className="text-gray-600">
                Belirlenen saatte, istediğiniz yerden rahatça İngilizce konuşma pratiği yapın!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

