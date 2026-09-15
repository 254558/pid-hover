import ActionWord from '../components/ActionWord';
import Formula from '../components/Formula';
import { creep } from './curves';

const ProportionalIntro = () => (
  <ActionWord first="P" rest="ROPORTIONAL" cn="比例" />
);

const PushBack = () => (
  <>
    <div className="t-big">差得越多，回调越猛</div>
  </>
);

const ProportionalLaw = () => (
  <Formula label="Proportional">P × 误差</Formula>
);

const GainTooLow = () => (
  <>
    <div className="t-big">基本完美</div>
    <div className="t-big">但听说还有高手</div>
  </>
);

export default [
  { content: ProportionalIntro },
  { content: PushBack },
  { content: ProportionalLaw },
  { content: GainTooLow, backdrop: creep },
];
