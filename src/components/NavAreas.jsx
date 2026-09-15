export default function NavAreas({ onPrev, onNext }) {
  return (
    <>
      <div className="nav-area nav-left" onClick={onPrev} />
      <div className="nav-area nav-right" onClick={onNext} />
    </>
  );
}
