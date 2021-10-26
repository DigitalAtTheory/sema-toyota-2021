import Image from "next/image";

export default function Lockup() {
  return (
    <div className="relative z-30 bg-black py-2 px-14">
      <div className="mx-auto text-center">
        <Image
          src="/lockup-toyota.png"
          width="467px"
          height="86px"
          alt="Mobil 1 and Toyota logo"
          priority
          loading="eager"
        />
      </div>
    </div>
  );
}
