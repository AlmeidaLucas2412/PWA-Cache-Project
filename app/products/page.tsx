import { Header } from "@/components/layout/header";
import { Card } from "../card";

export default function Products() {
  return (
    <section>
      <section className="h-screen flex flex-col items-center p-8">
        <Header />
        <h2 className="text-4xl font-bold p-6">Our releases</h2>
        <div className="flex flex-col gap-y-2 p-2 ">
          <Card image="/beige-shirt.jpg" title="Beige Shirt" price="19.99" />
          <Card
            image="/white-shoes.jpg"
            title="White Casual Shoes"
            price="39.99"
          />
          <Card
            image="/black-shoes.jpg"
            title="Black Street Shoes"
            price="69.99"
          />
        </div>
      </section>
    </section>
  );
}
