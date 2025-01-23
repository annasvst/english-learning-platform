import { Gauge, Lightning, Lighthouse } from "@phosphor-icons/react/dist/ssr";

export const Features = () => {
  const content = [
    {
      title: "Hızlı",
      description: "30 dakikadan kısa sürer",
      icon: <Gauge size={64} />,
    },
    {
      title: "Anında Sonuç",
      description: "Tamamlandıktan hemen sonra sonuçlar hazır",
      icon: <Lightning size={64} />,
    },

    {
      title: "Güvenilir",
      description: "Dil uzmanları tarafından doğruluk için geliştirilmiştir",
      icon: <Lighthouse size={64} />,
    },
  ];
  return (
    <ul className="mx-auto max-w-fit py-40 space-y-12">
      {content.map((item, index) => (
        <li key={index} className="flex items-center space-x-12">
          {item.icon}
          <div>
            <h2 className="text-4xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-xl">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
