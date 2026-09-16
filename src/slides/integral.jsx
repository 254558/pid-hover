import ActionWord from '../components/ActionWord';
import BalanceDemo from '../components/BalanceDemo';
import Formula from '../components/Formula';
import Fraction from '../components/Fraction';
import WindHover from '../components/WindHover';
import { offset, pid } from './curves';

const IntegralIntro = () => (
  <ActionWord first="I" rest="NTEGRAL" cn="积分控制" />
);

const Crosswind = () => <div className="t-xl t-xl--sm">外面一直刮着侧风</div>;

// 侧风那页只说风一直在吹，没说有风的时候飞机该是什么姿态。这一页补上：它得斜着顶风，
// 而且斜着照样停得住 —— 因为重力和推力摆成平行四边形，合出来的那条对角线（长 38、横着
// 往左）正好跟风的阻力（也是 38、往右）一样长、方向相反。图见 WindHover，画法和上一张
// （法线/重力）是同一套：同一块画布、同一道弧、同一套颜色。
// 这行跟法线那页一样用 t-big--sm（0.85），两页的字号和画布一样大，翻过去才像同一套图。
const WindHold = () => (
  <>
    <div className="t-big t-big--sm">有风的时候，斜着也停得住</div>
    <WindHover />
  </>
);

const FullLaw = () => (
  <Formula className="formula--law">P × 偏差 + I × 偏差之和 + D × 误差的变化率</Formula>
);

// 上一页那句话说完，这一页给同一个式子的符号写法 —— 讲课时能写在黑板上的那一条。
// u(t) 是算出来的推力，e(t) 是误差，K 是三个自己调的系数，下标 p / i / d 就是上面三页。
// 求导项写成真正的分数（Fraction 那个组件），因为「误差的变化率」= de/dt 正是 D 那一页的结论。
// 字号跟前一页守同一条规则（0.85），两页连着翻字号一样 —— 它们是同一个式子的两种写法。
// 底下那行小字是符号对照表：u / e / K 三个字母各是什么，跟公式从左到右同序。
const MathLaw = () => (
  <>
    <Formula className="formula--math">
      u(t) = K<sub>p</sub> e(t) + K<sub>i</sub> ∫e(t)dt + K<sub>d</sub>{' '}
      <Fraction num="de(t)" den="dt" />
    </Formula>
    <div className="t-sm">u 是要给的推力，e 是误差，K 是三个自己调的系数</div>
  </>
);

const DynamicAccum = () => (
  <>
    <div className="t-big">由于风是随机的</div>
    <div className="t-big">所以偏差需要持续调整</div>
    <BalanceDemo />
  </>
);

export default [
  { content: IntegralIntro },
  { content: Crosswind, backdrop: offset },
  { content: WindHold },
  { content: DynamicAccum },
  { content: FullLaw, backdrop: pid },
  { content: MathLaw, backdrop: pid },
];
