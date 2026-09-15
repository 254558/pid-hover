import useSlideNavigation from './hooks/useSlideNavigation';
import Presentation from './components/Presentation';
import ProgressBar from './components/ProgressBar';
import NavAreas from './components/NavAreas';
import slides from './slides';

export default function App() {
  const { current, next, prev, progress } = useSlideNavigation(slides.length);

  return (
    <>
      <Presentation slides={slides} current={current} />
      <ProgressBar value={progress} />
      <NavAreas onPrev={prev} onNext={next} />
    </>
  );
}
