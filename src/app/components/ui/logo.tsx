import { cn } from "@/lib/utils";
import LogoImage from "../../../../public/403.svg";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={LogoImage}
      alt="logo"
      className={cn("h-12 object-contain w-full", className)}
    />
  );
}
