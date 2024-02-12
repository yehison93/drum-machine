/* eslint-disable react/prop-types */
import { Badge, Button, Card, Form } from "react-bootstrap"
import { Power } from "react-bootstrap-icons";

const DrumDisplay = ( { powerState, handleChange, volume, handleChangeVol, display, handleChangeDisplay } ) => {

  return(
    <Card id="display" style={{minWidth: 300, width:400}}>
      <Card.Body className="text-center text-light bg-secondary">
        <Button
        onClick={handleChange}
        style={{width: 80, height: 80}}
        className="text-primary fs-1 text-center"
        variant={
          powerState?
            "dark":
            "dark text-danger"
          }
        >
          <Power className="my-3"/>
        </Button>
        {
          powerState?
          <>
            <Card.Title className="text-center">
              <Badge
              style={{minWidth: 200, height: 80, fontFamily: 'calculator'}}
              bg="dark"
              className="d-flex justify-content-center align-items-center fs-1 tex-center">
                {display.toUpperCase()}
              </Badge>
            </Card.Title>
            <Form>
              <Form.Group className="text-start p-3 fs-5">
                <Form.Label>Volumen</Form.Label>
                <Form.Range defaultValue={volume * 100} onChange={ handleChangeVol } onChangeCapture={handleChangeDisplay}/>
              </Form.Group>
            </Form>
          </>:null
        }
      </Card.Body>
    </Card>
  )
}

export default DrumDisplay;