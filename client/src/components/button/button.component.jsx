const Button = ({ children, style }) => {
  return <button className={`button ${style}`}>{children}</button>;
};

export default Button;
