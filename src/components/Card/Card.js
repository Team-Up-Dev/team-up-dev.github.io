import "./Card.scss";
import list from "./Profile";
const profileList = list.List;

function CreateCards(card, index) {
  return (
    <div className="cards">
      <img src={card.picture} alt="scenery"></img>
      <div className="cards-text">
        <p>{card.nama}</p>
        <ul>
          {card.tags.map((tag, index) => {
            return <li className={tag.toLowerCase()}>{tag}</li>;
          })}
        </ul>
        <a href={card.url} id="get-detail">
          Get Detail{" "}
        </a>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <>
      <div className="cards-box">
        <div className="cards-box-container" id="cards-list">
          {profileList.map(CreateCards)}
        </div>
      </div>
    </>
  );
};
export default Card;
