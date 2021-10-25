import React from "react";
import { connect } from "react-redux";
import { addCount } from "../redux/actions/addCount.js";

export const Count = ({ count, addCount }) => {
  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={addCount}>Add to count</button>
    </main>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = { addCount };

export default connect(mapStateToProps, mapDispatchToProps)(Count);
