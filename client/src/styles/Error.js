const Error = ({ children }) => {
  console.log(children);
  return (
    <div className="error__wrapper">
      <span className="error__alert">!</span>
      <p>{children}</p>
    </div>
  );
}

export default Error;
