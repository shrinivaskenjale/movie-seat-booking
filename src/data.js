export const movies = [
  {
    id: 1,
    name: "Oppenheimer",
    price: 10,
  },
  {
    id: 2,
    name: "Inception",
    price: 12,
  },
  { id: 3, name: "Toy Story 4", price: 8 },
  { id: 4, name: "The Lion King", price: 9 },
];

export const initialSeats = [];
for (let i = 0; i < 48; i++) {
  initialSeats.push({
    id: i,
    status: "",
  });
}

initialSeats[23].status = "occupied";
initialSeats[5].status = "occupied";
initialSeats[6].status = "occupied";
initialSeats[40].status = "occupied";
initialSeats[15].status = "occupied";
