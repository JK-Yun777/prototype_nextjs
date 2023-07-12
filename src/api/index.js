const getMainBanner = async () => {
  const language = "1";
  const url = `${process.env.API_BASE_URL}/go365-home/smart-tour/sun/v1/main/banner/list?LANG_ID=${language}`;
  const res = await fetch(url, { next: { revalidate: 10 } });

  return res.json();
};

const getCourses = async () => {
  const language = "1";
  const LTTD = "37.309784";
  const LGNT = "126.997344";
  const url = `${process.env.API_BASE_URL}/go365-home/smart-tour/sun/v1/home/course?LANG_ID=${language}&UP_CD_ID=702&CTGRY_ID=803&LTTD=${LTTD}&LGNT=${LGNT}`;
  const res = await fetch(url, { next: { revalidate: 10 } });

  return res.json();
};

const getHotPlaceInfo = async () => {
  const language = "1";
  const LTTD = "37.309784";
  const LGNT = "126.997344";
  const url = `${process.env.API_BASE_URL}/go365-home/smart-tour/sun/v1/home/top10?LANG_ID=${language}&LTTD=${LTTD}&LGNT=${LGNT}`;
  const res = await fetch(url, { next: { revalidate: 10 } });

  return res.json();
};

const getSuwonNowInfo = async () => {
  const language = "1";
  const LTTD = "37.309784";
  const LGNT = "126.997344";
  const BGNG_DT = `${Number(new Date().getFullYear())}-${Number(
    new Date().getMonth() + 1
  )}-01`;
  const END_DT = `${Number(new Date().getFullYear())}-12-31`;

  const url = `${process.env.API_BASE_URL}/go365-home/smart-tour/sun/v1/home/suwon-now?LANG_ID=${language}&BGNG_DT=${BGNG_DT}&END_DT=${END_DT}&LTTD=${LTTD}&LGNT=${LGNT}`;
  const res = await fetch(url, { next: { revalidate: 10 } });

  return res.json();
};

export { getMainBanner, getCourses, getHotPlaceInfo, getSuwonNowInfo };
