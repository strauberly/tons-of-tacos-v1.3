"use client";

import { useGlobalContext } from "@/context/store";
import React from "react";
import MenuIcon from "./menu-icon";

export default function MenuButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showMenu, setShowMenu } = useGlobalContext();
  return (
    <button onMouseEnter={() => [setShowMenu(!showMenu), console.log("hi")]}>
      {children}
    </button>
  );
}
