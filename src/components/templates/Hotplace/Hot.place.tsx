import Link from "next/link";
import Image from "next/image";

import styles from "./hot.place.module.css";
import { getHotPlaceInfo } from "@/api";
import ViewIcon from "@/assets/img/ico_view.svg";

const HotPlace = async (): Promise<JSX.Element> => {
  const data: any = await getHotPlaceInfo();

  return (
    <div className={styles.container}>
      <div className={styles.place_container}>
        {data.result.map((item: any, index: any) => {
          const imgUrl =
            process.env.IMG_BASEURL + item?.FILE_PATH + item?.FILE_SYS_NM;
          return (
            <div key={index}>
              <div className={styles.lank_container}>
                <div className={styles.lank}>
                  TOP<b className={styles.debussy}>{index + 1}</b>
                </div>
              </div>

              <Link href={"/"}>
                <div className={styles.imgContainer}>
                  <Image
                    src={imgUrl}
                    alt={"추천코스 이미지"}
                    className={styles.img}
                    priority={true}
                    width={0}
                    height={0}
                    sizes={"100vw"}
                  />
                </div>

                <div className={styles.cont}>
                  <div className={styles.poi_name_container}>
                    <strong className={styles.poi_name}>{item.POI_NM}</strong>
                  </div>

                  <div className={styles.view_container}>
                    <span className={styles.view}>
                      <ViewIcon />
                    </span>
                    <p>{String(item.VIEW_CNT)}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotPlace;
