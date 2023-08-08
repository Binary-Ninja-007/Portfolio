import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from './Card'
import { Container } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function CurrencyPage() {
    const [currencyState, setCurrencyState] = useState("USD");
    const [price, setPrice] = useState(0);
    useEffect (() => {
        console.log(currencyState +"  "+ price);
    })

    return (
        <section>
            <Container Container fluid className="current-page-section" >
                <Container style={{ display: "flex", flexDirection: "row" }}>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setCurrencyState(e.target.value)} style={{ width: "100px", margin: "12px" }}>
                        <option value="USD">USD</option>
                        <option value="EURO">EURO</option>
                        <option value="BITCOIN">BITCOIN</option>
                    </Form.Select>
                    <InputGroup className="mb-3" style={{margin:"12px"}}>
                        <Form.Control placeholder={price} min={0.0001} max={1000000000000} type='number' onChange={(e) => setPrice(e.target.value)} />
                    </InputGroup>
                </Container>
                <Card inputPrice={price}/>
            </Container>
        </section>
    )
}
export default CurrencyPage;