const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-4 ">
      <img className="w-[70px]  object-cover rounded-r-full rounded-bl-full" src={image} alt="" />
      <div>
        <h3 className="uppercase text-lg">{name}-----------</h3>
        <p className="text-sm">{recipe}</p>
      </div>
      <p className="text-yellow-500 ">${price}</p>
    </div>
  );
};

export default MenuItem;
