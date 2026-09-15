import ActionWord from '../components/ActionWord';
import Formula from '../components/Formula';
import { damped } from './curves';

const DerivativeIntro = () => (
  <ActionWord first="D" rest="ERIVATIVE" cn="微分" />
);

const BlindToRate = () => (
  <>
    <div className="t-big">变化率越大</div>
    <div className="t-big">反推力越强</div>
  </>
);

const EarlyBraking = () => (
  <div className="t-big">预判惯性，提前收力</div>
);

const CombinedLaw = () => (
  <Formula>P × 误差 + D × 误差的变化率</Formula>
);

export default [
  { content: DerivativeIntro },
  { content: BlindToRate },
  { content: EarlyBraking, backdrop: damped },
  { content: CombinedLaw },
];
