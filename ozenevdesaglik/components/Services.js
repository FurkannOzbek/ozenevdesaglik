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
    description:
      "Evinizin konforunda, uzman sağlık personelimiz tarafından güvenli ve hijyenik şartlarda enjeksiyon hizmeti sunuyoruz.",
    icon: "/icons/vaccine.png",
  },
  {
    title: "EKG",
    description:
      "Taşınabilir EKG cihazlarımızla, uzman ekibimiz kalp ritmi ölçüm ve değerlendirme hizmeti sunarak sizi güvende tutuyoruz.",
    icon: "/icons/ekg.png",
  },
  {
    title: "Kan Tahlili",
    description:
      "Evde kan alımı hizmetimiz ile sağlık kontrolleriniz için gereken tahlilleri konforlu bir şekilde yapıyoruz.",
    icon: "/icons/bloodtest.png",
  },
  {
    title: "Sonda Takma/Çıkartma",
    description:
      "Evinizde rahat ve steril bir ortamda, uzman sağlık ekibimiz tarafından sonda takma ve çıkartma işlemleri güvenle yapılmaktadır. Konforunuzu ve sağlığınızı ön planda tutuyoruz.",
    icon: "/icons/catherization.png",
  },
  {
    title: "NG Takma/Çıkartma",
    description:
      "Evinizde uzman sağlık ekibimiz tarafından nazogastrik sonda takma ve çıkartma işlemleri güvenli ve hijyenik koşullarda gerçekleştirilmektedir. Beslenme ve tedavi süreçlerinizde konforunuzu sağlamak için yanınızdayız.",
    icon: "/icons/tube.png",
  },
  {
    title: "Peg Bakımı",
    description:
      "Uzman ekibimiz, evinizde PEG tüpü bakımını hijyenik ve güvenli şekilde yapmaktadır. Beslenme sürecinizde sağlığınızı korumanız için yanınızdayız.",
    icon: "/icons/endoscopy.png",
  },
  {
    title: "Yatak yarası ve Pansuman",
    description:
      "Yatak yaralarınızın bakımı ve pansumanı, evinizde uzman ekibimiz tarafından steril koşullarda yapılmaktadır. İyileşme sürecinizi desteklemek için yanınızdayız.",
    icon: "/icons/medicaldressing.png",
  },
  {
    title: "Dikiş Atma/Alma",
    description:
      "Evinizde uzman sağlık personelimiz tarafından dikiş atma ve alma işlemleri güvenli ve steril bir şekilde yapılmaktadır. Yara bakımınızı konforlu bir ortamda sağlıyoruz.",
    icon: "/icons/stitches.png",
  },
  {
    title: "Ambulans Hizmeti",
    description:
      " Acil durumlar için evinizden sağlık kuruluşlarına hızlı ve güvenli ulaşım sağlıyoruz. Uzman ekibimiz ve tam donanımlı ambulanslarımızla 7/24 yanınızdayız.",
    icon: "/icons/ambulance.png",
  },
  {
    title: "Sülük Tedavisi",
    description:
      "Uzman sağlık ekibimiz tarafından evinizde, hijyenik koşullarda sülük tedavisi hizmeti sunuyoruz. Doğal yöntemlerle sağlığınızı desteklemek için yanınızdayız.",
    icon: "/icons/leechtherapy.png",
  },
  {
    title: "Hacamat İşlemi",
    description:
      "Evinizin konforunda, uzman ekibimiz tarafından hijyenik koşullarda hacamat işlemi sunuyoruz. Geleneksel yöntemler ile de sağlığınızı desteklemek için yanınızdayız.",
    icon: "/icons/cup.png",
  },
  {
    title: "Akupunktur",
    description:
      "Evinizde, uzmanlarımız tarafından güvenli ve steril koşullarda akupunktur tedavisi sunuyoruz. Doğal yöntemlerle vücut dengenizi sağlamak için yanınızdayız.",
    icon: "/icons/acupuncture.png",
  },
  {
    title: "Evde Hasta Bakım Hizmeti",
    description:
      "Uzman sağlık ekibimiz, evinizde ihtiyacınıza uygun hasta bakım hizmetleri sunmaktadır. Konforlu bir ortamda, sağlığınız için kesintisiz destek sağlıyoruz.",
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
