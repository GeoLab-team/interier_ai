import rightArrow from "../../../../assets/landing/logo/right-arrow.svg";

export interface DesignCardProps {
  title: string;
  image: string;
  alt: string;
  onOpen: () => void;
}

export default function DesignCard({
  title,
  image,
  alt,
  onOpen,
}: DesignCardProps) {
  return (
    <article className="group min-w-0">
      {/* Project image */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${title}`}
        className="
          block w-full overflow-hidden
          cursor-pointer bg-black/5
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#F64F02]
        "
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="
            block aspect-[614/340]
            h-auto w-full object-cover
            transition-transform duration-500
            motion-safe:group-hover:scale-[1.025]
          "
        />
      </button>

      {/* Project information */}
      <div
        className="
          mt-[8px] flex min-h-[32px]
          items-center justify-between
          gap-[12px]
        "
      >
        <h3
          className="
            m-0 min-w-0
            text-[16px] font-normal
            leading-[24px] text-[#1B1B1B]
            sm:text-[18px]
          "
        >
          {title}
        </h3>

        <button
          type="button"
          onClick={onOpen}
          aria-label={`View ${title}`}
          className="
            flex h-[32px] w-[32px]
            shrink-0 cursor-pointer
            items-center justify-center
            bg-[#F64F02]
            transition-colors duration-200
            hover:bg-[#DC4702]
            active:bg-[#C53E02]
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
    </article>
  );
}
