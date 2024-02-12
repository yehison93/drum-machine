import { useRef } from "react";

export const usePlaySound = () => {
  const audioRefs = useRef([]);
  const playSound =(index, vol)=>{
    const audio = audioRefs.current[index];
    audio.volume = vol;
    audio.currentTime = 0;
    audio.play();
  }
  return [playSound, audioRefs];
}

