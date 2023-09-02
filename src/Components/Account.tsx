import { HTMLAttributes } from "react";
import Profile from "./Profile";
import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Account({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`hidden md:flex ${className}`} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Profile />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-poppins w-56 mr-4 mt-2 hidden md:block">
          <DropdownMenuGroup>
            <DropdownMenuItem className="py-2 cursor-pointer">
              <span>Log in</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2 cursor-pointer">
              <span>Sign up</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem className="py-2 cursor-pointer">
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 cursor-pointer custom_primary_50">
            <span>Contact Me</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Bypass Login</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Account;
