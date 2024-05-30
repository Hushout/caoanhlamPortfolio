import { Button } from '@/components/ui/button'
import { FileDown } from "lucide-react"
import React from 'react'
import ContactButton from '../ContactButton'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className='flex items-center justify-between md:flex-row-reverse flex-col' style={{
            marginTop: '150px'
        }}>
            <Image src="/images/profile.jpg" alt="profilePicture" className='rounded-full mb-8' width={300} height={300} />
            <div className='md:w-2/3'>
                <span className="customFont">HEY,I’M
                    <span className="font-bold text-[#B451FC] text-2xl"> CAO ANH </span>
                    <br />
                    BUT YOU CAN CALL ME
                    <span className="font-bold dark:text-[#99fc51] text-[#6dd424] text-2xl"> LAM </span></span>
                <br />
                <div className="my-4">
                    💻 I'm a fullstack Developer, I love to code and create new things on ReactJs and NodeJs.
                </div>
                <div className='w-full flex justify-start mt-4'>
                    <ContactButton />
                    <Button className='ml-2' variant="outline" asChild>
                        <a href="/CVCAO ANH CV.pdf" target="_blank">
                            Download my CV
                            <FileDown className="h-[1.2rem] w-[1.2rem] ml-2" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
