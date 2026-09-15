export default function Formula({ label, className, children }) {
  return (
    <div className={className ? `formula ${className}` : 'formula'}>
      {label && <span className="label">{label}</span>}
      {children}
    </div>
  );
}
