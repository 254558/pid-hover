import { pwm } from './curves';

const Crude = () => <div className="t-big t-oneline">低了就推一格，高了就收一格</div>;

export default [
  { content: Crude, backdrop: pwm },
];
