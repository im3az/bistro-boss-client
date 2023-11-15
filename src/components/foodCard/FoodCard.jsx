import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // console.log(food.name, user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: " You are not logged in",
        text: "Please login to add to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 border-x-2 mt-10"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
