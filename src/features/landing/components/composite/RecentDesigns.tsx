import { useEffect, useRef, useState } from "react";

import DesignCard from "../primitive/DeisgnCard";

import recent01 from "../../../../assets/landing/bgImages/recent_01.png";
import recent02 from "../../../../assets/landing/bgImages/recent_02.png";
import recent03 from "../../../../assets/landing/bgImages/recent_03.png";
import recent04 from "../../../../assets/landing/bgImages/recent_04.png";

import rightArrow from "../../../../assets/landing/logo/right-arrow.svg";

interface RecentDesign {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const recentDesigns: RecentDesign[] = [
  {
    id: 1,
    title: "Miller’s Residence",
    image: recent01,
    alt: "Open-plan living room with a tan sofa and modern kitchen",
  },
  {
    id: 2,
    title: "Michael’s Apartment",
    image: recent02,
    alt: "Living room with a mustard sectional sofa and decorative plants",
  },
  {
    id: 3,
    title: "Doe’s House",
    image: recent03,
    alt: "Minimal living room with white sofa and framed wall art",
  },
  {
    id: 4,
    title: "Jessica’s Flat",
    image: recent04,
    alt: "Bright neutral living room with sofa and round wall mirrors",
  },
];

export default function RecentDesigns() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (activeIndex !== null && !dialog.open) {
      dialog.showModal();
    }

    if (activeIndex === null && dialog.open) {
      dialog.close();
    }
  }, [activeIndex]);

  const closeGallery = (): void => {
    setActiveIndex(null);
  };

  const nextDesign = (): void => {
    setActiveIndex((previous) =>
      previous === null ? 0 : (previous + 1) % recentDesigns.length,
    );
  };

  const previousDesign = (): void => {
    setActiveIndex((previous) =>
      previous === null
        ? 0
        : (previous - 1 + recentDesigns.length) % recentDesigns.length,
    );
  };

  const activeDesign = activeIndex !== null ? recentDesigns[activeIndex] : null;

  return (
    <section
      id="recent-designs"
      aria-labelledby="recent-designs-title"
      className="
        w-full bg-[#FEE7CC]
        pt-[48px] pb-[64px]
        sm:pt-[56px] sm:pb-[72px]
        lg:pt-[48px] lg:pb-[64px]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-4 sm:px-8 lg:px-[83px]
        "
      >
        {/* Section heading */}
        <div
          className="
            mb-[36px] flex flex-col
            items-start justify-between
            gap-[20px]
            sm:flex-row sm:items-center
            lg:mb-[44px]
          "
        >
          <h2
            id="recent-designs-title"
            className="
              m-0 text-[40px] font-normal
              leading-[1.15] tracking-[-0.035em]
              text-[#1B1B1B]
              sm:text-[52px]
              lg:text-[64px]
            "
          >
            Recent Designs
          </h2>

          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="
              inline-flex h-[40px] w-[116px]
              shrink-0 cursor-pointer
              items-center justify-center
              bg-[#F64F02]
              text-[14px] font-medium
              text-[#FFFFFF]
              transition-colors duration-200
              hover:bg-[#DC4702]
              active:bg-[#C53E02]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#F64F02]
              sm:text-[16px]
            "
          >
            See All
          </button>
        </div>

        {/* Design cards */}
        <div
          className="
            grid grid-cols-1
            gap-x-[24px] gap-y-[32px]
            md:grid-cols-2
            lg:gap-x-[48px]
            lg:gap-y-[40px]
          "
        >
          {recentDesigns.map((design, index) => (
            <DesignCard
              key={design.id}
              title={design.title}
              image={design.image}
              alt={design.alt}
              onOpen={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Accessible gallery dialog */}
      <dialog
        ref={dialogRef}
        aria-label="Recent designs gallery"
        onClose={closeGallery}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeGallery();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            nextDesign();
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            previousDesign();
          }
        }}
        className="
          m-auto w-[calc(100%-32px)]
          max-w-[920px]
          max-h-[calc(100dvh-32px)]
          overflow-y-auto
          border-0 bg-[#FEE7CC]
          p-[16px] text-[#1B1B1B]
          shadow-2xl
          backdrop:bg-black/75
          sm:p-[24px]
        "
      >
        {activeDesign && (
          <div>
            <div className="mb-[16px] flex items-center justify-between gap-4">
              <h3 className="m-0 text-[20px] font-medium sm:text-[24px]">
                {activeDesign.title}
              </h3>

              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="
                  flex h-[36px] w-[36px]
                  shrink-0 cursor-pointer
                  items-center justify-center
                  text-[28px] leading-none
                  hover:text-[#F64F02]
                  focus-visible:outline-2
                  focus-visible:outline-[#F64F02]
                "
              >
                ×
              </button>
            </div>

            <img
              src={activeDesign.image}
              alt={activeDesign.alt}
              className="
                block max-h-[65dvh]
                w-full object-contain
              "
            />

            <div className="mt-[20px] flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={previousDesign}
                aria-label="Previous design"
                className="
                  flex h-[40px] w-[48px]
                  cursor-pointer items-center justify-center
                  bg-[#F64F02]
                  transition-colors hover:bg-[#DC4702]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#F64F02]
                "
              >
                <img
                  src={rightArrow}
                  alt=""
                  aria-hidden="true"
                  className="h-[12px] w-[15px] rotate-180"
                />
              </button>

              <span className="text-[14px] font-medium">
                {activeIndex !== null ? activeIndex + 1 : 1}
                {" / "}
                {recentDesigns.length}
              </span>

              <button
                type="button"
                onClick={nextDesign}
                aria-label="Next design"
                className="
                  flex h-[40px] w-[48px]
                  cursor-pointer items-center justify-center
                  bg-[#F64F02]
                  transition-colors hover:bg-[#DC4702]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#F64F02]
                "
              >
                <img
                  src={rightArrow}
                  alt=""
                  aria-hidden="true"
                  className="h-[12px] w-[15px]"
                />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
