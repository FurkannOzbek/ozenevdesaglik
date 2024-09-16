// pages/hakkimizda.js
"use client";
import React from "react";
import Head from "next/head";
import { Header } from "../../components/Header"; // Import Header component
import { Footer } from "../../components/Footer"; // Import Footer component
import styles from "./hakkimizda.module.css";
import { FaRegLightbulb, FaBullseye, FaShieldAlt, FaInfoCircle } from "react-icons/fa"; // Importing icons

export default function Hakkimizda() {
  return (
    <>
      <Head>
        <title>Hakkımızda | Şirket Adı</title>
        <meta name="description" content="Şirketimiz hakkında bilgi edinin." />
      </Head>
      <Header /> {/* Include Header component */}
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <section className={styles.gridItem}>
            <h1 className={styles.title}>
              <FaRegLightbulb className={styles.icon} /> VİZYONUMUZ
            </h1>
            <p>
              Vizyonumuz "Kaliteli Tıp" hizmetini evlerinizin konforunda sizlere sunarak sağlıklı ve
              güven dolu bir yaşam standardı belirlemektir.
            </p>
          </section>

          <section className={styles.gridItem}>
            <h1 className={styles.title}>
              <FaBullseye className={styles.icon} /> MİSYONUMUZ
            </h1>
            <p>
              Hasta ve aile odaklı sağlık hizmeti vererek hastaların ve toplulukların sağlığını
              korumak ve ailenizin sağlık danışmanı olarak hizmet vermektir.
            </p>
          </section>

          <section className={styles.gridItem}>
            <h1 className={styles.title}>
              <FaShieldAlt className={styles.icon} /> SORUMLULUĞUMUZ
            </h1>
            <p>
              En büyük sorumluluğumuz, hasta ve aile odaklı sağlık hizmeti verirken aynı zamanda
              hasta mahremiyetini korumaktır.
            </p>
          </section>

          <section className={`${styles.gridItem} ${styles.gridItemLarge}`}>
            <h1 className={styles.title}>
              <FaInfoCircle className={styles.icon} /> HAKKIMIZDA
            </h1>
            <p>
              Siz veya sevdiğiniz biri devam eden sağlık ihtiyaçları konusunda yardıma ihtiyaç
              duyduğunda, muayene hizmetlerini ve tedavisini evinde almanın en rahat ve etkili
              iyileşme yolu olduğu çalışmalarla ortaya konmuştur. Sağlık ihtiyaçlarınızı size en
              rahat olduğunuz yere, yani evinize getiriyoruz. Ekibimiz sizlere evde muayene
              hizmetlerinden, kapsamlı bakım hizmetlerine, sağlığınızı iyileştirmek için evde tıbbi
              ekipmandan medikal tedaviye, her türlü sağlık alanında danışmanlık hizmetlerini
              sunmaktadır. Birimimiz yenidoğan bebeklerden yaşlı yetişkinlere kadar her yaştan insan
              için güvenilir, nitelikli, kapsamlı ve güler yüzlü sağlık hizmeti ve bakımı sunmaya
              hazırdır.
            </p>
            <p>
              Ekibimiz; hastalar, aileler ve arkadaşlarınız için birden fazla uzmanlık alanındaki
              sağlık profesyonelleri ile bağlantı kurarak sağlığın geri kazanılmasına,
              sürdürülmesine ve geliştirilmesine yardımcı oluyor. Ekip olarak sağlık alanındaki
              yenilikçi tedavilere ve son araştırmaları takip ediyor, ekip üyelerimiz arasında
              eğitim ve öğretime önem veriyoruz.
            </p>
            <p>
              Sizlere hasta ve aile odaklı sağlık hizmeti vererek hastaların ve toplulukların
              sağlığını korumak ve ailenize sağlık danışmanı olarak hizmet vermek adına yola çıktık.
              Bu yolda; "Kaliteli Tıp" hizmetini evlerinizin konforunda sizlere sunarak sağlıklı ve
              güven dolu bir yaşam standardı belirlemek istiyoruz. Ailenizin bir parçası olmak ve
              sizleri;
            </p>
            <br></br>
            <h2>EVİNİZDE İYİLEŞTİRMEK İSTİYORUZ…</h2>
          </section>
        </div>
      </main>
      <Footer /> {/* Include Footer component */}
    </>
  );
}
