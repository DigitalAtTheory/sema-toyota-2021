import Image from "next/image";
import lockup from "../public/lockup-toyota.png";

export default function Lockup() {
  return (
    <div className="relative z-30 bg-black py-2 px-14">
      <div className="mx-auto text-center">
        <Image
          src={lockup}
          placeholder="blur"
          alt="Mobil 1 and Toyota logo"
          priority
          loading="eager"
        />
      </div>
    </div>
  );
}
