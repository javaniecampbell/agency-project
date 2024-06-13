import * as React from "react";

const Products: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="products">
      <div className="container px-4 md:px-6 space-y-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Products
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out our innovative products that can help transform your
              business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:max-w-none">
          <div className="grid gap-1">
            <img
              alt="Product 1"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="200"
              src="https://ncbinnovation.blob.core.windows.net/static-cdn/images/placeholder.svg"
              width="300"
            />
            <h3 className="text-lg font-bold">Product 1</h3>
          </div>
          <div className="grid gap-1">
            <img
              alt="Product 2"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="200"
              src="https://ncbinnovation.blob.core.windows.net/static-cdn/images/placeholder.svg"
              width="300"
            />
            <h3 className="text-lg font-bold">Product 2</h3>
          </div>
          <div className="grid gap-1">
            <img
              alt="Product 3"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="200"
              src="https://ncbinnovation.blob.core.windows.net/static-cdn/images/placeholder.svg"
              width="300"
            />
            <h3 className="text-lg font-bold">Product 3</h3>
          </div>
          <div className="grid gap-1">
            <img
              alt="Product 4"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="200"
              src="https://ncbinnovation.blob.core.windows.net/static-cdn/images/placeholder.svg"
              width="300"
            />
            <h3 className="text-lg font-bold">Product 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;