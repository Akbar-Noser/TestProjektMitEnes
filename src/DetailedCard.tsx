import { title } from "process";
import { useParams } from "react-router";

function DetailedCard(id:number) {

  return (
    <div className="container-fluid">
      <h3>{title}</h3>
    </div>
  );
}

export default DetailedCard;
