// components/Services.js
import React from "react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Doktor Muayenesi",
    description: "Evinizde uzman doktor muayenelerimiz ile sizlerin yanınızdayız.",
    icon: "/icons/doctor.png", // Replace with the correct path to your icons
  },
  {
    title: "Hemşire Desteği",
    description:
      "Alanlarında uzman ve tecrübeli hemşire kadromuz ile evde sağlık hizmetini sizlere sunuyoruz.",
    icon: "/icons/nurse.png",
  },
  {
    title: "Serum Takma",
    description:
      "Şikayetlerinizin takibi ve tedavi amaçlı serum takma hizmetini evinizde konforlu şekilde sunuyoruz.",
    icon: "/icons/serum.png",
  },
  {
    title: "İğne (Enjeksiyon)",
    description: "Lorem ipsum",
    icon: "/icons/vaccine.png",
  },
  {
    title: "EKG",
    description: "Lorem ipsum",
    icon: "/icons/ekg.png",
  },
  {
    title: "Kan Tahlili",
    description: "Lorem ipsum",
    icon: "/icons/bloodtest.png",
  },
  {
    title: "Sonda Takma/Çıkartma",
    description: "Lorem ipsum",
    icon: "/icons/catherization.png",
  },
  {
    title: "NG Takma/Çıkartma",
    description: "Lorem ipsum",
    icon: "/icons/tube.png",
  },
  {
    title: "Peg Bakımı",
    description: "Lorem ipsum",
    icon: "/icons/endoscopy.png",
  },
  {
    title: "Yatak yarası ve Pansuman",
    description: "Lorem ipsum",
    icon: "/icons/medicaldressing.png",
  },
  {
    title: "Dikiş Atma/Alma",
    description: "Lorem ipsum",
    icon: "/icons/stitches.png",
  },
  {
    title: "Glutanyon",
    description: "Lorem ipsum",
    icon: "/icons/radiant.png",
  },
  {
    title: "Sülük Tedavisi",
    description: "Lorem ipsum",
    icon: "/icons/leechtherapy.png",
  },
  {
    title: "Hacamat İşlemi",
    description: "Lorem ipsum",
    icon: "/icons/cup.png",
  },
  {
    title: "Akupunktur",
    description: "Lorem ipsum",
    icon: "/icons/acupuncture.png",
  },
  {
    title: "Evde Hasta Bakım Hizmeti",
    description: "Lorem ipsum",
    icon: "/icons/nursinghome.png",
  },
  // Add more services as needed
];

export const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2>Hizmetlerimiz</h2>
      <p>Sağlık hizmetlerimizi 7/24 ev, işyeri ve ofislerinizde sizlere sunuyoruz.</p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.icon} alt={service.title} className={styles.serviceIcon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
