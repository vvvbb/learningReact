import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET } from "./actions";

function Counter({ name, count, increase, decrease, reset }) {
//   console.log(props);

  return (
    <div className="text-center">
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-outline-info"
          //   onClick={() => props.dispatch({ type: DECREASE })}
          onClick={decrease}
        >
          decrease
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-3"
          //   onClick={() => props.dispatch({ type: RESET })}
          onClick={reset}
        >
          reset
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          //   onClick={() => props.dispatch({ type: INCREASE })}
          onClick={increase}
        >
          increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return { count: state.count, name: state.name };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => dispatch({ type: RESET }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
