import { Github, Linkedin } from 'lucide-react'
import React, { FC } from 'react'
import { SiMalt } from 'react-icons/si'
interface ContactSectionProps {
    hideDescription?: boolean;
}

const ContactSection: FC<ContactSectionProps> = ({ hideDescription = false }) => {
    const links = [
        {
            href: 'https://www.linkedin.com/in/anh-cao-79a7071b4/',
            icon: Linkedin,
            color: '#0e76a8'
        },
        {
            href: 'https://github.com/Hushout',
            icon: Github,
            color: '#000'
        },
        {
            href: 'https://www.malt.fr/profile/anhcao2',
            icon: SiMalt,
            color: '#E02D2D'
        }
    ]
    return (
        <section className='flex md:flex-row flex-col md:w-4/5 items-center'>
            <div className='w-full'>
                <div>
                    <h1 className="font-bold mb-2 text-3xl">
                        Contact me
                    </h1>
                    <p className={`${hideDescription ? 'hidden' : ''}`}>
                        I am available for freelance work and job opportunities. Connect with me via my social media or email.
                    </p>
                </div>
                <div className="flex flex-row items-center *:mx-2 mt-2 flex-wrap">
                    <div className={`flex flex-row flex-wrap ${hideDescription ? 'hidden' : ''}`}>
                        {links.map((link, index) => (
                            <a key={index} href={link.href} target='_blank' rel='noreferrer' className='mx-2'>
                                <link.icon size={32} color={link.color} />
                            </a>
                        ))}
                    </div>
                    <a href="mailto:caoanhlamvn@gmail.com" className='underline'>caoanhlamvn@gmail.com</a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;