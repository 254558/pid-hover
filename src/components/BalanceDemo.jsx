// 「动态攒偏差」那页的动画，按天平来演：
// 横梁绕中点转，中间那个竖方块就是配重 —— 方块往左，左边就沉；往右，右边就沉；回到中间，两边一样。
// 风随机从左边或右边吹（上吹下吹都有），梁一歪，方块就往反方向挪，挪到梁回平了才停。
// 方块离中点多远，就是攒下来的偏差之和（下面那条标注量的就是这个距离，左负右正）。
// 那条横虚线上的标签是「停住了」而不是「平了」：梁回平是画面上的样子，这一页要的是
// 偏差之和归零、飞机守住位置 —— 整份 deck 的终点都是悬停，不是平。
// 时间线写在 components.css 里。

export default function BalanceDemo() {
  return (
    <div className="bal">
      <div className="bal-stage">
        <span className="bal-gust bal-gust--a">↓</span>
        <span className="bal-gust bal-gust--b">↓</span>
        <span className="bal-gust bal-gust--c">↑</span>
        <span className="bal-level" />
        <span className="bal-level-tag">停住了</span>
        <span className="bal-fulcrum" />
        <div className="bal-beam">
          <span className="bal-block" />
        </div>
        <span className="bal-tick" />
        <span className="bal-dim" />
        <span className="bal-sum-tag">偏差之和</span>
      </div>
    </div>
  );
}
