import Link from "next/link";

import styles from "./main.bottom.tap.module.css";
import HomeIcon from "@/assets/img/ico_nav1.svg";
import RealIcon from "@/assets/img/ico_nav2.svg";
import MapIcon from "@/assets/img/ico_nav3.svg";
import BookingIcon from "@/assets/img/ico_nav4.svg";
import MypageIcon from "@/assets/img/ico_nav5.svg";

const MainBottomTap = () => {
  return (
    <nav className={styles.gnb}>
      <ul className={styles.lst}>
        <li className={styles.g1}>
          <Link href={"/"}>
            <HomeIcon width="24px" />
            <span className={styles.lab}>홈</span>
          </Link>
        </li>

        <li className={styles.g2}>
          <Link href={"/"}>
            <RealIcon width="24px" />
            <span
              className={styles.lab}
              style={{ lineHeight: "10px", marginRight: "2px" }}
            >
              실감가이드
            </span>
          </Link>
        </li>

        <li className={styles.g4}>
          <Link href={"/"}>
            <BookingIcon width="24px" />
            <span
              className={styles.lab}
              style={{ lineHeight: "10px", marginRight: "2px" }}
            >
              예약·구매
            </span>
          </Link>
        </li>

        <li className={styles.g5}>
          <Link href={"/"}>
            <MypageIcon width="24px" />
            <span className={styles.lab}>마이페이지</span>
          </Link>
        </li>
      </ul>

      <div className={styles.g3}>
        <div className={styles.map_container} />
        <Link href={"/"} className={styles.map}>
          <MapIcon width="24px" />
        </Link>
      </div>
    </nav>
  );
};

export default MainBottomTap;
