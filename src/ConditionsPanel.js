import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Condition from './Condition'

export default function ConditionsPanel(props) {
  return (
    <Col>
      <Row>
        <Col>
          <Condition name={ props.name } condition='Blinded' />
          <Condition name={ props.name } condition='Charmed' />
          <Condition name={ props.name } condition='Deafened' />
          <Condition name={ props.name } condition='Frightened' />
          <Condition name={ props.name } condition='Grappled' />
          <Condition name={ props.name } condition='Incapacitated' />
          <Condition name={ props.name } condition='Invisible' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Condition name={ props.name } condition='Paralyzed' />
          <Condition name={ props.name } condition='Petrified' />
          <Condition name={ props.name } condition='Poisoned' />
          <Condition name={ props.name } condition='Prone' />
          <Condition name={ props.name } condition='Restrained' />
          <Condition name={ props.name } condition='Stunned' />
          <Condition name={ props.name } condition='Unconscious' />
        </Col>
      </Row>
    </Col>
  )
}
