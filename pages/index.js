import { useState } from "react";
import Head from "next/head";
import HeroContent from "../components/HeroContent";
import Lockup from "../components/Lockup";
import ProductBlock from "../components/ProductBlock";
import SignUpBlock from "../components/SignUpBlock";
import VideoBackground from "../components/VideoBackground";
import Footer from "../components/Footer";
import Form from "../components/Form/Form";
import PlayVideo from "../components/PlayVideo";
import BuildContent from "../components/BuildContent";

export default function Home() {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  const handleDonePlaying = () => {
    setPlayVideo(false);
  };

  return (
    <>
      <Head>
        <title>Toyota - Unconventionally Driven</title>
      </Head>
      {playVideo && <PlayVideo handleDonePlaying={handleDonePlaying} />}
      <VideoBackground videoPath="/TUERCK_FS_M1_SEMA_VER1_1.mp4">
        <Lockup />
        <HeroContent handlePlayVideo={handlePlayVideo} />
      </VideoBackground>
      <div className="max-w-4xl mx-auto md:px-12 lg:px-24">
        <SignUpBlock />
        <ProductBlock />
        <BuildContent />
        <Form />
      </div>
      <Footer />
    </>
  );
}
