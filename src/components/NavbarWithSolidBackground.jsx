import { MagnifyingGlassIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import "./NavbarWithSolidBackground.css";

const navItems = [
  {
    id: "explore",
    label: "Explore",
    icon: MagnifyingGlassIcon,
    to: "/explore",
  },
  {
    id: "saved",
    label: "Saved",
    icon: HeartIcon,
    to: "/saved",
  },
  {
    id: "profile",
    label: "Profile",
    icon: UserIcon,
    to: "/profile",
  },
];

function NavbarWithSolidBackground() {
  return (
    <div className="pill-nav-wrapper">
      <nav className="pill-nav" aria-label="Primary navigation">
        {navItems.map(({ id, label, icon: Icon, to }) => (
          <NavLink
            key={id}
            to={to}
            className={({ isActive }) =>
              `pill-nav__item${isActive ? " pill-nav__item--active" : ""}`
            }
          >
            <Icon className="pill-nav__icon" aria-hidden="true" />
            <span className="pill-nav__label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default NavbarWithSolidBackground;
