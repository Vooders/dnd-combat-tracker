import React, { useRef, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

export default function Hp(props) {
  const hpModification = useRef(null)
  const [hp, setHp] = useState(props.startingHp)

  return (
    <>
      <Col xs={1}>
        <h4>{ hp } HP</h4>
      </Col>
      <Col xs={1}>
        <Button variant="outline-success" size="sm" onClick={() => setHp(hp + Number(hpModification.current.value))}>Heal</Button>{' '}
        <Form.Control size="sm" type="number" ref={hpModification} style={{width:80 + 'px'}}/>
        <Button variant="outline-danger" size="sm" onClick={() => setHp(hp - hpModification.current.value)}>Damage</Button>{' '}
      </Col>
    </>
  )
}
