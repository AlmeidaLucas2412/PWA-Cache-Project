"use client";

import { Card } from "./card";
import { useEffect } from "react";
import { registerSW } from "@/lib/register-sw";

export default function Home() {
  useEffect(() => {
    registerSW();
  }, []);
  return (
    <section className="h-screen flex flex-col items-center p-8">
      <div className="flex flex-col gap-y-2 p-2 ">
        <Card image="/jeans.jpg" title="Black Jeans" price="39.99" />
        <Card image="/shirt.jpg" title="Off-White Shirt" price="19.99" />
        <Card image="/shoes.jpg" title="Running Shoes" price="69.99" />
      </div>
    </section>
  );
}
