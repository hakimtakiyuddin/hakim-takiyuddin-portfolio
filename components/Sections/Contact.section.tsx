import type { NextComponentType } from "next";
import { BsSpotify, MdEmail, AiOutlineGithub } from "../Misc/Icons.collection";
import { Icon } from "../Misc/Icon.component";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-center text-4xl font-bold text-white md:text-6xl">
        Contact 👥
      </p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon
          icon={<AiOutlineGithub />}
          url="https://github.com/hakimtakiyuddin"
        />

        <Icon
          icon={<AiOutlineLinkedin />}
          url="https://www.linkedin.com/in/hakimtakiyuddin/"
        />

        <Icon icon={<MdEmail />} url="mailto:hakimtakiyuddin@gmail.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/hakimtakiyuddin"
        />
      </div>
    </div>
  );
};

export default Contact;
