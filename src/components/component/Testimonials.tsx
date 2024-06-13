import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StaticImage } from "gatsby-plugin-image";

const Testimonials: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="testimonials"
    >
      <div className="container px-4 md:px-6 space-y-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from our satisfied clients about their experience with our
              services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:max-w-none">
          <div className="grid gap-4 bg-white h-full w-full">
            <div className="rounded-md border border-gray-200 p-4 shadow-sm dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Working with Your Business Agency has been a game-changer&#13;
                for our company. Their expertise and innovative solutions&#13;
                have helped us achieve our goals.
                <br />
                <br />
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <Avatar>
                  <AvatarImage>
                    <StaticImage
                      src="https://ncbinnovation.blob.core.windows.net/static-cdn/images/placeholder-avatar.jpg"
                      alt="Avatar"
                    />
                  </AvatarImage>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="place-items-end">
                  <h4 className="text-sm font-medium">John Doe</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CEO, Acme Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 bg-white h-full w-full">
            <div className="rounded-md border border-gray-200 p-4 shadow-sm dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                I highly recommend Your Business Agency to any company&#13;
                looking to take their business to the next level. Their&#13;
                team is knowledgeable, responsive, and truly cares about&#13;
                our success.
                <br />
                <br />
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <Avatar>
                  <AvatarImage>
                    <StaticImage
                      src="https://ncbinnovation.blob.core.windows.net/static-cdn/images/placeholder-avatar.jpg"
                      alt="Avatar"
                    />
                  </AvatarImage>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="place-items-end">
                  <h4 className="text-sm font-medium">Jane Doe</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    COO, Globex Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 bg-white h-full w-full">
            <div className="rounded-md border border-gray-200 p-4 shadow-sm dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The team at Your Business Agency has been instrumental in&#13;
                helping us navigate the challenges of our industry. Their&#13;
                strategic guidance and innovative solutions have been&#13;
                invaluable.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <Avatar>
                  <AvatarImage>
                    <StaticImage
                      src="https://ncbinnovation.blob.core.windows.net/static-cdn/images/placeholder-avatar.jpg"
                      alt="Avatar"
                    />
                  </AvatarImage>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="place-items-end">
                  <h4 className="text-sm font-medium">John Smith</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CFO, Stark Industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
