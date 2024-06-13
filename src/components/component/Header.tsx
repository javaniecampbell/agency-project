import * as React from "react";
import { Link } from "gatsby";
import { MountainIcon } from "./MountainIcon";

const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
      <Link className="flex items-center justify-center" to="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Your Business Agency</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#services"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#products"
        >
          Products
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#testimonials"
        >
          Testimonials
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#contact-us"
        >
          Contact
        </Link>
      </nav>
      <Link
        className="hidden ml-4 md:inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        to="#contact-us"
      >
        Get Started
      </Link>
    </header>
  );
};

export default Header;
