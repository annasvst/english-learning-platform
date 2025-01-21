import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-teal-800 text-white py-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold">
            Test Your English Proficiency
          </h1>
          <p className="mt-4 text-lg">
            Fast, accurate, and instant results in under 30 minutes.
          </p>
          <a
            href="#form"
            className="mt-6 inline-block bg-red-300 text-primary font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-400"
          >
            Start Your Test
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/images/hero_section_image.jpg"
            alt="A yound woman smiling"
            layout="responsive"
            width={600}
            height={740}
          />
        </div>
      </div>
    </section>
  );
};
