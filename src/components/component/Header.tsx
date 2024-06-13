import * as React from "react";
import { Link } from 'gatsby';
import { MountainIcon } from './MountainIcon';

const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
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
    </header>
  );
};

export default Header;