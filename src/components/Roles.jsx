export default function Roles({ items }) {
  return (
    <div className="roles">
      {items.map(({ label, term, note }) => (
        <div className="role" key={label}>
          <span className="role-l">{label}</span>
          <span className="role-t">{term}</span>
          <span className="role-s">{note}</span>
        </div>
      ))}
    </div>
  );
}
