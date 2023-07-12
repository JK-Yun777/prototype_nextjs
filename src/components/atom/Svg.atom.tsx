"use client";

import Link from "next/link";

type SvgPrps = {
  chidren?: React.ReactNode;
  url?: string;
  onClick?: () => void;
};

const SvgAtom = ({ chidren, url = "#", onClick }: SvgPrps) => {
  return (
    <Link href={url} onClick={onClick}>
      {chidren}
    </Link>
  );
};

export default SvgAtom;
