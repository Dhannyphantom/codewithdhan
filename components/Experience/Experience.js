import "./Experience.css";
export default function Experience({ item }) {
  const isRight = item.direction === "right";
  return (
    <div className="experience">
      <h6 className={isRight ? "right" : "left"}>{item.title}</h6>

      {item.content.split(". ").map((str) => (
        <p className={isRight ? "right right-text" : "left-text"}>{str}</p>
        // <li className="left-text"> {str} </li>
      ))}
    </div>
  );
}
