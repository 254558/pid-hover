export default function CurveBackdrop({ d }) {
  return (
    <div className="curve-wrap">
      <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
        {/* y=285 是那条水平的「停住」线，先垫在底下，曲线才看得出是停在线上还是停在线外 */}
        <path className="c-lvl" d="M0,285 L1000,285" />
        <path className="c1" d={d} />
      </svg>
    </div>
  );
}
