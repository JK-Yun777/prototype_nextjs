import Image from "next/image";

import styles from "./main.banner.module.css";
import { getMainBanner } from "@/api";
import SlideAtom from "@/components/atom/Slide.atom";

const MainBanner = async (): Promise<JSX.Element> => {
  const data: any = await getMainBanner();

  return (
    <div className={styles.container}>
      <SlideAtom>
        {data.result.map((item: any, idx: any) => {
          const imgUrl =
            process.env.IMG_BASEURL + item?.FILE_PATH + "/" + item?.FILE_SYS_NM;
          return (
            <div className={styles.imgContainer}>
              <Image
                src={imgUrl}
                alt={"터치수원 메인배너 이미지"}
                className={styles.img}
                priority={true}
                key={idx}
                width={0}
                height={0}
                sizes={"100vw"}
              />
            </div>
          );
        })}
      </SlideAtom>
    </div>
  );
};

export default MainBanner;
