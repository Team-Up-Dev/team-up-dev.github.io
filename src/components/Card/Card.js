import "./Card.scss";
import list from "./Profile";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";
const profileList = list.List;

function CreateCards(card, index) {
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={card.picture} alt="scenery" />
        <Card.Body>
          <Card.Title>{card.nama}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <p>technologies</p>
            <ul>
              {card.tags.map((tag, index) => {
                return <li className={tag.toLowerCase()}>{tag}</li>;
              })}
            </ul>
          </ListGroupItem>
          <ListGroupItem>
            <p>team</p>
          </ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={card.url}>get detail</Card.Link>
          <Card.Link href="#">Live demo</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

const CardList = () => {
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

export default CardList;
