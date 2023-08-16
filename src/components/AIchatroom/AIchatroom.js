// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

// const ChatPage = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");

//   const sendMessage = async () => {
//     if (inputText.trim() === "") return;

//     setMessages([...messages, { content: inputText, sender: "user" }]);
//     setInputText("");

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: "Bearer YOUR_OPENAI_API_KEY",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         messages: [
//           { role: "system", content: "You are a helpful assistant." },
//           { role: "user", content: inputText },
//         ],
//       }),
//     });

//     const data = await response.json();

//     setMessages([
//       ...messages,
//       { content: data.choices[0].message.content, sender: "assistant" },
//     ]);
//   };

//   useEffect(() => {
//     const welcomeMessage = { content: "Hello! How can I assist you?", sender: "assistant" };
//     setMessages([welcomeMessage]);
//   }, []);

//   return (
//     <Container>
//       <Row>
//         <Col md={6} className="offset-md-3">
//           <h3 className="mt-5 mb-3">Theb.ai Chat</h3>
//           <ListGroup>
//             {messages.map((message, index) => (
//               <ListGroup.Item key={index} className={message.sender}>
//                 {message.content}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//           <Form>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Control
//                 type="text"
//                 placeholder="Type your message..."
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={sendMessage}>
//               Send
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ChatPage;