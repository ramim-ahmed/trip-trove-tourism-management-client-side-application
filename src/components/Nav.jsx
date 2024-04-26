import { CiMenuFries } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="py-6 border-b">
      <div className="max-w-6xl mx-auto px-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 lg:space-x-0">
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <CiMenuFries className="w-6 h-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-baseColor border-b border-baseColor font-semibold"
                        : ""
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Home
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/all-tourists-spot"
                    className={({ isActive }) =>
                      isActive
                        ? "text-baseColor border-b border-baseColor font-semibold"
                        : ""
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      All Tourists Spot
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/my-lists"
                    className={({ isActive }) =>
                      isActive
                        ? "text-baseColor border-b border-baseColor font-semibold"
                        : ""
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      My Lists
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/add-tourist-spot"
                    className={({ isActive }) =>
                      isActive
                        ? "text-baseColor border-b border-baseColor font-semibold"
                        : ""
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Add Tourist Spot
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-baseColor border-b border-baseColor font-semibold"
                        : ""
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Contact
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-baseColor border-b border-baseColor font-semibold"
                        : ""
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Login
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "text-baseColor border-b border-baseColor font-semibold"
                        : ""
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Register
                    </DropdownMenuItem>
                  </NavLink>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <h1 className="text-xl font-bold text-baseColor">Trip Trove</h1>
            </div>
          </div>
          <div className="lg:flex hidden space-x-10 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-baseColor border-b border-baseColor font-semibold"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-tourists-spot"
              className={({ isActive }) =>
                isActive
                  ? "text-baseColor border-b border-baseColor font-semibold"
                  : ""
              }
            >
              All Tourists Spot
            </NavLink>
            <NavLink
              to="/add-tourist-spot"
              className={({ isActive }) =>
                isActive
                  ? "text-baseColor border-b border-baseColor font-semibold"
                  : ""
              }
            >
              Add Tourist Spot
            </NavLink>
            <NavLink
              to="/my-lists"
              className={({ isActive }) =>
                isActive
                  ? "text-baseColor border-b border-baseColor font-semibold"
                  : ""
              }
            >
              My Lists
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-baseColor border-b border-baseColor font-semibold"
                  : ""
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-baseColor border-b border-baseColor font-semibold"
                  : ""
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-baseColor border-b border-baseColor font-semibold"
                  : ""
              }
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
