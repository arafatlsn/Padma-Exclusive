import { atom } from "recoil";

export const travellingStartState = atom({
  key: "travellingStart",
  default: "Chandpur",
});

export const startLocationState = atom({
  key: "startLocation",
  default: "Chandpur",
});

export const goingtoLocationState = atom({
  key: "gointoLocation",
  default: "Gulistan",
});

export const selectDateState = atom({
  key: "selectedDate",
  default: new Date(),
});

export const returnDateState = atom({
  key: "returnDate",
  default: new Date(),
});

export const ticketTypeState = atom({
  key: "ticketType",
  default: "One Way",
});

export const stepState = atom({
  key: "stepValue",
  default: 0
})

export const ticketState = atom({
  key: "ticket",
  default: {}
})

export const seatModalState = atom({
  key: "seatModal",
  default: false
})

export const selectedSeatState = atom({
  key: "selectedSeats",
  default: []
})

export const userPhoneState = atom({
  key: "userPhone",
  default: ""
})
