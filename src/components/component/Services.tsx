import * as React from "react";

const Services: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="services"
    >
      <div className="container px-4 md:px-6 space-y-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a wide range of services to help your business succeed.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:max-w-none">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Strategy</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We help you develop a comprehensive business strategy to achieve
              your goals.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Marketing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our marketing experts will help you reach your target audience and
              drive growth.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Operations</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We optimize your business operations to improve efficiency and
              productivity.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Technology</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our tech experts will help you leverage the latest tools and
              technologies to drive innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;