import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";
import { RoughNotation } from "react-rough-notation";

const AboutHeaderComponent = () => {
  return (
    <div>
      <p className="text-xl font-bold text-black md:text-3xl">
        <RoughNotation
          type="highlight"
          show={true}
          animate={true}
          color="yellow"
          animationDuration={1000}
        >
          Hakim Takiyuddin
        </RoughNotation>
      </p>
      <p className="mt-1 text-base text-gray-300 md:text-lg">
        <RoughNotation
          type="underline"
          animate={true}
          show={true}
          animationDelay={1000}
        >
          Software Engineer 👨‍💻
        </RoughNotation>
      </p>
    </div>
  );
};

const AboutDetailsComponent = () => {
  return (
    <div className="container pr-10 text-sm md:text-base">
      <p className="mt-4 text-gray-400">
        An associate software engineer in Setel 🇲🇾 A long live student in a big
        tech world and looking forward for new opportunity and exiciting
        journey. Goes with a slogan <br />
        <RoughNotation
          type={"highlight"}
          animate={true}
          show={true}
          color="green"
          animationDuration={4000}
        >
          <span className="text-white">
            If you want to win the lottery you have to make the money to buy a
            ticket
          </span>
        </RoughNotation>
      </p>
    </div>
  );
};

const AboutSimplifiedComponent = () => {
  return (
    <div className="container flex-none pr-10 text-sm md:text-base">
      <RoughNotation
        type={"bracket"}
        brackets={["left", "right"]}
        animate={true}
        show={true}
        color="red"
        animationDelay={2000}
      >
        <p className="text-gray mt-4 text-slate-300">
          <span className="text-white">Name:</span>&nbsp; Abdullah Hakim
        </p>
        <p className="text-gray text-slate-300 ">
          <span className="text-white">Age:</span>&nbsp; 25 years old
        </p>
        <p className="text-gray text-slate-300 ">
          <span className="text-white">Email:</span>&nbsp;
          hakimtakiyuddin@gmail.com
        </p>
        <p className="text-gray text-slate-300 ">
          <span className="text-white">Address: </span>&nbsp; Kuala Lumpur,
          Malaysia 🇲🇾
        </p>
      </RoughNotation>
    </div>
  );
};

const AboutLinkComponent = () => {
  return (
    <div>
      <Link
        href="https://drive.google.com/file/d/1KeCz6CQYMX4T_Uo145iywCkm5qeaXs_z/view?usp=sharing"
        passHref
      >
        <a
          className="mt-6 flex cursor-pointer flex-row items-center gap-1 font-jost text-base text-gray-400 duration-100 hover:ml-2 md:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineArrowNarrowRight />
          Download my CV 📄
        </a>
      </Link>

      <Link href="https://www.buymeacoffee.com/hakimtakiyuddin" passHref>
        <a
          className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-base text-gray-400 duration-100 hover:ml-2 md:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineArrowNarrowRight />
          Buy me a coffee ☕
        </a>
      </Link>
    </div>
  );
};
const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <AboutHeaderComponent />
        <AboutDetailsComponent />
        <AboutSimplifiedComponent />
        <AboutLinkComponent />
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/hakim.jpeg"
          width="300"
          height="300"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
