"use client";
import React, { useEffect, useState } from "react";
import Banner from "@widgets/Home/Banner";
import Message from "@widgets/Home/Message";
import About from "@widgets/Home/About";
import Counter from "@widgets/Home/Counter";
import Wish from "@widgets/Home/Wish";
import Founder from "@widgets/Home/Founder";
import OurTeam from "./OurTeam";
import Secretary from "@widgets/Home/Secretary";
import PreLoader from "@components/PreLoader";
import Video from "./Videos";
import GalleryView from "./Gallery";
import Achievements from "@widgets/Home/Achievements";
import Testimonials from "@widgets/Home/Testimonials";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLoaded && <PreLoader />}
      <Banner />
      <Founder />
      <About />
      <Secretary />
      <OurTeam />
      <Message />
      <Counter />
      <Achievements />
      <Testimonials />
      <Video />
      <GalleryView />
      <Wish />
    </div>
  );
}
