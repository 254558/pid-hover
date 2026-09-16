import CurveBackdrop from './CurveBackdrop';

// backdrop 有两种给法：曲线页给的是一条 path（字符串），水平仪那页直接给一个节点。
export default function Slide({ active, backdrop, children }) {
  return (
    <section className={active ? 'slide active' : 'slide'}>
      {typeof backdrop === 'string' ? <CurveBackdrop d={backdrop} /> : backdrop}
      <div className="s">{children}</div>
    </section>
  );
}
