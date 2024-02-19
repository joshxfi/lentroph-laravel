import { twMerge } from "tailwind-merge";

export default function ApplicationLogo({ className }: { className?: string }) {
  return (
    <img
      className={twMerge("w-36 object-contain", className)}
      src="/images/lentroph.png"
    />
  );
}
