import Image from "next/image";

export default function ProductBlock() {
  return (
    <div>
      <hr className="text-white my-16 w-1/2 mx-auto" />
      <div className="text-center">
        <Image
          src="/bottle-toyota.png"
          width="1170px"
          height="868px"
          alt="Bottle of Mobil 1 oil"
        />
        <p className="text-white text-lg px-6 pt-6 font-light">
          {`There's no factory engine in the Formula Supra, just 10-cylinders of
          Le Mans-tested power. While the Judd V10 relies on Mobil 1 Racing
          0W-50, the factory GR Toyota Supra needs a street-ready product and
          the owner's manual calls for a 0W-20 to do the job.`}
        </p>
      </div>
      <hr className="text-white my-16 w-1/2 mx-auto" />
    </div>
  );
}
