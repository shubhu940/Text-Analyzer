import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "succes");
    };
    const handleLoClick = () => {
        console.log('Lowercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "succes");
    };

    const handleOnChange = (e) => {
        console.log('On change');
        setText(e.target.value);
    };

    const handleClearClick = (e) => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text!", "succes");
    };

    //To copy Text
    const handleCopy = () => {
        console.log("I'm a copy");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text!", "succes");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "succes");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#0427432' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#0427432' }}
                        rows="6"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#0427432' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>
            </div>
        </>
    );
}
