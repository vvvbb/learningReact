import React from "react";

export default function FunctionCounter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p className="text-center">{count}</p>
      <div className="pb-3">
        <button
        className="btn btn-outline-dark"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          decrease
        </button>
        <button
        className="btn btn-outline-dark mx-3"
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
        <button
        className="btn btn-outline-dark"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase
        </button>
      </div>
    </div>
  );
}
