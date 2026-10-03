import { getImageProps } from "next/image";

type Props = {
  desktopSrc: string;
  mobileSrc?: string; // falls back to desktop if missing
  alt: string;
};

export function ResponsiveHeroImage({ desktopSrc, mobileSrc, alt }: Props) {
  const common = { alt, fill: true, priority: true, sizes: "100vw" };

  const {
    props: { srcSet: desktopSet, ...img },
  } = getImageProps({ ...common, src: desktopSrc });

  const {
    props: { srcSet: mobileSet },
  } = getImageProps({ ...common, src: mobileSrc ?? desktopSrc });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSet} />
      <source media="(max-width: 767px)" srcSet={mobileSet} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...img}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
      />
    </picture>
  );
}