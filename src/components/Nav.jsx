import { CiMenuFries } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import ThemeMode from "./ThemeMode";

export default function Nav() {
  const { authUser, logout } = useAuth();
  console.log(authUser);
  const handleLogoutUser = () => {
    logout();
  };
  return (
    <nav className="py-6 border-b sticky top-0 bg-white dark:bg-dark-color z-10">
      <div className="max-w-6xl mx-auto px-3 flex items-center">
        <div className="flex justify-between items-center flex-1 mr-4">
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
                  {!authUser && (
                    <>
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
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/">
              <h1 className="text-xl font-bold text-baseColor">Trip Trove</h1>
            </Link>
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
          {authUser ? (
            <div>
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src={authUser?.photoURL}
                    className="w-12 h-12 rounded-full object-cover border border-baseColor cursor-pointer"
                    alt=""
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <Button variant="outline" className="w-full">
                    {authUser?.displayName}
                  </Button>
                  <Button
                    onClick={() => handleLogoutUser()}
                    variant="outline"
                    className="w-full mt-2"
                  >
                    Logout
                  </Button>
                </HoverCardContent>
              </HoverCard>
            </div>
          ) : (
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
          )}
        </div>
        <div className="">
          <ThemeMode />
        </div>
      </div>
    </nav>
  );
}
