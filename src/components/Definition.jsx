import React from "react";

// A dictionary slip that opens on hover or keyboard focus. CSS-only — the
// trigger is focusable so it works without a pointer.
export default function Definition({ term, pronunciation, senses }) {
  return (
    <span className="group relative inline-block">
      {/* Set in the index folder's colour with a dotted rule under it — the
          convention readers already know for "there is a definition here". */}
      <abbr
        tabIndex={0}
        aria-describedby={`def-${term}`}
        title=""
        className="cursor-help font-bold underline decoration-dotted decoration-from-font underline-offset-4 transition-colors hover:decoration-solid"
        style={{ color: "var(--archive-mark)" }}
      >
        {term}
      </abbr>

      <span
        id={`def-${term}`}
        role="tooltip"
        className="invisible absolute left-0 top-full z-30 mt-2 w-[min(23rem,78vw)] translate-y-1 border border-border bg-mount p-4 text-left opacity-0 shadow-[0_10px_28px_-8px_var(--archive-shadow)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <dl>
          <dt className="flex items-baseline gap-2 border-b border-border pb-2">
            <span className="font-display text-base font-bold leading-none">{term}</span>
            {/* normal-case so the IPA isn't mangled by the label's uppercase */}
            <span className="label normal-case tracking-normal">{pronunciation}</span>
          </dt>

          {senses.map((sense, i) => (
            <dd
              key={sense}
              className={`grid grid-cols-[1.4rem_1fr] gap-x-2 text-sm leading-relaxed text-muted-foreground ${
                i === 0 ? "mt-3" : "mt-3 border-t border-border pt-3"
              }`}
            >
              <span className="label pt-1">{i + 1}.</span>
              <span>
                <span className="italic text-foreground">n.</span> {sense}
              </span>
            </dd>
          ))}
        </dl>
      </span>
    </span>
  );
}
