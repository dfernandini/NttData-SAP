import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from '@ui5/webcomponents-react'; 


function SAPCalendar(props) {

    return (
      <Calendar
        {...props}
      >
        {props.children}
      </Calendar>
    )
  }

SAPCalendar.propTypes ={
    /**
     * The label of the button.
     * @uxpinpropname Label
     * */
    children: PropTypes.node,
  
    /**
     * Defines the type of selection used in the calendar component.
     */
     selectionMode: PropTypes.oneOf(["Multiple", "Range", "Single"]),
   

  }
  
export default SAPCalendar;