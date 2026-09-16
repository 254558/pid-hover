import ActionWord from '../components/ActionWord';
import BalanceDemo from '../components/BalanceDemo';
import Formula from '../components/Formula';
import Fraction from '../components/Fraction';
import WindHover from '../components/WindHover';
import { offset, pid } from './curves';

const IntegralIntro = () => (
  <ActionWord first="I" rest="NTEGRAL" cn="积分" />
);

const Crosswind = () => <div className="t-xl t-xl--sm">外面一直刮着侧风</div>;

// 侧风那页只说风一直在吹，没说有风的时候飞机该是什么状态。这一页补上，而且只写条件：
// 「合外力为 0」—— 这是悬停的定义式，没风的时候是它，有风的时候还是它。
// 图（WindHover）就是这条条件成立的证据：重力和推力摆成平行四边形，合出来的那条对角线
// （长 38、横着往左）正好跟风的阻力（也是 38、往右）一样长、方向相反，于是合外力归零。
// 画法和上一张（法线/重力）是同一套：同一块画布、同一套颜色、同一套标签（这一页的视窗收窄
// 过、整图放大 1.212 倍，所以字号看着比上一页大一档，见 WindHover.jsx 末尾）。
// 唯一没跟过去的是上一页那道夹角弧 —— 那页弧的两头都落在画出来的线上，这页照搬会悬在空处，
// 所以这页不标夹角（理由写在 WindHover.jsx 顶部）。
// 原来这行写的是「有风的时候，斜着也停得住」，现在删掉：跟法线那页同一个道理 ——
// 板是斜的一眼看得见，图摆在那儿就够了，再补一句「停得住」是替观众下判断。
// 数字和中文之间留一个空格，跟全 deck 的中英混排一致（符号页的「u 是要给的推力」那种）。
// 这行跟法线那页一样用 t-big--sm（0.85），两页的字号和画布一样大，翻过去才像同一套图。
const WindHold = () => (
  <>
    <div className="t-big t-big--sm">合外力为 0</div>
    <WindHover />
  </>
);

// 三个字母统一用「误差」（不再混用「偏差」）：P 那页、P+D 那页、符号页底下那行注释
// 说的都是误差，这一页的全式要是写成「偏差」，同一个量就有两个名字了。
const FullLaw = () => (
  <Formula className="formula--law">P × 误差 + I × 误差之和 + D × 误差的变化率</Formula>
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

// 「累加」而不是「调整」：风是随机的，误差一直在变，所以 I 那一项是把误差一项一项加上去，
// 不是把当前的误差改小一点 —— 它攒的是历史。下面那个天平演的就是这件事（一直在循环）。
const DynamicAccum = () => (
  <>
    <div className="t-big">由于风是随机的</div>
    <div className="t-big">所以误差需要持续累加</div>
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
