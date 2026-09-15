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

const CombinedLaw = () => (
  <Formula label="Proportional + Derivative">P × 倾斜角度 + D × 角速度</Formula>
);

const EarlyBraking = () => (
  <div className="t-big">预判惯性，提前收力</div>
);

export default [
  { content: DerivativeIntro },
  { content: BlindToRate },
  { content: CombinedLaw },
  { content: EarlyBraking, backdrop: damped },
];
