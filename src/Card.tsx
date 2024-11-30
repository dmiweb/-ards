const Card = ({children}: {children: JSX.Element[]}): JSX.Element => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;