import ActionWord from '../components/ActionWord';
import BalanceDemo from '../components/BalanceDemo';
import Formula from '../components/Formula';
import { offset, pid } from './curves';

const IntegralIntro = () => (
  <ActionWord first="I" rest="NTEGRAL" cn="积分控制" />
);

const Crosswind = () => <div className="t-xl t-xl--sm">外面一直刮着侧风</div>;

const FullLaw = () => (
  <Formula className="formula--law">P × 偏差 + I × 偏差之和 + D × 误差的变化率</Formula>
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
  { content: DynamicAccum },
  { content: FullLaw, backdrop: pid },
];
