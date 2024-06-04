import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaCoins } from "react-icons/fa";
import { GiTeacher, GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";

const servicesData = [
  {
    name: "Formation Continue",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "#",
    description:
        "Nos formations continues couvrent des domaines tels que Data Science, IA, Blockchain Technology, Cybersecurity, Audit Informatique, et Réseaux Informatiques.",
    aosDelay: "0",
  },
  {
    name: "Formation Personnalisée",
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    link: "#",
    description:
        "Nous proposons des formations personnalisées adaptées aux besoins spécifiques des" +
        " entreprises et des professionnels.",
    aosDelay: "300",
  },
  {
    name: "Tutoriat",
    icon: <GiTeacher className="text-4xl text-primary" />,
    link: "#",
    description:
        "Nous offrons un soutien personnalisé pour les étudiants en licence et master en informatique avec des cours et des travaux pratiques.",
    aosDelay: "500",
  },
  {
    name: "Consultation",
    icon: <MdOutlineSupportAgent className="text-4xl text-primary" />,
    link: "#",
    description:
        "Nous fournissons des services de consultation en IA, Blockchain, Sécurité et Audit Informatique, Base de Données, et Réseaux Informatiques.",
    aosDelay: "700",
  },
  {
    name: "Envoi et Réception de Cryptomonnaie",
    icon: <FaCoins className="text-4xl text-primary" />,
    link: "#",
    description:
        "Facilitez vos transactions de cryptomonnaie avec notre module intuitif pour l'envoi et la réception de cryptomonnaies.",
    aosDelay: "900",
  },
  {
    name: "Conversion de Cryptomonnaie",
    icon: <GiReceiveMoney className="text-4xl text-primary" />,
    link: "#",
    description:
        "Convertissez facilement vos cryptomonnaies en diverses devises pour répondre à vos besoins financiers.",
    aosDelay: "1100",
  },
];

const Services = () => {
  return (
      <>
        <span id="about"></span>
        <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
          <div className="container">
            {/* Header */}
            <div className="pb-12 text-center space-y-3">
              <h1
                  data-aos="fade-up"
                  className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
              >
                Découvrez nos services
              </h1>
              <p
                  data-aos="fade-up"
                  className="text-gray-600 dark:text-gray-400 text-sm"
              >
                Explorez les solutions technologiques avancées que nous proposons pour soutenir votre évolution numérique. Nos services innovants sont conçus pour accompagner votre entreprise, vos compétences professionnelles, et vos études vers de nouveaux sommets.
              </p>
            </div>

            {/* Services cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {servicesData.map((service) => (
                  <div
                      key={service.name}
                      data-aos="fade-up"
                      data-aos-delay={service.aosDelay}
                      className="card space-y-3 sm:space-y-4 p-4"
                  >
                    <div>{service.icon}</div>
                    <h1 className="text-lg font-semibold">{service.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
              ))}
            </div>

            {/* Button */}
            <div
                data-aos="fade-up"
                data-aos-delay="1300"
                data-aos-offset="0"
                className="text-center mt-4 sm:mt-8"
            >
              <button className="primary-btn">En savoir plus</button>
            </div>
          </div>
        </div>
      </>
  );
};

export default Services;
