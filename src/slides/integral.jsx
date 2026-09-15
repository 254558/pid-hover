import ActionWord from '../components/ActionWord';
import BalanceDemo from '../components/BalanceDemo';
import Formula from '../components/Formula';
import { offset, pid } from './curves';

const IntegralIntro = () => (
  <ActionWord first="I" rest="NTEGRAL" cn="积分控制" />
);

const Crosswind = () => <div className="t-xl t-xl--sm">外面一直刮着侧风</div>;

const CrookedScale = () => (
  <>
    <div className="t-big">天平如果一开始就是斜的</div>
    <div className="t-big">需要先配重再使用</div>
  </>
);

const Accumulate = () => (
  <>
    <div className="t-big">风不是固定的</div>
    <div className="t-big">所以要动态调整配重</div>
    <div className="t-big">也就是攒偏差</div>
  </>
);

const FullLaw = () => (
  <Formula>P × 偏差 + I × 偏差之和 + D × 角速度</Formula>
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
  { content: CrookedScale },
  { content: Accumulate },
  { content: DynamicAccum },
  { content: FullLaw, backdrop: pid },
];
