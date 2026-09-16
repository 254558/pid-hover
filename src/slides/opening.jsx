import LevelDemo from '../components/LevelDemo';

const Title = () => <div className="t-xl">悬停</div>;

// 标题之后直接进正题：凭什么说它停得住。参照物是重力，量的是机体面法线偏开重力多少 ——
// 动画见 LevelDemo。
// 终点是「悬停」，不是「平」：画面里没有风，是静止空气里的情形，所以这一页只说无风这一档 ——
// 重力方向和机体面法线重合成一条就够（动画里夹角收到 0 的那一下）。
// 有风那一档、以及「停得住 / 停不住」这种结论都不写到页上：板歪没歪一眼看得见，
// 条件（没风）和判断都由讲的人嘴上补 —— 前一版画布左下角常驻那两个词，删了。
// 这行用 t-big--sm（0.85）：画布 440 高，正文按满号排的话上下只剩 45px，字贴着画布；
// 收一档之后那块空就出来了，也省得字跟画布里的「法线」标签一个音量。
// 10 个字在 70.72px 下要 707px，1000px 的正文栏放得下，不用加 t-oneline。
const HowLevel = () => (
  <>
    <div className="t-big t-big--sm">重力和法线重合就可以</div>
    <LevelDemo />
  </>
);

export default [
  { content: Title },
  { content: HowLevel },
];
