import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CustomBootstrapCard from "./CustomBootstrapCard";
import { Link } from "react-router-dom";

function BootstrapCard({ title, text, img_src }: CustomBootstrapCard) {
  
  return (
    <div
      style={{ display: "inline-block", width: "400px", margin: "20px 5px" }}
      className="card"
    >
      <img
        style={{ objectFit: "cover", height: "200px" }}
        className="card-img-top"
        src={"/img/".concat(img_src)}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link
          to={{pathname: "/detailed-card/" + title}}
          className="btn btn-primary"
        >
          Take a closer look
        </Link>
      </div>
    </div>
  );
}

export default BootstrapCard;
