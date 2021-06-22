import React from "react";

export default function FunctionHook() {
  // USESTATE HOOK
  const [isVisible, setIsVisible] = React.useState(true);
  const toggle = () => setIsVisible(!isVisible);

  //USEEFFECT HOOK
  React.useEffect(() => {
    console.log("useEffect");
  }, [isVisible]);

  //USEREF HOOK
  const countRef = React.useRef(0);
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("RENDER function hook");

  return (
    <div className="d-flex">
      {isVisible && <h1>I'm visible</h1>}
      <button
        // onClick={() => setIsVisible(!isVisible)}
        onClick={toggle}
        className="btn btn-outline-primary"
      >
        useState
      </button>
      <button onClick={handle}>Clicked {countRef.current} times</button>
    </div>
  );
}
