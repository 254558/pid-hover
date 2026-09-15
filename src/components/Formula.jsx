export default function Formula({ label, children }) {
  return (
    <div className="formula">
      {label && <span className="label">{label}</span>}
      {children}
    </div>
  );
}
