// import React from "react";

// const ToDo = ({ text }) => {
//   return (
//     <li>
//       {text}
//       <button>DEL</button>
//     </li>
//   );
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log(ownProps);
// };

// export default connect(null, mapDispatchToProps)(ToDo);

import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () =>
      dispatch(actionCreators.deleteToDo(parseInt(ownProps.id))),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
