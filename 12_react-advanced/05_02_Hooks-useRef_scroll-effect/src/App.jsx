import { useRef } from "react";

export const App = () => {
  const helloRef = useRef(null);
  const homeRef = useRef(null);

  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={homeRef} className="fullscreen-height">
        <h1>Ref exercise</h1>
        <button onClick={() => executeScroll(helloRef)}>Click to scroll</button>
      </div>
      <div ref={helloRef} className="fullscreen-height lightblue-background">
        <h1>Hello</h1>
        <button onClick={() => executeScroll(homeRef)}>Click to scroll</button>
      </div>
    </>
  );
};
