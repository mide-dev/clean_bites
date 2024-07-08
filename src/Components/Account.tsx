import { HTMLAttributes, useContext, useEffect } from "react";
import Profile from "./Profile";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext, { AuthContextType } from "@/AuthProvider";
import { getCookie, deleteCookie } from "../Pages/auth/utils";
import { getCurrentUser, getNewAccessToken } from "@/constants/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function Account({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const { isAuth, setIsAuth }: AuthContextType =
    useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = getCookie("accessToken");
        const refreshToken = getCookie("refreshToken");

        if (accessToken && !isAuth!.accessToken) {
          const currentUser = await getCurrentUser(accessToken);
          if (currentUser.id) {
            setIsAuth!({ accessToken, refreshToken });
          } else {
            const getNewTokens = await getNewAccessToken(refreshToken!);
            if (getNewTokens.access) {
              const newAccessToken = getNewTokens.access;
              const newRefreshToken = getNewTokens.refresh;
              setIsAuth!({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              });
            }
          }
        }
      } catch (error) {
        console.error("Error during authentication:", error);
      }
    })();
  }, [isAuth, setIsAuth]);

  const handleLogout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    setIsAuth!({ accessToken: "", refreshToken: "" });
    navigate("/");
  };

  return (
    <div className={`hidden sm:flex ${className}`} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Profile />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-poppins w-56 mr-4 mt-2 hidden sm:block">
          <DropdownMenuGroup>
            {!isAuth?.accessToken ? (
              <>
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <NavLink to="login" className="w-full">
                    Log in
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <NavLink to="signup" className="w-full">
                    Sign up
                  </NavLink>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <NavLink to="placesreviewed" className="w-full">
                    Places Reviewed
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <span>Profile (work in progress)</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="py-2 cursor-pointer"
                >
                  <span>Log Out</span>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Account;
