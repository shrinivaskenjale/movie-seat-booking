import "./Seats.css";

const Seats = ({ seats, onSeatClick }) => {
  const handleClick = (seat) => {
    if (seat.status !== "occupied") {
      onSeatClick(seat.id);
    }
  };
  const renderedRows = [];

  const rows = 6;
  const seatsInRow = 8;

  for (let i = 0; i < rows; i++) {
    const renderedRow = [];
    for (let j = 0; j < seatsInRow; j++) {
      const seat = seats[i * 8 + j];
      renderedRow.push(
        <div
          key={seat.id}
          className={`seat ${seat.status}`}
          onClick={() => handleClick(seat)}
        ></div>
      );
    }
    renderedRows.push(
      <div key={i} className="row">
        {renderedRow}
      </div>
    );
  }

  return (
    <div className="seats">
      <div className="screen"></div>
      {renderedRows}
    </div>
  );
};

export default Seats;
