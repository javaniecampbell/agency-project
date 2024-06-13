/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mSuUJgN1a5l
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Rubik } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import * as React from "react";
import { Link } from "gatsby";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StaticImage } from "gatsby-plugin-image";
import { MountainIcon } from "./MountainIcon";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
