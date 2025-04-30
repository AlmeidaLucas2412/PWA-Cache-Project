"use client";

import { useEffect } from "react";
import { registerSW } from "../lib/register-sw";

export const RegisterServiceWorker = () => {
  useEffect(() => {
    registerSW();
  }, []);
  return <></>;
};
