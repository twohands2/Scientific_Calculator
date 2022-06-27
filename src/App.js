import React from "react"
import Number from './components/Button/Number';
import Calculation from './components/Button/Calculation'
import styled from './css/App.module.css'

function App() {
    const [ first,           setFirst         ] = React.useState(0); //첫번째 숫자값
    const [ second,         setSecond        ] = React.useState(0); //두번째 숫자값
    const [ result,         setResult        ] = React.useState(0); //계산 결과값

    return (
        <div className="App">
            <h1 className={ styled.title } >Scientific Calculator!</h1>

            <Number id="result" value={ result }/>
            <Number id="first"   value={ first } change={ setFirst } />
            <Number id="second" value={ second } change={ setSecond } />

            <Calculation id={ "plus" }            text={ "+" } click={ setResult } first={ first } second={ second } ></Calculation>
            <Calculation id={ "minus" }           text={ "-" } click={ setResult } first={ first } second={ second } ></Calculation>
            <Calculation id={ "multiplication" }  text={ "*" } click={ setResult } first={ first } second={ second } ></Calculation>
            <Calculation id={ "division" }        text={ "/" } click={ setResult } first={ first } second={ second } ></Calculation>
        </div>
    );
}

export default App;
