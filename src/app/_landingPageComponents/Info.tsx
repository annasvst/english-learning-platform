export const Info = () => {
  const testInfoCards = [
    {
      title: "Okuma",
      description:
        "Size kısa pasajlar verilecek ve ardından anlama yeteneğinizi test etmek için çoktan seçmeli veya kısa cevaplı sorular sorulacak.",
      format: "Her biri 10 sorudan oluşan 1-2 test.",
    },
    {
      title: "Dinleme",
      description:
        "Kısa ses kliplerini veya konuşmaları dinleyecek ve ardından anlayışınızı kontrol etmek için soruları cevaplayacaksınız.",
      format: "Her biri 10 sorudan oluşan 1-2 test.",
    },
    {
      title: "Dilbilgisi",
      description:
        "Kısa alıştırmalarla temel dilbilgisi kavramları ve doğru kullanım konusunda test edileceksiniz.",
      format: "Her biri 10 sorudan oluşan 1-2 test.",
    },
  ];

  return (
    <section className="py-40 px-20">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-4xl text-gray-700 font-semibold">
          Testten Ne Beklemelisiniz
        </h2>
        <p className="text-xl text-gray-600 my-8">
        Test üç bölümden oluşur: Okuma, Dinleme ve Dilbilgisi. Her bölümde 10 soruluk bir veya iki test bulunur.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-lg">
        {testInfoCards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg p-10 shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col justify-between	"
          >
            <div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Format:</span> {card.format}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};