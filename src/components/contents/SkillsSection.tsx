import React from 'react'
import { Card } from '../ui/card'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { Bot, User } from 'lucide-react';
import Image from 'next/image';
import ReactIconAnimation from '../ReactIconAnimation';

const SkillsDisplay = () => {

    const skills = [
        {
            name: 'React',
            icon: <FaReact />,
            description: 'I am an "expert" in React libarary and I can create whatever you want wit this.'
        },
        {
            name: 'TailwindCSS',
            img: '/images/tailwindcss.png',
            icon: <RiTailwindCssFill />,
            description: 'I starting to use TailwindCSS and I think it\'s the best tool for CSS.'
        },
        {
            name: 'TypeScript is my 2n',
            img: '/images/TypescriptIcon.png',
            icon: <SiTypescript />,
            description: 'I really like TypeScript and I use it in all my projects.'
        },
    ]
    return (
        <div className='flex flex-col justify-center mt-4 md:w-[120%]'>
            <div className='flex md:flex-row flex-col'>
                {skills.map((skill, index) => (
                    <Card key={index} className='md:w-1/3 m-2'>
                        <div className="p-4">
                            <div className="flex flex-col items-center">
                                <div className="mx-4 mb-8">
                                    {!!skill.img ? <Image src={skill.img} alt={skill.name} className='w-full object-cover rounded-lg h-[100px]' width={300} height={300} /> : <ReactIconAnimation />}
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="">
                                        {skill.icon}
                                    </div>
                                    <span className="font-semibold text-lg mt-2">{skill.name}</span>
                                    <p className='dark:text-slate-400'>{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className='flex md:flex-row flex-col'>
                <Card className='grow md:w-2/3 m-2'>
                    <div className="p-4">
                        <div className="flex flex-col items-center">
                            <div className="m-4 flex flex-row w-2/3 items-center justify-center *:mx-4">
                                <Image src='/images/aws.png' alt="VercelImg" className='md:h-[80px] md:w-[100px] h-[30px] w-[50px]' width={100} height={100} />
                                <Image src='/images/MongoDB.png' alt="MongoDBicon" className='md:h-[80px] md:w-[100px] h-[30px] w-[50px]' width={100} height={100} />
                                <div className='flex flex-col items-center'>
                                    <IoLogoVercel className='md:text-[70px] text-[30px]' />
                                    <h1>Vercel</h1>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="">
                                    <SiNextdotjs />
                                </div>
                                <span className="font-semibold text-lg mt-2">Backend with Next.JS and build tools</span>
                                <p className='dark:text-slate-400'>I have a complete knowledge of Next.JS and many other tools that enable you to create whatever you want.</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className='md:w-1/3 m-2'>
                    <div className="p-4">
                        <div className="flex flex-col justify-start">
                            <div className="h-[130px] flex flex-col justify-evenly">
                                <div className='flex flex-row'>
                                    <User />
                                    <p className='ml-2'>user</p>
                                </div>
                                <p className='dark:text-slate-400'>Can you create a website ?</p>
                                <div className='flex flex-row'>
                                    <Bot />
                                    <p className='ml-2'>assistant</p>
                                </div>
                                <p className='dark:text-slate-400'>Yes, just contact me.</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <span className="font-semibold text-lg mt-2">Perfect usage of AI</span>
                                <p className='dark:text-slate-400'>I have created several applications using AI tools.</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default function SkillsSection() {
    return (
        <section className='flex md:flex-row flex-col md:w-4/5' id='SkillsSection'>
            <div className='w-full flex flex-col items-center'>
                <h1 className="font-bold mb-2 text-3xl">
                    How I can help you ?
                </h1>
                <p>
                    I can create perfect experiences for your customer, making all the applications from scratch.
                </p>
                <SkillsDisplay />
            </div>
        </section>
    )
}
