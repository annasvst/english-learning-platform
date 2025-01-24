import { BookOpenText, Headphones, Lectern } from "@phosphor-icons/react/dist/ssr";

export const Info = () => {
  const content = [
    {
      title: "Okuma",
      description:
        "Size kısa pasajlar verilecek ve ardından anlama yeteneğinizi test etmek için çoktan seçmeli veya kısa cevaplı sorular sorulacak.",
      format: "Her biri 10 sorudan oluşan 1-2 test.",
      icon: <BookOpenText size={42} />


    },
    {
      title: "Dinleme",
      description:
        "Kısa ses kliplerini veya konuşmaları dinleyecek ve ardından anlayışınızı kontrol etmek için soruları cevaplayacaksınız.",
      format: "Her biri 10 sorudan oluşan 1-2 test.",
      icon: <Headphones size={42} />
    },
    {
      title: "Dilbilgisi",
      description:
        "Kısa alıştırmalarla temel dilbilgisi kavramları ve doğru kullanım konusunda test edileceksiniz.",
      format: "Her biri 10 sorudan oluşan 1-2 test.",
      icon: <Lectern size={42} />
    },
  ];

  return (
    <section className="py-40 px-8 md:px-20 bg-teal-800 text-teal-50">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-4xl font-semibold">
          Testten Ne Beklemelisiniz
        </h2>
        <p className="text-xl text-teal-100 my-8">
        Test üç bölümden oluşur: Okuma, Dinleme ve Dilbilgisi. Her bölümde 10 soruluk bir veya iki test bulunur.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-lg">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-10 shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col justify-between	"
          >
            <div>
              <div className="text-teal-800 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Format:</span> {item.format}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};