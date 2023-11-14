const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card w-full rounded-none bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-2 top-2 p-2 rounded bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions ">
          <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 border-x-2 mt-10">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
