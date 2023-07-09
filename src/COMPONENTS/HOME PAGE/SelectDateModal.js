import { Dialog, DialogContent } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { useRecoilState } from "recoil";
import { selectDateState } from "../../Atom/booking.atom";

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

const SelectDateModal = ({ showSelectModal, setShowSelectModal }) => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectDateState);
  const [screenSize, setScreenSize] = useState(null);

  const isDateDisabled = (date) => {
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
      return false;
    } else {
      return today.getTime() >= date.getTime();
    }
  };

  useEffect(() => {
    const width = window.screen.width;
    setScreenSize(width);
  }, [showSelectModal]);

  useEffect(() => {
    setShowSelectModal(false);
    if (!selectedDate) {
      const date = new Date();
      setSelectedDate(date);
    }
  }, [selectedDate]);

  return (
    <>
      <style>{css}</style>
      <Dialog
        fullScreen={screenSize <= 420}
        open={showSelectModal}
        onClose={() => setShowSelectModal(false)}
      >
        <DialogContent>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
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

export default SelectDateModal;
