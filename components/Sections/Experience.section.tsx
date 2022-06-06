import type { NextComponentType } from "next";

const Experience: NextComponentType = () => {
  const data = {
    experience: [
      {
        title: "Associate Software Engineer",
        company: "Setel Ventures Sdn Bhd",
        year: "2022",
        companyLink: "https://setel.com",
        desc: "Under Acquiring Team in handling the payment site of user to channel which transaction will go for each type of transaction and bank.",
        skills: "NextJS, ReactJS, Javascript, Typescript, Jest, AWS",
      },
      {
        title: "Fullstack Engineer Intern",
        company: "Setel Ventures Sdn Bhd",
        year: "2021",
        companyLink: "https://setel.com",
        desc: "Under supervision in Ordering Team where delivers and maintain one of Setel application feature famously known as Deliver2Me. Managed to contribute merge request almost every week with Scrum Agile Software Development implemented in the team work around.",
        skills: "NextJS, ReactJS, Javascript, Typescript, Jest, AWS",
      },
      {
        title: "Data Entry Operator",
        company: "Team Selangor",
        year: "2020",
        companyLink: "https://teamselangor.org/",
        desc: "Analyzed data of registered volunteers and participants of the programs held by Team Selangor. Managed users data through maintaining the reliability of our relationship with the users data through call centre.",
        skills: "Microsoft Excel, Communication",
      },
      {
        title: "Part time Team Leader",
        company: "Boost Juice Bars",
        year: "2019",
        companyLink: "https://www.boostjuicebars.com.my/",
        desc: "Coordinating with other staff on roasters and shift to avoid any misunderstanding and maintaining good relationship between other staff.",
        skills: "Management, Communication, Customer Obsession, Healthy Drinks",
      },
      {
        title: "Technical Assistant Intern",
        company: "Teralogic Solutions",
        year: "2018",
        companyLink: "https://www.teralogic.com.my/",
        desc: "Assisting in building and installation of network at site such as Access Point and Switch while involving with the User Acceptance Test (UAT) after the installation is done.",
        skills: "Switching and Routing, Adobe Photoshop, Cisco CLI",
      },
    ],
  };

  return (
    <section>
      <div className="my-16 px-3 font-sen text-white" id="experience">
        <h1 className="text-center text-4xl font-bold md:text-center md:text-6xl">
          Experience 👔
        </h1>
        <div className="-mt-4 ">
          <div className="mx-auto grid max-w-xl grid-cols-1 pt-20 ">
            {/* Experience card */}
            {data.experience.map((exp, idx) => (
              <>
                <ExperienceCard
                  key={idx}
                  title={exp.title}
                  desc={exp.desc}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                  skills={exp.skills}
                />
                {idx === data.experience.length - 1 ? null : (
                  <div className="divider-container -mt-2 flex flex-col items-center">
                    <div className="relative z-10 h-4 w-4 rounded-full bg-green-500">
                      <div className="relative z-10 h-4 w-4 animate-ping rounded-full bg-green-500"></div>
                    </div>
                    <div className="-mt-2 h-24 w-1 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
  skills,
}) => {
  return (
    <div className="experience-card relative z-10 mx-4 rounded-md border bg-gray-800 p-4 shadow-xl">
      <h1 className="text-grey-500 absolute -top-10 text-4xl font-bold md:-left-10 md:-top-10">
        {year}
      </h1>
      <h1 className="text-xl font-semibold">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="my-2 text-gray-400">{desc}</p>
      <p className="text-gray text-base text-slate-300 ">
        <span className="text-white">Skills:</span>&nbsp;
        {skills}
      </p>
    </div>
  );
};

export default Experience;
