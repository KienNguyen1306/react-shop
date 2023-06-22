import cls from "classnames";
import "./MainTitle.css";
function MainTitle({ children, btnLabel, type = "", btnProps = {} }) {
  const classes = cls("main-title", {
    "main-title__search": type === "search",
    "d-flex tcl-jc-between tcl-ais-center": btnLabel,
  });

  return (
    <div className="container">
      <div className={classes}>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default MainTitle;
