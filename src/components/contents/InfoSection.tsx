import Image from 'next/image'
import React from 'react'

export default function InfoSection() {
    return (
        <section className='flex items-center justify-between'>
            <Image src="/images/hiEmoji.png" alt="hiemoji" className='rounded-b-full hidden md:block' width={200}
                height={200} />
            <div>
                <h1 className="font-bold mb-2 text-3xl">
                    About
                </h1>
                <div className="p-4">
                    <p>
                        As a full-stack engineer and developer trained at Epitech Montpellier, I offer my skills to design robust, high-performance, and high-quality web applications. With many years of experience in full-stack development, I have collaborated with teams of 2 to 5 developers on significant projects.
                    </p>
                    <br />
                    <p>
                        I specialize in developing React applications with TypeScript. I have a solid understanding of React fundamentals such as components, state, and hooks. I am also familiar with popular React tools and libraries such as Redux, ShadUI, and TypeScript.
                    </p>
                </div>
            </div>
        </section>
    )
}
