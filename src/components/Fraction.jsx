export default function Fraction({ num, den }) {
  return (
    <span className="frac">
      <span className="num">{num}</span>
      <span className="den">{den}</span>
    </span>
  );
}
