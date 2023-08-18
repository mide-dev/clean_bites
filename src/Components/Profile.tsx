// import { forwardRef } from "react";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "../assets/profile.svg";
import hamburger from "../assets/hamburger.svg";

type ProfileProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Profile = forwardRef<HTMLButtonElement, ProfileProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`flex items-center gap-x-2 cursor-pointer py-2 px-2 rounded-full border-[1px] border-custom_primary_100 ${className}`}
        ref={ref}
        {...props}
      >
        <img src={hamburger} alt="menu" className="w-5" />
        <Avatar className="w-6 h-6">
          <AvatarImage src="" />
          <AvatarFallback>
            <img src={profile} alt="account" className="w-full" />
          </AvatarFallback>
        </Avatar>
      </button>
    );
  }
);

export default Profile;
