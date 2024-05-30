"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { AtSign, Mail, MessageCircle, User } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"
import sendDiscordMessage from "@/lib/discord"
import ContactSection from "./contents/ContactSection"

const FormSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

type FormFields = {
    name: "email" | "name" | "message",
    label: string,
    icon: JSX.Element,
    placeholder: string,
    description: string,
    component: React.ElementType,
}

const formFields: FormFields[] = [
    {
        name: "email",
        label: "Email",
        icon: <AtSign className="pr-2" />,
        placeholder: "username@mail.com",
        description: "Your email will only display on my discord server.",
        component: Input,
    },
    {
        name: "name",
        label: "Name",
        icon: <User className="pr-2" />,
        placeholder: "Your Name",
        description: "Tell me your name so I can address you properly.",
        component: Input,
    },
    {
        name: "message",
        label: "Message",
        icon: <MessageCircle className="pr-2" />,
        placeholder: "Tell us a little bit about yourself",
        description: "What do you want to talk to me about?",
        component: Textarea,
    },
]

export default function ContactButton() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            name: "",
            message: "",
        },
    })

    async function onSubmit({ email, name, message }: z.infer<typeof FormSchema>) {
        try {
            await sendDiscordMessage(name, email, message);
            toast({
                title: "Success",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            💌 Message sent successfully!
                        </code>
                    </pre>
                ),
            });
        } catch (error) {
            const errorMessage = (error as Error).message;
            toast({
                title: "Error",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            🚨 Failed to send message: {errorMessage}
                        </code>
                    </pre>
                ),
            });
        }
    }

    if (!isClient) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline">
                    Contact Me<Mail className="h-[1.2rem] w-[1.2rem] ml-2" />
                </Button>
            </SheetTrigger>
            <SheetContent >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {formFields.map(({ name, label, icon, placeholder, description, component: Component }) => (
                            <FormField
                                key={name}
                                control={form.control}
                                name={name}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex flex-row items-center">
                                            {icon}
                                            {label}
                                        </FormLabel>
                                        <FormControl>
                                            <Component placeholder={placeholder} {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            {description}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                <div className="my-4">
                    Or
                </div>
                <ContactSection hideDescription/>
            </SheetContent>
        </Sheet>
    )
}
