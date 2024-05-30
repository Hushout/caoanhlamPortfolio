'use client'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import { useMediaQuery } from "@/hooks/use-media-query"
import { ModeToggle } from './ui/ModeToggle'
import { Button } from './ui/button'
import ContactButton from './ContactButton'

const MenuContent = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <Button variant="ghost" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>Home</Button>
            <Button variant="ghost" onClick={() => {
                document.getElementById('ProjectsSection')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }}>projects</Button>
            <Button variant="ghost" onClick={() => {
                document.getElementById('SkillsSection')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }}
                className='mr-2'
            >skills</Button>
            <ContactButton />
        </div>
    )
}

const MenuSide = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    if (isDesktop) {
        return (
            <div className="mr-2">
                <MenuContent />
            </div>
        )
    }
    return (
        <div className='mr-2'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost"><Menu /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2">
                    <MenuContent />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default function NavBar() {
    return (
        <header className='fixed bg-fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md' style={{
            height: '80px',
        }}>
            <div className="w-full flex justify-between items-center p-8 top-0 shadow">
                <a href="mailto:caoanhlamvn@gmail.com">caoanhlamvn@gmail.com</a>
                <div className='flex flex-row'>
                    <MenuSide />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
