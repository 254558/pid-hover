import CurveBackdrop from './CurveBackdrop';

// backdrop 是曲线页给的一条 path 字符串（CurveBackdrop 负责画出来）；没给的页就没有背景层。
export default function Slide({ active, backdrop, children }) {
  return (
    <section className={active ? 'slide active' : 'slide'}>
      {backdrop && <CurveBackdrop d={backdrop} />}
      <div className="s">{children}</div>
    </section>
  );
}
