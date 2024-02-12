import { Card, Container } from 'react-bootstrap'
import DrumPad from './component/DrumPad'
import keys from './assets/keys.json'
import DrumDisplay from './component/DrumDisplay'
import { usePower } from './assets/CustomHooks/SetPower'
import useKeyPress from './assets/CustomHooks/UseKeyPress'
import { useVolume } from './assets/CustomHooks/UseVolume'
import { useDisplay } from './assets/CustomHooks/UseDisplay'
import { usePlaySound } from './assets/CustomHooks/usePlaySound'

function App () {

  const [powerState, handleChange] = usePower(false);
  const [volume, handleChangeVol] = useVolume(0.5);
  const [display, handleChangeDisplay] = useDisplay('WELCOME')
  const [playSound, audioRefs ] = usePlaySound()
  

  useKeyPress((evento) => {
    const key = document.getElementById(evento.key.toUpperCase())
    if (key) {
      key.classList.add('active');
      setTimeout(() => key.classList.remove('active'), 300);
      key.click();
    }
  });

  return (
    <Container id="drum-machine" style={{width: '100%', minHeight: '100vh'}} className='d-flex justify-content-center align-items-center'>
      <Card style={{width: 1000, minWidth: 300, minHeight: 400}}>
        <Card.Header
        className={`bg-dark text-center h1 ${powerState?'text-primary': 'text-danger'}`}
        >
          {`Drum Machine`}
        </Card.Header>
        <Card.Body  className='d-flex flex-wrap justify-content-around align-items-center bg-secondary text-center text-light px-5'>
          <DrumPad
          setKeys={keys.keys}
          powerState={powerState}
          volume={volume}
          handleChangeDisplay={handleChangeDisplay}
          playSound={playSound}
          audioRefs={audioRefs}
          />
          <DrumDisplay
          volume={volume}
          handleChangeVol={handleChangeVol}
          powerState={powerState}
          handleChange={handleChange}
          display={display}
          handleChangeDisplay={handleChangeDisplay}
          />
        </Card.Body>
      </Card>
    </Container>

  )
}

export default App
