import MovieSelect from "./components/MovieSelect";
import Seats from "./components/Seats";
import Showcase from "./components/Showcase";
import "./App.css";
import { useEffect, useState } from "react";
import { initialSeats, movies } from "./data";

const App = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(movies[0].id);
  const [seats, setSeats] = useState(initialSeats);

  const handleMovieChange = (e) => {
    const movieId = Number(e.target.value);
    setSelectedMovieId(movieId);
    localStorage.setItem("selectedMovieId", movieId);
  };

  const handleSeatClick = (seatId) => {
    const seatIndex = seats.findIndex((seat) => {
      return seat.id === seatId;
    });

    const updatedSeats = [
      ...seats.slice(0, seatIndex),
      {
        ...seats[seatIndex],
        status: seats[seatIndex].status === "selected" ? "" : "selected",
      },
      ...seats.slice(seatIndex + 1),
    ];
    setSeats(updatedSeats);

    localStorage.setItem("seats", JSON.stringify(updatedSeats));
  };

  // Effect to load data from local storage
  useEffect(() => {
    const selectedMovieIdFromStorage = JSON.parse(
      localStorage.getItem("selectedMovieId")
    );
    if (selectedMovieIdFromStorage) {
      setSelectedMovieId(selectedMovieIdFromStorage);
    }
    const seatsFromStarage = JSON.parse(localStorage.getItem("seats"));
    if (seatsFromStarage) {
      setSeats(seatsFromStarage);
    }
  }, []);

  const selectedMovie = movies.find((movie) => {
    return movie.id === selectedMovieId;
  });

  let selectedSeatsCount = 0;
  seats.forEach((seat) => {
    if (seat.status === "selected") {
      selectedSeatsCount++;
    }
  });

  let totalPrice = selectedMovie.price * selectedSeatsCount;

  return (
    <section className="section app-section">
      <div className="section-center app-center">
        <MovieSelect
          onMovieChange={handleMovieChange}
          selectedMovieId={selectedMovieId}
        />
        <Showcase />
        <Seats onSeatClick={handleSeatClick} seats={seats} />
        <p className="info">
          You have selected <span className="count">{selectedSeatsCount}</span>{" "}
          seats for the price of $ <span className="total">{totalPrice}</span>.
        </p>
      </div>
    </section>
  );
};

export default App;
