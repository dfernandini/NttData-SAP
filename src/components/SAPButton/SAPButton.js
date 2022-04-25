import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@ui5/webcomponents-react'; 


/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 */
function SAPButton(props) {

  return (
    <Button
      {...props}
    >
      {props.children}
    </Button>
  )
}

SAPButton.propTypes ={
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * Defines the component design.
   */
  design: PropTypes.oneOf(["Default", "Emphasized", "Positive", "Negative", "Transparent", "Attention"]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  onClick: PropTypes.func,

}

export default SAPButton;