import cls from "classnames";

function Button({
  type = "default",
  loading,
  loadingPos = "left",
  size,
  as = "button",
  htmlType,
  className,
  children,
  ...restProps
}) {
  const classes = cls(
    "btn",
    {
      "btn-default": type === "default",
      "btn-category": type === "category",
      "btn-primary": type === "primary",
      "btn-size-large": size === "large",
    },
    className
  );

  const content = (
    <>
      {loading && loadingPos === "left" && <p>ad</p>}
      {children}
      {loading && loadingPos === "right" && <p>ad</p>}
    </>
  );

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...restProps,
  };

  if (as === "a") {
    return <a {...injectedProps}>{content}</a>;
  }

  return <button {...injectedProps}>{content}</button>;
}

export default Button;
