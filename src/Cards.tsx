import Card from "./Card";

const Cards = ({url}: {url: string}): JSX.Element => {
  return (
    <div className="cards">
      <Card>
        <img src={url} className="card-img-top" style={{height: "150px"}} alt="..." />
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>

      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}

export default Cards;