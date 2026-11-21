import { useEffect, useId, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Blog", href: "#blog" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleBreakpointChange = (): void => {
      if (mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [isMenuOpen]);

  return (
    <nav aria-label="Main navigation">
      {/* Desktop navigation */}
      <ul className="hidden items-center gap-[28px] lg:flex">
        {navItems.map(({ label, href, isActive }) => (
          <li key={label}>
            <a
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`
                whitespace-nowrap text-[14px] leading-[20px]
                transition-colors duration-200
                hover:text-[#F64F02]
                focus-visible:rounded-sm
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#F64F02]
                ${
                  isActive
                    ? "font-semibold text-[#F64F02]"
                    : "font-medium text-[#000000]"
                }
              `}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls={mobileMenuId}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="
          flex h-[40px] w-[40px]
          items-center justify-center
          rounded-md text-[#000000]
          transition-colors duration-200
          hover:bg-black/5
          focus-visible:outline-2
          focus-visible:outline-[#F64F02]
          lg:hidden
        "
      >
        <span className="flex w-[22px] flex-col gap-[5px]">
          <span
            className={`
              h-[2px] w-full bg-current
              transition-transform duration-200
              ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}
            `}
          />
          <span
            className={`
              h-[2px] w-full bg-current
              transition-opacity duration-200
              ${isMenuOpen ? "opacity-0" : ""}
            `}
          />
          <span
            className={`
              h-[2px] w-full bg-current
              transition-transform duration-200
              ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}
            `}
          />
        </span>
      </button>

      {/* Mobile dropdown */}
      <div
        id={mobileMenuId}
        className={`
          absolute inset-x-0 top-full z-50
          border-t border-black/10
          bg-[#FEF8F1]
          shadow-[0_12px_20px_rgba(0,0,0,0.08)]
          lg:hidden
          ${isMenuOpen ? "block" : "hidden"}
        `}
      >
        <ul className="flex flex-col px-[20px] py-[16px]">
          {navItems.map(({ label, href, isActive }) => (
            <li key={label}>
              <a
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  block rounded-md px-[12px] py-[13px]
                  text-[15px]
                  transition-colors duration-200
                  hover:bg-black/5
                  hover:text-[#F64F02]
                  focus-visible:outline-2
                  focus-visible:outline-[#F64F02]
                  ${
                    isActive
                      ? "font-semibold text-[#F64F02]"
                      : "font-medium text-[#000000]"
                  }
                `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
