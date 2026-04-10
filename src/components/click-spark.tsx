"use client";

import ClickSpark from "@/components/ui/click-spark";

interface ClickSparkWrapperProps {
  children: React.ReactNode;
}

export default function ClickSparkWrapper({
  children,
}: ClickSparkWrapperProps) {
  return (
    <ClickSpark
      sparkColor="#CE47EB"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      {children}
    </ClickSpark>
  );
}