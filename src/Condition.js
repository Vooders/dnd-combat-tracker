import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap'

export default function Condition(props) {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleButton
        className="mb-2"
        size="sm"
        id={"toggle-" + props.name + '-' + props.condition }
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        { props.condition }
    </ToggleButton>
  )
}
