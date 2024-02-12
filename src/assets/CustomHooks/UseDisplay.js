import { useState } from "react";


export const useDisplay = (value) => {
  const [display, setDisplay] = useState(value);

  const handleChangeDisplay = (e) => {
    const vol = (e.target.value).split(".")[0];
    setDisplay(e.target.name || vol)
  }

  return [display, handleChangeDisplay];
}