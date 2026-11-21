import NavBar from "../primitive/NavBar";
import logo from "../../../../assets/logo.svg";

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-[#FEF8F1]">
      <div
        className="
          relative mx-auto flex w-full max-w-[1440px]
          items-center justify-between
          px-[16px]
          sm:px-[32px]
          lg:px-[83px]
          h-[76px]
          sm:h-[88px]
          lg:h-[100px]
        "
      >
        {/* Left: navigation */}
        <NavBar />

        {/* Center: logo */}
        <a
          href="/"
          aria-label="SYNTASK Home"
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            focus-visible:rounded-sm
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#F64F02]
          "
        >
          <img
            src={logo}
            alt="SYNTASK"
            className="
              block h-auto w-[100px]
              sm:w-[116px]
            "
          />
        </a>

        {/* Right: contact button */}
        <a
          href="#contact"
          className="
            ml-auto inline-flex
            h-[36px] w-[88px]
            shrink-0 items-center justify-center
            whitespace-nowrap
            bg-[#F64F02]
            text-[12px] font-medium text-white
            transition-colors duration-200
            hover:bg-[#DC4702]
            active:bg-[#BE3D02]
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#F64F02]
            sm:h-[36px] sm:w-[100px] sm:text-[14px]
            lg:h-[32px] lg:w-[96px] lg:text-[13px]
          "
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
