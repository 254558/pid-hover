import derivative from './derivative';
import integral from './integral';
import opening from './opening';
import proportional from './proportional';
import pwm from './pwm';

export default [
  ...opening,
  ...pwm,
  ...proportional,
  ...derivative,
  ...integral,
];
