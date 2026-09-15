import CurveBackdrop from './CurveBackdrop';

export default function Slide({ active, backdrop, children }) {
  return (
    <section className={active ? 'slide active' : 'slide'}>
      {backdrop && <CurveBackdrop d={backdrop} />}
      <div className="s">{children}</div>
    </section>
  );
}
