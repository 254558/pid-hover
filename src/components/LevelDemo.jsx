// 「无人机怎么判断一个平面是否水平」那页的动画。整页只干一件事：把「凭什么说它停得住」画出来。
//
// 里面有两个东西，一个不动、一个动：
//   竖直那条蓝点线 = 重力方向。它永远不动 —— 这正是无人机手里唯一的绝对参照。
//   黄板 + 黄箭头 = 机体面，以及从板里垂直戳出来的法线。它俩是一伙的，一起绕中心转。
// 板躺到蓝虚线上、法线落回重力那条线上 → 停得住；岔开多少，支点处那道蓝弧就是夹角。
// 所以判断逻辑就是一句话：不看法线在哪儿，看法线偏开重力多少。夹角为零 = 停得住。
//
// 终点是「停得住」（也就是悬停），不是「平」：推力顺着法线出去，法线一偏，这份力就分成
// 两股 —— 一股扛重力、一股把飞机推着往旁边跑，位置就守不住了。所以「平」只是无风时该有的
// 样子，不是判断标准：有风的时候飞机得斜着顶风才停得住（法线偏开重力，水平分力去顶风的
// 阻力）。这页的画面里没有风，演的是静止空气里的情形。
//
// 12° 是屏幕角度，也是这条时间线的幅度（和水平仪那页的黄线同一个数）。
// 时间线写在 components.css：慢慢歪到 +12°、停一会儿、回平、再往另一边 -12°、再回平，8 秒一轮。
// 左下角那个「停不住 / 停得住」是判断的输出：歪着的时候说停不住，法线落回来就说停得住。
// 两个词叠在同一个位置交叉淡入淡出，眼睛就一直钉在那一处。
export default function LevelDemo() {
  return (
    <div className="hz">
      <div className="hz-stage">
        <svg viewBox="0 0 920 440">
          {/* 水平面。和曲线页那条参考线同一个画法（蓝虚线 9 11、0.5），标的是「水平」这个
              方向在画面里的位置 —— 板躺到它上面，法线就朝上了。它是参照，不是结论。 */}
          <path className="hz-ref" d="M180,250 L740,250" />
          <text className="hz-tag" x="756" y="250" dominantBaseline="central">水平面</text>

          {/* 重力：不动的那一头。点线比虚线更细碎，跟水平面那条一眼分得开 */}
          <path className="hz-grav" d="M460,46 L460,398" />
          <path className="hz-head" d="M450,398 L470,398 L460,418 Z" />
          <text className="hz-tag" x="482" y="410" dominantBaseline="central">重力</text>

          {/* 夹角。两端分别是竖直和法线，法线转到哪儿它就跟到哪儿 —— 所以它的 d 得跟着
              一起变，见 components.css 里的 hz-arc。平的时候两端重合成一个点，这条弧
              自然就没了，不用另外去藏它。 */}
          <path className="hz-arc" d="M460,132 A118,118 0 0 1 460,132" />

          {/* 机体面 + 法线：一块板侧着看就是一条板。法线从板里垂直长出来，跟着板一起转。
              转到哪儿，法线就指向哪儿 —— 无人机测的就是这根箭头的方向。 */}
          <g className="hz-plane">
            <rect className="hz-slab" x="180" y="246" width="560" height="8" />
            <path className="hz-norm" d="M460,250 L460,86" />
            <path className="hz-norm-head" d="M450,88 L470,88 L460,68 Z" />
            <text className="hz-tag hz-tag--y" x="478" y="104" dominantBaseline="central">法线</text>
          </g>

          {/* 判断的结果。歪着的时候没有别的字落在这一角，法线落回来的时候它是竖的、也够不着
              （x 最远到 240），所以这两个词放在左下角是空的，可以常驻。三个字比原来的两个
              字宽一点（居中在 x=170，左右各到 50 和 290），那一角仍然装得下。 */}
          <text className="hz-verdict hz-no" x="170" y="380" textAnchor="middle" dominantBaseline="central">停不住</text>
          <text className="hz-verdict hz-ok" x="170" y="380" textAnchor="middle" dominantBaseline="central">停得住</text>
        </svg>
      </div>
    </div>
  );
}
