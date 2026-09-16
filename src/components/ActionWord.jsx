// P / I / D 三个字母的写法：第一个字母大一号、剩下的跟在后头，底下一行中文。
// 三个调用点（proportional / derivative / integral）都只传 first/rest/cn。
//
// variant 这个口子现在没人用：原本是给「只显示首字母」那版留的（act-word pid →
// 藏掉 rest、把 first 放到 6.8rem），后来三页统一成了首字母 + 后面的字母一起排，
// 那版就没再启用。留着是因为它连着 components.css 里那两条 .act-word.pid 规则，
// 真要排「一个大 P 顶满一页」的时候改一下调用就成。
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
