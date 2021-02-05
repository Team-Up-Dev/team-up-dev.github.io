import classes from "./ContributorCard.module.css";
const ContributorCard = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "5px" }}>Contributor</h1>
      <div className={classes.FlipCard}>
        <div className={classes.FlipCardInner}>
          <div className={classes.FlipCardFront}>
            <img
              className={classes.Image}
              src={`https://robohash.org/2?set=set3`}
              alt="test"
            />
            <h1>John Doe</h1>
          </div>
          <div className={classes.FlipCardBack}>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContributorCard;
