import { useState} from "react";

export const usePower = (state) => {
  const [powerState, setPowerState] = useState(state);

  const handleChange = () => {
    powerState?setPowerState(false) : setPowerState(true)
  };

return [powerState, handleChange]
  
}
