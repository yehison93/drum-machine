/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import DrumButton from "./DrumButton";

const DrumPad = ( { setKeys, powerState, volume, handleChangeDisplay, playSound, audioRefs }) => {
  return(
    <Container style={{minWidth: 300, width:300}}>
      <Row>
        <Col className="justify-content-around text-center">
          <DrumButton
          powerState={powerState}
          volume={volume}
          handleChangeDisplay={handleChangeDisplay}
          setKeys={setKeys}
          playSound={playSound}
          audioRefs={audioRefs}
          />
        </Col>
      </Row>
        {/* <Row>
          <Col className="justify-content-around text-center ">
            <DrumButton powerState={powerState} volume={volume} handleChangeDisplay={handleChangeDisplay} setKeys={setKeys.slice(3, 6)}/>
          </Col>
        </Row>
        <Row>
          <Col className="justify-content-around text-center">
            <DrumButton powerState={powerState} volume={volume} handleChangeDisplay={handleChangeDisplay} setKeys={setKeys.slice(6, 9)}/>
          </Col>
      </Row> */}
    </Container>
  );
}

export default DrumPad;