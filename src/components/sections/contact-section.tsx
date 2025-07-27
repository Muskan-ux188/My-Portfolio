"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Github, Linkedin, Mail } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Card } from "../ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 sm:py-32 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Get in Touch</h2>
          <p className="mt-4 text-lg text-white/80">I'm always open to discussing new projects or opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-headline">Contact Information</h3>
            <p className="text-white/80">Feel free to reach out to me through any of the following channels. I look forward to hearing from you!</p>
            <div className="space-y-4">
              <Link href="mailto:johndoe@example.com" className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-lg group-hover:text-primary transition-colors">mk5957968@gmail.com</span>
              </Link>
              <Link href="#" className="flex items-center gap-4 group">
                <Linkedin className="w-6 h-6 text-primary" />
                <span className="text-lg group-hover:text-primary transition-colors">https://www.linkedin.com/in/muskan-kumari-497351285/</span>
              </Link>
              <Link href="#" className="flex items-center gap-4 group">
                <Github className="w-6 h-6 text-primary" />
                <span className="text-lg group-hover:text-primary transition-colors">https://github.com/Muskan-ux188</span>
              </Link>
            </div>
          </div>
          <Card className="p-6 sm:p-8 bg-transparent border-white/10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/20 placeholder:text-white/60" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} className="bg-white/5 border-white/20 placeholder:text-white/60" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your Message" rows={6} {...field} className="bg-white/5 border-white/20 placeholder:text-white/60" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}
