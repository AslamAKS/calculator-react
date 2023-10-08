import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [input, setInput] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');



    const handleClick = (value) => {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            setOperator(input + value);
            setInput((prevInput) => prevInput + value);
            console.log(operator);
        } else {

            setInput((prevInput) => prevInput + value);
            console.log(input);
        }
       

    }
    const calculateResult = () => {
        try {
            const result = eval(input)
            setInput(result)
            setResult(result)
        } catch (err) {
            setInput('')
            setResult('')
        }
    }

    const calculateSquareRoot = () => {
        const sqrt = Math.sqrt(parseFloat(input));
        setResult(isNaN(sqrt) ? "Invalid input" : `${sqrt}`);
    };
    const calculateSquare = () => {
        const sq = Math.pow(input, 2);
        setResult(isNaN(sq) ? "Invalid input" : `${sq}`);
    };

    const oneByx = () => {
        const onebyx = (1 / input)
        setResult(isNaN(onebyx) ? "Invalid input" : `${onebyx}`);
    }

    const percentage = () => {
        const per = (input / 100)
        setResult(isNaN(per) ? "Invalid input" : `${per}`);
    }

    const backspace = () => {
        try {
            const res = input ? input.slice(0, -1) : result.slice(0, -1)
            setInput(res)
            setResult(res)
        } catch (err) {
            setInput('')
            setResult('')
        }
    }

    return (
        <div className="calculator">
            <div className="calc">
                <div className="display">
                    <div className='name'>Calculator</div>
                    <div className='mode'>Standerd</div>
                    <div className="operation">{input}</div>
                    <div className="result">{result ? result : input}</div>
                </div>
                <div className="buttons">
                    <div className="row">
                        <div className="col symbol" onClick={percentage}>%</div>
                        <div className="col symbol" onClick={() => {  setInput(''); setOperator(); setResult(); }}>CE</div>
                        <div className="col symbol" onClick={() => {  setInput(''); setOperator(); setResult(); }}>C</div>
                        <div className="col symbol" onClick={backspace}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                        </svg></div>
                    </div>
                    <div className="row">
                        <div className="col symbol" onClick={oneByx}><sup>1</sup>&frasl;<sub>x</sub></div>
                        <div className="col symbol" onClick={calculateSquare}>x<sup>2</sup></div>
                        <div className="col symbol" onClick={calculateSquareRoot}><sup>2</sup>&#8730;<sub>x</sub></div>
                        <div className="col symbol" onClick={() => handleClick('/')}>&divide;</div>
                    </div>
                    <div className="row">
                        <div className="col" onClick={() => handleClick('8')}>8</div>
                        <div className="col" onClick={() => handleClick('7')}>7</div>
                        <div className="col" onClick={() => handleClick('9')}>9</div>
                        <div className="col symbol" onClick={() => handleClick('*')}>&#215;</div>
                    </div>
                    <div className="row">
                        <div className="col" onClick={() => handleClick('4')}>4</div>
                        <div className="col" onClick={() => handleClick('5')}>5</div>
                        <div className="col" onClick={() => handleClick('6')}>6</div>
                        <div className="col symbol" onClick={() => handleClick('-')}>-</div>
                    </div>
                    <div className="row">
                        <div className="col" onClick={() => handleClick('1')}>1</div>
                        <div className="col" onClick={() => handleClick('2')}>2</div>
                        <div className="col" onClick={() => handleClick('3')}>3</div>
                        <div className="col symbol" onClick={() => handleClick('+')}>+</div>
                    </div>
                    <div className="row">
                        <div className="col"><sup>+</sup>/<sub>-</sub></div>
                        <div className="col" onClick={() => handleClick('0')}>0</div>
                        <div className="col" onClick={() => handleClick('.')}>.</div>
                        <div className="col equal" onClick={calculateResult}>=</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculator

