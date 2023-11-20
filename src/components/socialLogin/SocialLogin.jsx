import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // console.log(res);

        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data) {
            Swal.fire({
              title: "Logged in",
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
            });
            navigate(from, { replace: true });
          }

          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-8">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
