import styled from  '../../css/Button.module.css';
import React from "react";

function Calculation(
    { id, text, click, first, second }
){
    /**
     * click event
     */
    function onclick(){
        switch (id) {
            case 'plus' :
                click( first + second ); // setResult
                break;
            case 'minus' :
                click( first - second ); // setResult
                break;
            case 'multiplication' :
                click( first * second ); // setResult
                break;
            case 'division' :
                click( first / second ); // setResult
                break;
            default :
                break;
        }
    }

    return (
        <button
            className={ styled.calculation }
            id={ id }
            onClick={ onclick }
        >
            { text }
        </button>
    )
}

export default Calculation;