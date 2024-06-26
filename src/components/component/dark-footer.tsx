/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7sqXql7p0G1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import * as React from "react";
import { Link } from "gatsby";
import { SVGProps } from "react";

export function DarkFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-6">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-gray-200">Acme Inc.</h3>
            <p className="text-sm">123 Main St, Anytown USA</p>
            <p className="text-sm">info@acme.com</p>
          </div>
          <div className="flex gap-4 text-gray-400 hover:text-gray-200 transition-colors">
            <Link aria-label="Facebook" to="#">
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link aria-label="Twitter" to="#">
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link aria-label="LinkedIn" to="#">
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <p className="text-sm mt-4 md:mt-0">
          © 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
