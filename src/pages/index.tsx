import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Landing } from "@/components/component/landing";
import { Toaster } from "@/components/ui/toaster";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Landing />
      <Toaster />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
