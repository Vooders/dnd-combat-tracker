import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Hp from './Hp'
import ConditionsPanel from './ConditionsPanel'

export default function Character(props) {
  const [hp, setHp] = useState(props.hp)

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col><Card.Title><h3>{ props.name }</h3></Card.Title></Col>
        </Row>
        <Row>
          <Hp startingHp={props.hp}/>
          <ConditionsPanel name={ props.name } />
        </Row>
      </Card.Body>
    </Card>
  )
}
