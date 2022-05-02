import React from 'react';
import PropTypes from 'prop-types';
import { SegmentedButton } from '@ui5/webcomponents-react'; 


/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 */
function SAPSegmentedButton(props) {

  return (
    <SegmentedButton
      {...props}
    >
      {props.children}
    </SegmentedButton>
  )
}

SAPSegmentedButton.propTypes ={
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

}

export default SAPSegmentedButton;