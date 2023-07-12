import Image from "next/image";

import styles from "./suwon.now.module.css";
import { getSuwonNowInfo } from "@/api";
import SlideAtom from "@/components/atom/Slide.atom";

const SuwonNow = async (): Promise<JSX.Element> => {
  const data: any = await getSuwonNowInfo();
  console.log("수원 나우 데이터>>>", data);

  return (
    <div className={styles.container}>
      <strong className={styles.suwon_now_text}>Suwon Now</strong>
      <SlideAtom>
        {/* {data.result.map((item: any, idx: any) => {
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
        })} */}
      </SlideAtom>
    </div>
  );
};

export default SuwonNow;
