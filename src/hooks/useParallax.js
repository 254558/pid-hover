import { useEffect } from 'react';

// 指针在视口里的归一化位置：左/上 -1，右/下 1。位移的幅度不在这里，在 CSS 里 ——
// 这里只管「指针指到哪儿了」，至于谁跟着动、动多少，是样式的事。
const EASE = 0.14; // 每帧朝目标靠拢的比例：约 0.3 秒跟上，手感是「跟过来」而不是「粘在指针上」
const EPS = 0.002; // 和目标差得足够近就直接归位并停掉 rAF，鼠标不动时不空转

export default function useParallax() {
  useEffect(() => {
    // 系统开了「减弱动态效果」就整个不装 —— 位移是纯装饰，不该和这个设置对抗
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;

    const write = () => {
      root.style.setProperty('--mx', curX.toFixed(4));
      root.style.setProperty('--my', curY.toFixed(4));
    };

    const tick = () => {
      curX += (targetX - curX) * EASE;
      curY += (targetY - curY) * EASE;
      const arrived = Math.abs(targetX - curX) < EPS && Math.abs(targetY - curY) < EPS;
      if (arrived) {
        curX = targetX;
        curY = targetY;
      }
      write();
      raf = arrived ? 0 : requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      // 触屏的 pointermove 是拖动时冒出来的，跟着它晃没有意义
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const clamp = (v) => Math.max(-1, Math.min(1, v));
      targetX = clamp((e.clientX / window.innerWidth) * 2 - 1);
      targetY = clamp((e.clientY / window.innerHeight) * 2 - 1);
      wake();
    };

    // 指针离开窗口（或切走标签页）就慢慢回到正中，别停在斜着的状态
    const recenter = () => {
      targetX = 0;
      targetY = 0;
      wake();
    };

    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', recenter);
    window.addEventListener('blur', recenter);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', recenter);
      window.removeEventListener('blur', recenter);
      if (raf) cancelAnimationFrame(raf);
      root.style.removeProperty('--mx');
      root.style.removeProperty('--my');
    };
  }, []);
}
