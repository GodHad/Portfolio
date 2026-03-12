import clsx from "clsx";
import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = "left", action }: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-10 flex flex-col gap-4",
        align === "center" && "mx-auto max-w-3xl items-center text-center"
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</span>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className={clsx("space-y-4", align === "center" && "md:items-center") }>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
          {description ? <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{description}</p> : null}
        </div>
        {action}
      </div>
    </div>
  );
}
