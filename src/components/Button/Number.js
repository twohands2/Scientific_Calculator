import React from "react";
// import PropType from 'prop-types';

function Number(
    { id, value, change }
) {
    /**
     * value setting
     */
    function onchange(
        props
    ){
        //setFirst, setSecond
        change(props.target.valueAsNumber);
    }

    /*
     * disabled setting
     */
    let status;
    switch ( id ) {
        case 'result' :
            status = true;
            break;
        default :
            status = false;
            break;
    }

    return (
        <input
            type="number"
            id={ id }
            onChange={ onchange }
            value={ value }
            disabled={ status }
        />
    )
}

/**
 * proType : properties of type defined
 * @type {{text: number}}
 */
// Number.propType = {
//     text : PropType.number.isRequired
// }

export default Number;