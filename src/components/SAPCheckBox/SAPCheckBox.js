import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from '@ui5/webcomponents-react'; 


/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 */
function SAPCheckBox(props) {

  return (
    <CheckBox
      {...props}
    >
      {props.children}
    </CheckBox>
  )
}

SAPButton.propTypes ={
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * Defines if the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

/**
   * Defines the value state of the component.
   */
  valueState: PropTypes.oneOf(["Error", "None", "Success", "Warning", "Information"]),
}

export default SAPCheckBox;