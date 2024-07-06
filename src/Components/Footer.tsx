import { HTMLAttributes, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Divider from "./Divider";
import { UtensilsCrossed } from "lucide-react";
import User from "../assets/User";
import Heart from "../assets/Heart";
import AuthContext from "@/AuthProvider";
import { deleteCookie } from "@/Pages/auth/utils";

function Footer({ className }: HTMLAttributes<HTMLDivElement>) {
  const { setIsAuth, isAuth } = useContext(AuthContext);
  const [logedIn, setLogedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    setIsAuth({});
    navigate("/");
  };

  useEffect(() => {
    if (isAuth.accessToken) {
      setLogedIn(true);
    } else {
      setLogedIn(false);
    }
  }, [isAuth.accessToken]);

  return (
    <div className="sticky bottom-0 bg-white w-full mt-10 lg:mt-20">
      <Divider axis="horizontal" />
      <footer
        className={`container bg-white w-full border-gray-300 pb-4 
          mt-4 text-sm ${className}`}
      >
        {/* mobile */}
        <div className="sm:hidden flex justify-around items-center">
          <Link
            to="/"
            className="flex flex-col gap-y-2 items-center text-custom_primary_200"
          >
            <UtensilsCrossed className="stroke-custom_primary_200" />
            <p>Explore</p>
          </Link>
          {logedIn ? (
            <>
              <Link
                to="/placesreviewed"
                className="flex flex-col gap-y-2 items-center text-custom_primary_200"
              >
                <Heart className="fill-none stroke-custom_primary_200 stroke-[3px]" />
                <p>My Reviews</p>
              </Link>
              <span
                className="flex flex-col gap-y-2 items-center text-custom_primary_200"
                onClick={handleLogout}
              >
                <Heart className="fill-none stroke-custom_primary_200 stroke-[3px]" />
                <p>Log Out</p>
              </span>
            </>
          ) : (
            <Link
              to="/login"
              className="flex flex-col gap-y-2 items-center text-custom_primary_200"
            >
              <Avatar className="w-6 h-6">
                <AvatarImage src="" />
                <AvatarFallback>
                  <User className="fill-custom_primary_200" />
                </AvatarFallback>
              </Avatar>
              <p>Log In</p>
            </Link>
          )}
        </div>

        {/* large screens */}
        <div className="hidden sm:flex justify-between font-medium text-custom_primary_500">
          <div>
            <small>
              © 2023 cleanBites, Inc <span className="px-2">&#8226;</span>
            </small>
            <Link to="/">
              <small>Privacy</small>
            </Link>
            <span className="px-2">&#8226;</span>
            <Link to="/">
              <small>UK Food Safety Act 1990</small>
            </Link>
          </div>
          <div>
            <small>
              English (GB) <span className="px-2">&#8226;</span>
            </small>
            <Link to="/">
              <small>Github</small>
            </Link>
            <span className="px-2">&#8226;</span>
            <Link to="/">
              <small>Contact Me</small>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
