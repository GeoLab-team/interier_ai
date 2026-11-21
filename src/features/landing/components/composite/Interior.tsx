import interiorLeftSide from "../../../../assets/landing/bgImages/interiorLeftSide.png";
import interiorRightTopSide from "../../../../assets/landing/bgImages/interiorRighTopSide.png";
import interiorRightBottomSide from "../../../../assets/landing/bgImages/interiorRightBottomSide.png";

interface InteriorStatistic {
  value: string;
  label: string;
}

const statistics: InteriorStatistic[] = [
  { value: "100%", label: "satisfactory" },
  { value: "1,499+", label: "interiors designed" },
  { value: "5", label: "team members" },
];

export default function Interior() {
  return (
    <section
      id="about"
      aria-labelledby="interior-title"
      className="
        mt-[109px] w-full bg-[#FEF8F1]
        pb-[64px] text-[#1B1B1B]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[83px]
          min-[1280px]:px-[clamp(64px,5.7vw,110px)]
        "
      >
        <div
          className="
            flex flex-col
            min-[1280px]:grid
            min-[1280px]:grid-cols-[27%_minmax(0,1fr)_25%]
            min-[1280px]:items-start
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              order-2 mt-[44px]
              sm:mx-auto sm:w-full sm:max-w-[650px]
              min-[1280px]:order-1
              min-[1280px]:mt-0
              min-[1280px]:max-w-none
            "
          >
            <img
              src={interiorLeftSide}
              alt="Minimalist interior with arched doorway"
              loading="lazy"
              decoding="async"
              className="
                block aspect-[342/508]
                max-h-[520px] w-full
                object-cover
                min-[1280px]:max-h-none
              "
            />
          </div>

          {/* CENTER CONTENT */}
          <div
            className="
              order-1 flex min-w-0
              flex-col items-center text-center
              min-[1280px]:order-2
              min-[1280px]:px-[24px]
              min-[1280px]:pt-[clamp(76px,6vw,115px)]
            "
          >
            <h2
              id="interior-title"
              className="
                m-0 text-[clamp(36px,4.2vw,80px)]
                font-normal leading-[1.15]
                tracking-[-0.035em]
                min-[1280px]:whitespace-nowrap
              "
            >
              Beautiful Interior
            </h2>

            <p
              className="
                mt-[20px] max-w-[560px]
                text-[14px] leading-[25px]
                font-medium text-[#333333]
                sm:text-[15px]
                min-[1280px]:mt-[16px]
              "
            >
              We are proud to introduce you SYNTASK, a high quality interior
              design firm. Your interior will flourish and you will truly enjoy
              living in your space. We specialise in residential buildings and
              we love designing beautiful living rooms and bedrooms.
            </p>

            <a
              href="#work"
              className="
                mt-[24px] inline-flex
                h-[44px] w-full max-w-[397px]
                items-center justify-center
                bg-[#F64F02]
                text-[16px] font-medium text-white
                transition-colors duration-200
                hover:bg-[#DC4702]
                active:bg-[#C53E02]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#F64F02]
                min-[1280px]:h-[40px]
              "
            >
              Our Work
            </a>

            {/* STATISTICS */}
            <div
              className="
                mt-[36px] grid w-full
                max-w-[397px] grid-cols-3
                gap-[8px] text-center
                min-[1280px]:mt-[42px]
              "
            >
              {statistics.map((statistic) => (
                <div
                  key={statistic.label}
                  className="
                    flex min-w-0 flex-col
                    items-center
                  "
                >
                  <strong
                    className="
                      text-[20px] font-semibold
                      leading-[28px]
                      sm:text-[22px]
                    "
                  >
                    {statistic.value}
                  </strong>

                  <span
                    className="
                      mt-[4px] text-[11px]
                      leading-[18px] text-[#333333]
                      sm:text-[13px]
                    "
                  >
                    {statistic.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div
            className="
              order-3 mt-[20px]
              grid grid-cols-2 items-start
              gap-[12px]
              sm:mx-auto sm:w-full sm:max-w-[650px]
              sm:gap-[24px]
              min-[1280px]:mt-0
              min-[1280px]:flex
              min-[1280px]:max-w-none
              min-[1280px]:flex-col
              min-[1280px]:items-end
              min-[1280px]:gap-[clamp(40px,2.86vw,55px)]
              min-[1280px]:pt-[clamp(64px,4.43vw,85px)]
            "
          >
            {/* Right top */}
            <img
              src={interiorRightTopSide}
              alt="Modern bedroom with dark bed and wall art"
              loading="lazy"
              decoding="async"
              className="
                block aspect-[319/255]
                w-full object-cover
              "
            />

            {/* Right bottom */}
            <img
              src={interiorRightBottomSide}
              alt="Cozy living room with natural lighting"
              loading="lazy"
              decoding="async"
              className="
                block aspect-[220/148]
                w-full object-cover
                min-[1280px]:w-[69%]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
