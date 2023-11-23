import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [carts] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() =>
        Swal.fire({
          title: "logged out",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <>
      <li>
        <Link className="btn btn-ghost" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="menu">
          Menu
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="order/salad">
          Order Food
        </Link>
      </li>

      {user && isAdmin && (
        <li>
          <Link className="btn btn-ghost" to="/dashboard/adminHome">
            Dashboard
          </Link>
        </li>
      )}

      {user && !isAdmin && (
        <li>
          <Link className="btn btn-ghost" to="/dashboard/userHome">
            Dashboard
          </Link>
        </li>
      )}

      <li>
        <Link className="btn btn-ghost" to="/dashboard/cart">
          <FaShoppingCart />
          <div className="badge badge-secondary">+{carts.length}</div>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="btn btn-ghost" to="login">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
