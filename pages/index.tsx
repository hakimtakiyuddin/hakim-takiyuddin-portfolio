import type { NextPage } from "next";

import {
  Header,
  About,
  Skills,
  Contact,
  NowPlaying,
  Education,
  Experience,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Contact />

      <div className="flex justify-center">
        <NowPlaying />
      </div>
    </div>
  );
};

export default Home;
