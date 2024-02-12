import { useCallback, useState } from "react";

export const useVolume = (initVol) => {
  const [volume, setVolume] = useState(initVol);
  const handleChangeVol = useCallback((e) => {
    const vol = e.target.value
    setVolume(+((vol / 100).toFixed(1)));
  },[]);
  return [volume , handleChangeVol];
}