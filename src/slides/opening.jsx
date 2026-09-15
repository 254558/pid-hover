const Title = () => <div className="t-xl">悬停</div>;

const LevelRotor = () => (
  <>
    <div className="t-xl t-xl--sm">风扇要平</div>
  </>
);

const GainQuestion = () => (
  <>
    <div className="t-mid">陀螺仪可以测角度</div>
    <div className="t-big">电流控制风扇转速</div>
  </>
);

export default [
  { content: Title },
  { content: LevelRotor },
  { content: GainQuestion },
];
