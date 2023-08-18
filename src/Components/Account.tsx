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

function Account() {
  return (
    <div className="hidden md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Profile />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-4 mt-2 hidden md:block">
          <DropdownMenuGroup>
            <DropdownMenuItem className="py-2">
              <span>Log in</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2">
              <span>Sign up</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem className="py-2">
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2">
            <span>Contact Me</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Bypass Login</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Account;
