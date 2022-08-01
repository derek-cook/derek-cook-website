import type { NextPage } from 'next';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import ExternalLinkIcon from '@heroicons/react/outline/ExternalLinkIcon';

import GithubIcon from '../../public/github.svg';
import LinkedInIcon from '../../public/linkedin.svg';
import EmailIcon from '../../public/mail.svg';
import nutritionLabelImage from '../../public/NutritionistLogo512V2.jpg';
import coinsImage from '../../public/coins.png';
import ChatSS from '../../public/chat-screenshot.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Derek Cook</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3 md:p-6 text-gray-800">
        <div className="flex border-b pb-3 mb-3 justify-between items-center">
          <div id="headline" className=" bg-white flex flex-col">
            <h1 className="text-xl md:text-5xl font-thin">Derek Cook</h1>
            <h2 className="text-xs md:text-lg text-gray-600">
              Software Engineer
            </h2>
          </div>
          <div id="links" className="flex space-x-3 ">
            <a href="https://github.com/derek-cook">
              <Image src={GithubIcon} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/derekcook33/">
              <Image src={LinkedInIcon} alt="linkedin" />
            </a>
            <a href="mailto:derek.cook@hey.com?subject=April202:&body=(Leave 'April202' in the subject line to bypass my screener)">
              <Image src={EmailIcon} alt="email" />
            </a>
          </div>
        </div>
        <div
          id="projects"
          className="flex flex-col md:flex-row justify-evenly items-center md:items-stretch"
        >
          <ProjectCard
            title="Nutrition Label (2018)"
            description="Ask Alexa for the nutrition facts on almost anything. Built with Lambda, Node, and Wolfram Alpha API. Published on the Alexa Skill Store."
            src={nutritionLabelImage}
            href="https://www.amazon.com/Derek-Cook-Nutrition-Label/dp/B06X9G98GB"
          />
          <ProjectCard
            title="Coins (2017)"
            description="My first shipped project, built with React. Search and track hundreds of cryptocurrencies. (Decommissioned)"
            src={coinsImage}
            href="https://coins-app.netlify.app/"
          />
          <ProjectCard
            title="Full Stack Chat (2022)"
            description="(In progress) A simple chat demo. Built with Next (React), Tailwind, tRPC, Prisma, Postgres, Clerk, and Typescript. Try creating a new conversation, add me by username, 'derek' and say hello. This instance's database will be periodically wiped."
            src={ChatSS}
            href="https://sage-t3-chat.vercel.app/"
          />
        </div>
        <div className="flex justify-center p-3">
          <button className="rounded-md bg-gray-600 font-light py-2 px-3 hover:bg-gray-500 flex-grow md:flex-grow-0 items-center text-gray-50">
            <a
              href="https://drive.google.com/file/d/1p3tfwuQyA-5HOXz4exO7czysAWsAoVUJ/view?usp=sharing"
              className="flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
            >
              Resume{' '}
              <ExternalLinkIcon
                aria-label="external link"
                className="ml-2 inline w-4 h-4"
              />
            </a>
          </button>
        </div>
      </main>
    </>
  );
};

type ProjectCardProps = {
  title: string;
  description: string;
  src?: StaticImageData;
  href: string;
};

const ProjectCard = ({ title, description, src, href }: ProjectCardProps) => (
  <div className="rounded-lg shadow-sm border flex flex-col bg-white overflow-hidden m-5 w-full md:w-80">
    <div className="aspect-square relative">
      {src ? (
        <Image
          alt="project picture"
          src={src}
          layout="fill"
          objectFit="cover"
        />
      ) : null}
    </div>
    <div className="p-3 border-t">
      <a
        href={href}
        aria-describedby="projectId"
        target="_blank"
        rel="noreferrer"
        className="hover:decoration-gray-500"
      >
        <h3 id="projectId" className="font-semibold text-sm mb-2">
          {title}
        </h3>
      </a>
      <p className="text-xs text-gray-500 ">{description}</p>
    </div>
  </div>
);

export default Home;
