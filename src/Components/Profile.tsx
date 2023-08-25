// import { forwardRef } from "react";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User from "../assets/User";
import { Menu } from "lucide-react";

type ProfileProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Profile = forwardRef<HTMLButtonElement, ProfileProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`flex items-center gap-x-2 cursor-pointer py-2 px-2 rounded-full border-[1px] border-custom_primary_50 bg-white hover:drop-shadow focus:outline-0 duration-75 ${className}`}
        ref={ref}
        {...props}
      >
        <Menu size={20} color="#595959" />
        <Avatar className="w-6 h-6">
          <AvatarImage src="" />
          <AvatarFallback>
            <User className="fill-custom_primary_200" />
          </AvatarFallback>
        </Avatar>
      </button>
    );
  }
);

export default Profile;
