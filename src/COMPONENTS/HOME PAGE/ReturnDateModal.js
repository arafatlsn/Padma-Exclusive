import { Dialog, DialogContent } from "@material-ui/core";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useRecoilState } from "recoil";
import { returnDateState, selectDateState } from "../../Atom/booking.atom";

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold;
    background-color: #679BFF;
    color: white
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #679BFF;
    color: black
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;

const ReturnDateModal = ({ showReturnModal, setShowReturnModal }) => {
  const [returnDate, setReturnDate] = useRecoilState(returnDateState);
  const [selectedDate] = useRecoilState(selectDateState)

  const isDateDisabled = (date) => {
    if (selectedDate.toDateString() === date.toDateString()) {
      return false;
    } else {
      return selectedDate.getTime() >= date.getTime();
    }
  };
  return (
    <>
      <style>{css}</style>
      <Dialog open={showReturnModal} onClose={() => setShowReturnModal(false)}>
        <DialogContent>
          <DayPicker
            mode="single"
            selected={returnDate}
            onSelect={setReturnDate}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
            disabled={isDateDisabled}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReturnDateModal;
