import React from 'react';

export interface SectionHeadingProps {
  kicker?: string;
  plainLine: string;
  accentLine?: string;
  subhead?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  kicker,
  plainLine,
  accentLine,
  subhead,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-3 ${
        isCenter
          ? 'text-center mx-auto max-w-3xl flex flex-col items-center'
          : 'max-w-3xl'
      } ${className}`}
    >
      {kicker && (
        <div
          className={`inline-flex items-center gap-2 ${
            isCenter ? 'justify-center mx-auto' : ''
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#008035]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#008035]">
            {kicker}
          </span>
        </div>
      )}

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white leading-[1.12]">
        <span>{plainLine}</span>
        {accentLine && (
          <>
            <br />
            <span className="italic font-normal text-[#008035]">{accentLine}</span>
          </>
        )}
      </h2>

      {subhead && (
        <p
          className={`text-base sm:text-lg text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed pt-2 ${
            isCenter ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {subhead}
        </p>
      )}
    </div>
  );
}
