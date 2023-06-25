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

export default Button;
