import Image from "next/image";
import dynamic from "next/dynamic";

import styles from "./page.module.css";
import MainHeader from "@/components/templates/Header/Main.header";
import MainBottomTap from "@/components/templates/Bottom/Main.bottom.tap";

const DynamicMainBanner = dynamic(
  /* @ts-expect-error Async Server Component */
  () => import("@/components/templates/Banner/Main.banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicForYou = dynamic(
  /* @ts-expect-error Async Server Component */
  () => import("@/components/templates/Foryou/For.you"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicHotPlace = dynamic(
  /* @ts-expect-error Async Server Component */
  () => import("@/components/templates/Hotplace/Hot.place"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicSuwonNow = dynamic(
  /* @ts-expect-error Async Server Component */
  () => import("@/components/templates/Suwonnow/Suwon.now"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <MainHeader temp={""} newAlarm={true} />
      </header>

      <div className={styles.main_banner}>
        <DynamicMainBanner />
      </div>

      <div className={styles.for_you}>
        <strong className={styles.for_you_text}>For You</strong>
        <DynamicForYou />
      </div>

      <div className={styles.hot_place}>
        <strong className={styles.hot_place_text}>Hot Place</strong>
        <p className={styles.hot_place_sub}>추천 방문지 Best 10</p>
        <DynamicHotPlace />
      </div>

      <div className={styles.suwon_now}>
        <DynamicSuwonNow />
      </div>

      <div className={styles.for_you}>
        <strong className={styles.for_you_text}>For You</strong>
        <DynamicForYou />
      </div>

      <div className={styles.for_you}>
        <strong className={styles.for_you_text}>For You</strong>
        <DynamicForYou />
      </div>

      <MainBottomTap />
    </div>
  );
};

export default Home;
