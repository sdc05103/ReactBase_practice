import React, { useState } from 'react';
import './InputFieldWithColorPicker.css'; 

function InputFieldWithColorPicker() {
    const [inputValue, setInputValue] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleColorChange = (color) => {  // 버튼을 누를 때마다 setBackgroundColor 실행 
        setBackgroundColor(color);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h1 className="title">Todo App</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="입력"
                style={{ width: '50%', backgroundColor: backgroundColor }}    // 처음 backgoundColor은 white
            />
            <button className="button">입력</button>
            <div className="color-picker-container">
                <button className="color-button white" onclick={() => handleColorChange('white')}></button>
                <button className="color-button red" onClick={() => handleColorChange('red')}></button>
                <button className="color-button yellow" onClick={() => handleColorChange('yellow')}></button>
                <button className="color-button pink" onClick={() => handleColorChange('pink')}></button>
            </div>
            <h2>Todo items</h2>
            <p>{inputValue}</p>
        </div>
    );
}

export default InputFieldWithColorPicker;