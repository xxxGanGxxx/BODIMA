import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 flex flex-col gap-2 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {[
        { label: "Pages", href: "#pages" },
        { label: "Account", href: "#account" },
        { label: "Blocks", href: "#blocks" },
        { label: "Docs", href: "#docs" },
      ].map((item) => (
        <Typography
          key={item.label}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href={item.href} className="flex items-center hover:text-blue-500">
            {item.label}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl rounded-none border-b border-blue-gray-50 bg-white px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-semibold">
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Sign In
          </Button>
          <Button variant="gradient" size="sm">
            Get Started
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-2 inline-flex items-center justify-center lg:hidden"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="mt-4 flex flex-col gap-4">
          {navList}
          <Button variant="gradient" size="sm">
            Get Started
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
