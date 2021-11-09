import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Hp from './Hp'

export default function Character(props) {
  const [hp, setHp] = useState(props.hp)

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col><Card.Title>Ork 1</Card.Title></Col>
        </Row>
        <Row>
          <Hp startingHp={props.hp}/>
        </Row>
      </Card.Body>
    </Card>
  )
}
