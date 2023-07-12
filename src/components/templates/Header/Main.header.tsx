import Link from "next/link";

import styles from "./main.header.module.css";
import LogoIcon from "@/assets/img/logo.svg";
import WeatherIcon from "@/assets/img/ico_ws3.svg";
import ArrowRightIcon from "@/assets/img/arw1.svg";
import SearchIcon from "@/assets/img/ico_sch.svg";
import QrIcon from "@/assets/img/ico_qr.svg";
import AlarmIcon from "@/assets/img/ico_noti.svg";
import MenuIcon from "@/assets/img/ico_menu.svg";

type MainHeaderProps = {
  temp: string;
  newAlarm: boolean;
};
const MainHeader = ({ temp, newAlarm }: MainHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.logo} ${styles.icon}`}>
        <Link href={"/"}>
          <LogoIcon />
        </Link>
      </div>

      <div className={styles.icons}>
        <div className={`${styles.weather} ${styles.icon}`}>
          <Link href={"/"}>
            <WeatherIcon />
          </Link>
        </div>

        <div className={styles.weather_container}>
          <p className={styles.text}>{temp ? temp : "17˚"}</p>
          <div className={`${styles.arrowRight} ${styles.icon}`}>
            <Link href={"/"}>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        <div className={`${styles.search} ${styles.icon}`}>
          <Link href={"/"}>
            <SearchIcon />
          </Link>
        </div>

        <div className={`${styles.qr} ${styles.icon}`}>
          <Link href={"/"}>
            <QrIcon />
          </Link>
        </div>

        <div className={styles.alarm_container}>
          <div className={`${styles.alarm} ${styles.icon}`}>
            <Link href={"/"}>
              <AlarmIcon />
            </Link>
          </div>
          {newAlarm ? <div className={styles.mint_circle} /> : null}
        </div>

        <div className={`${styles.menu} ${styles.icon}`}>
          <Link href={"/"}>
            <MenuIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
