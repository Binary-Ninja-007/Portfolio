import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

export default  (props)=> {
  return (
    <Container className='card-section'>
            <Card style={{ width: '18rem', margin:"20px"}}>
                <Card.Body>
                    <Card.Title>USD</Card.Title>
                        <Card.Text style={{fontSize:"50px",fontFamily:"arial"}}>
                        {props.inputPrice}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:"20px"}}>
              <Card.Body>
                  <Card.Title>EURO</Card.Title>
                    <Card.Text style={{fontSize:"50px",fontFamily:"arial"}}>
                    {props.inputPrice}
                    </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:"20px"}}>
                <Card.Body>
                    <Card.Title>BITCOIN</Card.Title>
                        <Card.Text style={{fontSize:"50px",fontFamily:"arial"}}>
                        {props.inputPrice}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:"20px"}}>
                <Card.Body>
                    <Card.Title>FLOW COIN</Card.Title>
                        <Card.Text style={{fontSize:"50px",fontFamily:"arial"}}>
                        {props.inputPrice}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:"20px"}}>
                <Card.Body>
                    <Card.Title>YUAN</Card.Title>
                        <Card.Text style={{fontSize:"50px",fontFamily:"arial"}}>
                        {props.inputPrice}
                        </Card.Text>
                </Card.Body>
            </Card>
    </Container>

  );
}
