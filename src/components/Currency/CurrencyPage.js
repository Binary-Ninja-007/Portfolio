import React from 'react'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Card } from 'react-bootstrap'

function CurrencyPage() {
    const [currencyState, setCurrencyState] = useState("usd");
    const [price, setPrice] = useState(0);
    const [info, setInfo] = useState({});
    
    useEffect(()=> {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyState}.json`)
            .then((res) => {
                setInfo(res.data[currencyState]);
            })
    }, [currencyState]);
    // useEffect(()=>{
    //     var value = price * info.usdt.toPrecision(3);
    //     console.log(value);
    // })

    

    
    return (
        <section>
            <Container fluid className="current-page-section">
                <Container style={{ display: "flex", flexDirection: "row" }}>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setCurrencyState(e.target.value)} style={{ width: "100px", margin: "12px" }}>
                        <option value="usd">USD</option>
                        <option value="eur">EURO</option>
                        <option value="usdt">USDT</option>
                        <option value="flow">FLOW COIN</option>
                        <option value="gtq">YUAN</option>
                    </Form.Select>
                    <InputGroup className="mb-3" style={{margin:"12px"}}>
                        <Form.Control placeholder={price} type='number' onChange={(e) => setPrice(e.target.value)} />
                    </InputGroup>
                </Container>
                <Container className='card-section'>
            <Card className='currencycard' id='usdcard'>
                <Card.Body className='cardbody'>
                    <Card.Title className='cardtitle'>USD</Card.Title>
                        <Card.Text className="cardtext">
                        {info.usd ? (price * info.usd).toPrecision(3): "___"}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className='currencycard' id='eurocard'>
                <Card.Body className='cardbody'>
                    <Card.Title className='cardtitle'>EURO</Card.Title>
                        <Card.Text className="cardtext">
                        {info.eur ? (price * info.eur).toPrecision(3): "___"}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className='currencycard' id='usdtcard'>
                <Card.Body className='cardbody'>
                    <Card.Title className='cardtitle'>USDT</Card.Title>
                        <Card.Text className="cardtext">
                        {info.usdt ? (price * info.usdt).toPrecision(3): "___"}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className='currencycard' id='flowcoincard'>
                <Card.Body className='cardbody'>
                    <Card.Title className='cardtitle'>FLOW COIN</Card.Title>
                        <Card.Text className="cardtext">
                        {info.flow ? (price * info.flow).toPrecision(3): "___"}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className='currencycard' id='gtq'>
                <Card.Body className='cardbody'>
                    <Card.Title className='cardtitle'>YUAN</Card.Title>
                        <Card.Text  className="cardtext">
                        {info.gtq ? (price * info.gtq).toPrecision(3): "___" }
                        </Card.Text>
                </Card.Body>
            </Card>
    </Container>

            </Container>
        </section>
    )
}
export default CurrencyPage;