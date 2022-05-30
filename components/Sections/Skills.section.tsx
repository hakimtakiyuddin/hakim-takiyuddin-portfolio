import { BsArrowRightShort } from "../Misc/Icons.collection";
import { DiCss3, DiHtml5, DiPhp } from "react-icons/di";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiLaravel, SiNestjs, SiNextdotjs, SiTypescript } from "react-icons/si";
import { RoughNotation } from "react-rough-notation";
import { Collapse, List, ListItem, ListItemButton } from "@mui/material";
import * as React from "react";
import { BsArrowDownShort } from "react-icons/bs";

const ProgrammingSkills = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="border-b-[0.1px] border-gray-500 ">
      <List>
        <ListItemButton onClick={handleClick}>
          <p className="flex cursor-pointer flex-row  items-center py-1 text-lg text-slate-300 duration-100 hover:ml-2">
            {open ? (
              <BsArrowDownShort size="30" />
            ) : (
              <BsArrowRightShort size="30" />
            )}
            <span className="text-white">Programming Language</span>
            <></>
          </p>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">HTML</span>
                <DiHtml5 />
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row  items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">CSS</span>
                <DiCss3 />
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row  items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">PHP</span>
                <DiPhp />
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row  items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">Javascript</span>
                <IoLogoJavascript />
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 pb-4 text-base text-slate-300 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">Typescript</span>
                <SiTypescript />
              </p>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

const Framework = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="border-b-[0.1px] border-gray-500 ">
      <List>
        <ListItemButton onClick={handleClick}>
          <p className="flex cursor-pointer flex-row  items-center py-1 text-lg text-slate-300 duration-100 hover:ml-2">
            {open ? (
              <BsArrowDownShort size="30" />
            ) : (
              <BsArrowRightShort size="30" />
            )}
            <span className="text-white">Framework</span>
            <></>
          </p>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">Laravel</span>
                <SiLaravel />
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">React</span>
                <IoLogoReact />
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">NestJS</span>
                <SiNestjs />
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 pb-4 text-base text-slate-300 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="pr-2 text-white">NextJs</span>
                <SiNextdotjs />
              </p>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

const CommunicationLanguage = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="border-b-[0.1px] border-gray-500 ">
      <List>
        <ListItemButton onClick={handleClick}>
          <p className="flex cursor-pointer flex-row  items-center py-1 text-lg text-slate-300 duration-100 hover:ml-2">
            {open ? (
              <BsArrowDownShort size="30" />
            ) : (
              <BsArrowRightShort size="30" />
            )}
            <span className="text-white">Communication Language</span>
            <></>
          </p>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 text-base text-slate-200 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="text-white">English </span> &nbsp;:
                Conversational & Professional
              </p>
            </ListItem>
            <ListItem>
              <p className="text-gray	flex cursor-pointer flex-row items-center py-1 text-base text-slate-300 duration-100 hover:ml-2">
                <BsArrowRightShort size="20" />
                <span className="text-white">Malay</span> &nbsp;: Native
              </p>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="my-5 px-3 font-sen text-white" id="skills">
        <h1 className="text-center text-5xl font-bold md:text-center md:text-6xl">
          Skills 🛠️
        </h1>
      <div className="text-md my-4 flex flex-col font-medium md:text-xl custom:text-lg">
        <ProgrammingSkills></ProgrammingSkills>
        <Framework></Framework>
        <CommunicationLanguage></CommunicationLanguage>
      </div>
    </div>
  );
};

export default Skills;
