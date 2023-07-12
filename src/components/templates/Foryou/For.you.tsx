import Link from "next/link";
import Image from "next/image";

import styles from "./for.you.module.css";
import { getCourses } from "@/api";
import AiImg from "@/assets/img/ai.png";

const ForYou = async (): Promise<JSX.Element> => {
  const data: any = await getCourses();

  return (
    <div className={styles.container}>
      <strong className={styles.text}>
        로그인 후 AI 추천코스를 이용해보세요
      </strong>

      <div className={styles.coruses_container}>
        <div className={styles.ai_course}>
          <Link href={"/"}>
            <Image
              src={AiImg}
              alt={"AI 추천 코스 이미지"}
              className={styles.img}
              priority={true}
            />
          </Link>
          <p className={styles.course_text}>AI 추천 코스</p>
        </div>

        <div className={styles.etc_course}>
          {data.result.map((item: any, idx: any) => {
            const imgUrl =
              process.env.IMG_BASEURL +
              item?.FILE_PATH +
              "/" +
              item?.FILE_SYS_NM;

            return (
              <div>
                <div className={styles.imgContainer}>
                  <Image
                    src={imgUrl}
                    alt={"추천코스 이미지"}
                    className={styles.img}
                    priority={true}
                    key={idx}
                    width={0}
                    height={0}
                    sizes={"100vw"}
                  />
                </div>
                <p className={styles.course_text}>
                  {item.CRS_NM.includes(",")
                    ? `${item.CRS_NM.split(",")[0]},${
                        item.CRS_NM.split(",")[1]
                      }`
                    : item.CRS_NM.includes("(")
                    ? `${item.CRS_NM.split("(")[0]}\n(${
                        item.CRS_NM.split("(")[1]
                      }`
                    : item.CRS_NM}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForYou;
