/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap"

const DrumButton = ({ setKeys, powerState, volume, handleChangeDisplay, playSound, audioRefs }) => {
    
  return (
    <>
    {
      setKeys.map((src, index) => {
          return(
            <Button
            disabled={powerState?false:true}
            key={`${index}`}
            id={src.value}
            type='button'
            style={{width: 80, height: 80}}
            className={'drum-pad text-center fs-2 p-0'}
            variant={powerState?"outline-dark":"disable"}
            name={src.name}
            onClick={() => playSound(index, volume)}
            onClickCapture={handleChangeDisplay}
            >
              {src.value}
              <audio className="clip" id={src.value} ref={(ref) => audioRefs.current[index] = ref} src= {src.sound}/>
            </Button>
          )
        })
    }
    </>
      
    
  )
}

export default DrumButton;