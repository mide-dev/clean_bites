import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UtensilsCrossed } from "lucide-react";
import User from "@/assets/User";
import Heart from "@/assets/Heart";

function Footer({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <footer
        className={`fixed bottom-0 container bg-white border-t w-full border-gray-300 py-4 
          mt-4 text-sm ${className}`}
      >
        {/* mobile */}
        <div className="sm:hidden flex justify-between items-center">
          <div className="flex flex-col gap-y-2 items-center text-custom_primary_200">
            <UtensilsCrossed className="stroke-custom_primary_200" />
            <p>Explore</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center text-custom_primary_200">
            <Heart className="fill-none stroke-custom_primary_200 stroke-[3px]" />
            <p>Favorites</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center text-custom_primary_200">
            <Avatar className="w-6 h-6">
              <AvatarImage src="" />
              <AvatarFallback>
                <User className="fill-custom_primary_200" />
              </AvatarFallback>
            </Avatar>
            <p>Login</p>
          </div>
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
    </>
  );
}

export default Footer;
