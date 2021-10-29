import Image from "next/image";
import confImage from "../public/toyota-confirmation-headline.png";

export default function ThankYouContent() {
  return (
    <div className="text-white text-center px-4 font-light mt-6">
      <Image
        src={confImage}
        placeholder="blur"
        loading="eager"
        priority
        alt="You're In on top of Toyota Sketch"
      />
      <p className="my-6">
        You came, you saw, and you conquered 2021. Prep for 2022 by snagging the
        SEMA Show-exclusive wallpaper below, and check out some of the content
        playing in the booth today with sound and without the distractions on
        the show floor.
      </p>
      <p>
        Thanks for being unconventional, and stay tuned for more exclusive
        content from us and our partners like Ryan Tuerck in the near future.
      </p>
    </div>
  );
}
