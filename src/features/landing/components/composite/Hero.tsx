import firstBgLanding from "../../../../assets/landing/bgImages/firstBgLanding.png";
import secondBgLanding from "../../../../assets/landing/bgImages/secondBgLanding.png";
import thirdBgLanding from "../../../../assets/landing/bgImages/thirdBgLanding.png";
import mainBg from "../../../../assets/landing/bgImages/mainBg.png";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: thirdBgLanding,
    alt: "Warm living room with orange chair and indoor plants",
  },
  {
    src: firstBgLanding,
    alt: "Modern living room with panoramic windows and sofa",
  },
  {
    src: secondBgLanding,
    alt: "Minimalist living room with wooden cabinet and armchair",
  },
];

const benefits: string[] = [
  "high quality design",
  "top notch talent",
  "the best interior",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="w-full bg-[#FEF8F1] text-[#1B1B1B]"
    >
      <img
        src={mainBg}
        alt={"living room with a sofa, armchair, and indoor plants"}
        className="
                    w-auto
                    max-w-[1440px] object-cover
                    mb-9.25 px-4 sm:px-8 lg:px-[83px]
                    lg:h-auto mx-auto w-full
                  "
      />
      <div
        className="
          relative mx-auto w-full max-w-[1440px]
          px-4 sm:px-8 lg:px-[83px]
        "
      >
        {/* Main BG */}

        {/* Contact information */}
        <div
          className="
            flex flex-wrap items-center justify-between
            gap-x-5 gap-y-2 pt-6
            text-[12px] font-medium
            sm:text-[13px]
            lg:absolute lg:inset-x-[83px]
            lg:top-[24px] lg:z-10 lg:pt-0
          "
        >
          <a
            href="tel:+420111222333"
            className="
              underline underline-offset-2
              transition-colors hover:text-[#F64F02]
              focus-visible:outline-2
              focus-visible:outline-[#F64F02]
            "
          >
            +420 111 222 333
          </a>

          <a
            id="contact"
            href="mailto:info@syntask.com"
            className="
              underline underline-offset-2
              transition-colors hover:text-[#F64F02]
              focus-visible:outline-2
              focus-visible:outline-[#F64F02]
            "
          >
            info@syntask.com
          </a>
        </div>

        {/* Hero content */}
        <div
          className="
            mx-auto flex max-w-[850px]
            flex-col items-center text-center
            pt-9 sm:pt-10 lg:pt-[42px]
          "
        >
          {/* Heading */}
          <h1
            id="hero-title"
            className="
              m-0 text-[42px] font-normal
              leading-[1.08] tracking-[-0.035em]
              sm:text-[56px]
              lg:text-[72px]
            "
          >
            Interior Design
            <br />
            for your Home
          </h1>

          {/* Description */}
          <p
            className="
              mt-[24px] max-w-[570px]
              text-[15px] font-normal leading-[26px]
              sm:mt-[30px] sm:text-[17px]
              sm:leading-[27px]
            "
          >
            We craft the most beautiful interior design you've ever seen. Get
            yourself a luxurious interior that you will love.
          </p>

          {/* Action buttons */}
          <div
            className="
              mt-[26px] flex w-full
              items-center justify-center gap-[14px]
              sm:mt-[28px]
            "
          >
            <a
              href="mailto:info@syntask.com"
              className="
                inline-flex h-[44px] w-[116px]
                items-center justify-center
                bg-[#F64F02]
                text-[15px] font-medium text-white
                transition-colors duration-200
                hover:bg-[#DC4702]
                active:bg-[#C53E02]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#F64F02]
                sm:w-[126px] sm:text-[16px]
              "
            >
              Contact
            </a>

            <a
              href="#work"
              className="
                inline-flex h-[44px] w-[116px]
                items-center justify-center
                bg-[#F64F02]
                text-[15px] font-medium text-white
                transition-colors duration-200
                hover:bg-[#DC4702]
                active:bg-[#C53E02]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#F64F02]
                sm:w-[126px] sm:text-[16px]
              "
            >
              Work
            </a>
          </div>

          {/* Benefits */}
          <ul
            className="
              mt-[34px] flex flex-wrap
              items-center justify-center
              gap-x-[26px] gap-y-[14px]
              sm:mt-[36px] sm:gap-x-[42px]
            "
          >
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="
                  flex items-center gap-[10px]
                  text-[12px] font-medium
                  sm:text-[13px]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-[16px] w-[3px]
                    shrink-0 bg-[#F64F02]
                  "
                />

                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image gallery */}
        <div
          id="work"
          role="region"
          aria-label="Interior design gallery"
          tabIndex={0}
          className="
            mt-[40px] overflow-x-auto pb-3
            outline-none
            focus-visible:outline-2
            focus-visible:outline-[#F64F02]
            sm:mt-[50px]
            lg:mt-[60px] lg:overflow-visible
            lg:pb-0
          "
        >
          <div
            className="
              flex w-max snap-x snap-mandatory
              gap-[16px]
              sm:gap-[24px]
              lg:grid lg:w-full
              lg:grid-cols-[minmax(0,882fr)_minmax(0,646fr)_minmax(0,882fr)]
              lg:gap-[35px]
            "
          >
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="
                  m-0 shrink-0 snap-start
                  lg:min-w-0
                "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="
                    block h-[260px] w-auto
                    max-w-none object-cover
                    sm:h-[340px]
                    lg:h-auto lg:w-full
                  "
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
