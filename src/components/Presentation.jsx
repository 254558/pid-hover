import Slide from './Slide';

export default function Presentation({ slides, current }) {
  return (
    <div className="pres">
      {slides.map(({ content: Content, backdrop }, i) => (
        <Slide key={i} active={i === current} backdrop={backdrop}>
          <Content />
        </Slide>
      ))}
    </div>
  );
}
