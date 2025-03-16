"use-client";
import React, { PropsWithChildren } from "react";
import { Header } from "../Header";

interface ILayout extends PropsWithChildren<{}> {
  title: string;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      {children}
    </div>
  );
};
