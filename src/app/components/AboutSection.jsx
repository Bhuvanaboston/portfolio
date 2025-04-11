'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'programming',
    id: 'programming',
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: 'Technologies',
    id: 'technologies',
    content: (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>Redux</li>
        <li>Firebase</li>
        <li>SpringBoot</li>
        <li>REST API</li>
        <li>Git</li>
        <li>Tailwind CSS</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className=" pl-2">
        <li>B.Tech(CSE)</li>
        <li>VelTech University, Chennai</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('programming');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/projects/about-image.png"
          alt="desk-setup"
          loading="lazy"
          width="500"
          height="500"
          decoding="async"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi! I&apos;m Bhuvana, a passionate Software Developer with
            experience in React and a background in Java backend development
            using Spring Boot and REST APIs. I specialize in building scalable
            and user-friendly web applications, leveraging technologies like
            React, JavaScript, Redux, Firebase, and Material-UI on the frontend,
            while ensuring robust backend functionality with Java, Spring Boot,
            and REST APIs. Recently, I deployed my personal projects, including
            a Firebase-hosted application and an Image Generator App, which
            showcase my ability to create innovative and high-performance
            solutions. Beyond coding. I thrive on challenges, learning new
            technologies, and turning ideas into reality. Let&apos;s connect and
            build something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('programming')}
              active={tab === 'programming'}
            >
              {' '}
              Programming{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('technologies')}
              active={tab === 'technologies'}
            >
              {' '}
              Technologies{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {' '}
            {TAB_DATA.find((t) => t.id === tab).content}{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
