import LevelDemo from '../components/LevelDemo';

const Title = () => <div className="t-xl">悬停</div>;

// 标题之后直接进正题：凭什么说它停得住。参照物是重力，量的是机体面法线偏开重力多少 ——
// 动画见 LevelDemo。
// 终点是「悬停」，不是「平」：平只是无风时该有的样子，有风时飞机得斜着顶风才停得住
// （法线偏开重力，让水平分力去顶风的阻力），所以这一页的说法落在「停得住 / 停不住」上，
// 不去说「平了」。画面里没有风，是静止空气里的情形。
// 这行用 t-big--sm（0.85）：画布 440 高，正文按满号排的话上下只剩 45px，字贴着画布；
// 收一档之后那块空就出来了，也省得字跟画布里的「法线」标签一个音量。
const HowLevel = () => (
  <>
    <div className="t-big t-big--sm">法线歪一点，飞机就停不住</div>
    <LevelDemo />
  </>
);

export default [
  { content: Title },
  { content: HowLevel },
];
