export default function ActionWord({ first, rest, cn, variant }) {
  return (
    <>
      <div className={variant ? `act-word ${variant}` : 'act-word'}>
        <span className="first">{first}</span>
        {rest && <span className="rest">{rest}</span>}
      </div>
      <div className="act-cn">{cn}</div>
    </>
  );
}
