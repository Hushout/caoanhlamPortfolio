import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'

const ProjectCards = () => {
    const projects = [
        {
            name: 'EatMusic',
            img: '/images/Project2.jpg',
            description: 'Eat-curious Clone personalized for my portfolio v2',
            link: 'https://eatmusic-hushouts-projects.vercel.app/'
        },
        {
            name: 'TokenMarkyt',
            img: '/images/Project3.jpg',
            description: 'A Simple Web Market to track your token and connect your wallet.',
            link: 'https://token-markyt.vercel.app/'
        },
        {
            name: 'HushPholio',
            img: '/images/Project4.jpg',
            description: 'I use WEB audio API and Threejs to create a music visualizer for my portfolio.',
            link: 'https://hushpholio.vercel.app/'
        },
        {
            name: 'BodyTracking',
            img: '/images/Project1.jpg',
            video: '/videos/bodytracking.mp4',
            description: 'I use Mediapipe AI from Google to track my body and animate it with ThreeJs.',
        },
    ]
    return (
        <div className='flex justify-center mt-4 w-[80%]'>
            <Carousel
                opts={{
                    align: "center",
                }}
                className="w-full p-4"
            >
                <CarouselContent >
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 cursor-pointer">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div>
                                        <Card className='md:h-[150px] h-[220px] overflow-hidden' link={project.link}>
                                            <CardContent className="relative flex shadow-xl items-start justify-center p-0 h-full group">
                                                <Image src={project.img} alt="projectPhoto" className='w-full h-full blur brightness-50 group-hover:brightness-100 absolute top-0 left-0 group-hover:blur-none transition-all' width={300} height={300} />
                                                <div className="z-10 p-4 group-hover:opacity-0 transition-opacity">
                                                    <h1 className="text-white font-bold text-2xl">{project.name}</h1>
                                                    <p className="text-slate-400">{project.description}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </DialogTrigger>
                                {
                                    !!project.video ? <DialogContent>
                                        <div className='p-4'>
                                            <video muted autoPlay loop >
                                                <source src={project.video} type="video/mp4" />
                                            </video>
                                        </div>
                                    </DialogContent>
                                        :
                                        null
                                }
                            </Dialog>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default function ProjectSection() {
    return (
        <section className='flex flex-col items-center justify-center w-full' id='ProjectsSection'>
            <h1 className="font-bold mb-2 text-3xl">
                Project
            </h1>
            <p>
                I like create application around my hobbies and for personal work optimization.
            </p>
            <ProjectCards />
        </section>
    )
}
