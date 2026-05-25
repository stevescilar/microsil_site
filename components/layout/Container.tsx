import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Use "narrow" for reading-width content like blog posts or centered CTAs */
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[1440px]",
};

export default function Container({
  children,
  className,
  size = "default",
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
