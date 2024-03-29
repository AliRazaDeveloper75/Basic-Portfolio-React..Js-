import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <>
      <div className="project-card">
        <img src={props.imgsrc} alt="image" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text} </p>
          <div className="pro-btn">
            <NavLink className="btn" to={props.view}>
              View
            </NavLink>
            <NavLink className="btn" to="url.com">
              Source
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
