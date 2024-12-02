"use client";

import { isMobile } from "react-device-detect";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MobileRedirectWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const userPreference = localStorage.getItem("continueOnPhone") === "true";

    if (isMobile) {
      router.push("/proceed");
    }
  }, [router]);

  return <>{children}</>;
}
