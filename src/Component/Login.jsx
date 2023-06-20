function Login() {
  // Responding to events
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
