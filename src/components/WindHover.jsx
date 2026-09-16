// 「有风的时候，斜着也停得住」那页的图。跟上一页（法线/重力）共用一套词汇：
// 黄 = 机体自己（板、推力），蓝 = 重力，灰 = 风的阻力。标签 26px --muted、跟天平那页同规格。
//
// 左边是平行四边形：重力（往下 104）和推力（斜着 110.7）从中心摆成两条边，两条虚线把它们
// 补成一个平行四边形，从中心出发的那条对角线就是「重力和推力的合力」—— 长 38，横着往左，
// 跟往右的「风的阻力」一样长、方向相反。要让人一眼看到的就是这一对。
// 这条对角线短、而且水平，本身就是竖直方向已经抵干净的证据：重力往下的 104 和推力往上的
// 104 相消，剩下的只有水平那一份，而它跟风顶得刚刚好。
//
// 这条对角线跟「推力的水平分量」是同一根箭头（重力是竖直的，跟它相加不改变水平那份），
// 所以这页不另外画水平分力：一根箭头两个说法 —— 从推力看是它的分量，从重力+推力看是合力。
//
// 两条虚线没有箭头：没有箭头就不是力，是画平行四边形用的辅助线。颜色跟着它复制的那条边
// （黄的那条平行于推力，蓝的那条平行于重力），一眼看出是谁挪过来的。
//
// 板那个角是 atan(38/104) = 20.072°，也就是「风越大偏得越多」里的那个角 —— 它不是一个随手
// 取的角度，是重力和风力两个长度定出来的，所以推力箭尖会精确落在 (432,164)。这页不写数字：
// 竖直线和推力线之间只有 40 多 px，塞不下一个标签，所以只留那道弧 —— 跟上一页的弧是同一画法
// （蓝、1px、0.5）。
//
// viewBox 的起点是 -90，不是 0：这张图自己只占 x 64..677，照原样摆会偏在画布左边，所以把
// 视窗往左挪 90px，图在画布上就居中了 —— 图里的坐标一个都没动，下面注释说的都是图自己的坐标。
//
// 静止的一页，只有风在动：三支风箭头慢速明暗，飞机一动不动 —— 这就是「风一直在吹，
// 它一直停在那儿」。动画写在 components.css 里。
export default function WindHover() {
  return (
    <div className="wh">
      <div className="wh-stage">
        <svg viewBox="-90 0 920 440">
          {/* 风。三支横箭头从左边吹过来，中间那支正对着机体中心 */}
          <g className="wh-wind">
            <g className="wh-gust">
              <path className="wh-gust-line" d="M64,130 L244,130" />
              <path className="wh-gust-head" d="M244,120 L264,130 L244,140 Z" />
            </g>
            <g className="wh-gust">
              <path className="wh-gust-line" d="M64,200 L244,200" />
              <path className="wh-gust-head" d="M244,190 L264,200 L244,210 Z" />
            </g>
            <g className="wh-gust">
              <path className="wh-gust-line" d="M64,268 L244,268" />
              <path className="wh-gust-head" d="M244,258 L264,268 L244,278 Z" />
            </g>
          </g>
          <text className="wh-tag" x="64" y="96" dominantBaseline="central">风</text>

          {/* 夹角：竖直方向和推力之间那道弧。上一页用同一道弧量「法线偏开重力多少」 */}
          <path className="wh-arc" d="M470,192 A76,76 0 0 0 444,196.6" />

          {/* 平行四边形的两条辅助边，都从一条边的尖端出发、复制另一条边的方向和长度，
              在 (432,268) 碰头 —— 那个点就是合力。画在最底下，斜过来的板会盖过它们交汇处 */}
          <path className="wh-helper wh-helper--y" d="M470,372 L432,268" />
          <path className="wh-helper wh-helper--b" d="M432,164 L432,268" />

          {/* 重力：平行四边形的这条边，从中心往下 */}
          <path className="wh-grav" d="M470,268 L470,352" />
          <path className="wh-grav-head" d="M460,352 L480,352 L470,372 Z" />
          <text className="wh-tag" x="486" y="382" dominantBaseline="central">重力</text>

          {/* 风的阻力：风从左来，所以它往右推机体，长 38 */}
          <path className="wh-drag" d="M470,268 L488,268" />
          <path className="wh-drag-head" d="M488,258 L488,278 L508,268 Z" />
          <text className="wh-tag" x="524" y="292" dominantBaseline="central">风的阻力</text>

          {/* 合力：平行四边形的对角线，也就是推力那条边的水平分量。它短、它水平（竖直两份
              已经相消），长 38，正好跟往右的风的阻力一样长、方向相反 */}
          <path className="wh-res" d="M470,268 L452,268" />
          <path className="wh-res-head" d="M452,258 L452,278 L432,268 Z" />
          <text className="wh-tag" x="420" y="246" textAnchor="end" dominantBaseline="central">合力</text>

          {/* 机体 + 推力。整组绕中心逆时针转 atan(38/104) = 20.072°：板斜了，组内竖直的推力
              跟着斜 —— 推力永远垂直地从板里戳出来，这就是「推力顺着法线出去」。转的是这个角、
              推力画的是 √(104²+38²) = 110.72 这个长，所以箭尖正好落在 (432,164) —— 平行四边形
              的第四个点，闭合是算出来的，不是对上去的。 */}
          <g className="wh-body">
            <rect className="wh-slab" x="250" y="264" width="440" height="8" />
            <path className="wh-thrust" d="M470,268 L470,177.28" />
            <path className="wh-thrust-head" d="M460,177.28 L480,177.28 L470,157.28 Z" />
          </g>
          <text className="wh-tag wh-tag--y" x="404" y="148" textAnchor="end" dominantBaseline="central">推力</text>
        </svg>
      </div>
    </div>
  );
}
