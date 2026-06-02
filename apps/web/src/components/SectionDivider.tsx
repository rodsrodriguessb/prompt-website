/**
 * Thin rainbow hairline between sections — the brand --grad accent rendered as
 * a 1px rule that fades to transparent at both edges. Echoes the calendar
 * embed's gradient border without the visual weight of a full frame.
 */
export function SectionDivider() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[1080px] px-6">
      <div className="grad-rule h-px w-full" />
    </div>
  );
}
