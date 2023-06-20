import { useState } from "react";

function Button({ data, count, setCount }) {
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Clicked Me!
      </button>
    </div>
  );
}

// Props & conditional styles
// function Button(props) {
//   return (
//     <button
//       className="btn"
//       // Conditioned styles
//       style={{ background: props.data.variant ? "red" : "" }}
//     >
//       {props.data.title}
//     </button>
//   );
// }

export default Button;
