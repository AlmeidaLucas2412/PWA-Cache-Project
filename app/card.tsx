/* eslint-disable @next/next/no-img-element */
type Props = {
  image: string;
  title: string;
  price: string;
};
export const Card = ({ image, title, price }: Props) => {
  return (
    <div className="flex flex-col rounded-md bg-foreground text-background justify-center items-center text-center gap-y-6 p-2">
      <div className="flex w-full">
        <img
          src={image}
          alt={title}
          className="object-cover w-[500px] h-[250px] rounded-sm"
        />
      </div>
      <div className="flex flex-col pb-2">
        <span className="text-3xl font-semibold">{title}</span>
        <span className="text-xl">${price}</span>
      </div>
    </div>
  );
};
