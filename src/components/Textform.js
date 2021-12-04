import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase", "success");
    }
    const handleLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied successful", "success");
    };
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove text Extra Spaces", "success");
    };
    const handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Clear all text", "success");
    };
    return (
        <div className="row">
          <div className={`col-md-8 my-3 text-${props.mood==='light'?'dark':'light'}`}>
            <h3>{props.headingOne}</h3>
            <textarea style={{backgroundColor : props.mood==='dark'?'#5f6064':'white'}} className={`form-control shadow text-${props.mood==='light'?'dark':'light'}`} id="textbox" rows="10" onChange={handleOnChange} value={text}></textarea>
            <p className="mb-3">{text.split(/\s+/).filter((words)=>{return words.length !==0}).length} words, {text.length} characters and read time <strong>{0.008 * text.split(' ').filter((words)=>{return words.length !==0}).length} </strong>minutes</p>
            <button disabled={text.length===0} type="button" className="btn-sm btn-primary m-1" onClick={handleUppercase}>Text Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn-sm btn-primary m-1" onClick={handleLowercase}>Text Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn-sm btn-primary m-1" onClick={handleCopy}>Copy to clipboard</button>
            <button disabled={text.length===0} type="button" className="btn-sm btn-primary m-1" onClick={removeExtraSpaces}>Remove extra Spaces</button>
            <button disabled={text.length===0} type="button" className="btn-sm btn-primary m-1" onClick={handleClearText}>Clear Text</button>
          </div>
          <div className={`col-md-4 my-3 text-${props.mood==='light'?'dark':'light'}`}>
            <h2>{props.headingTwo}</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
          </div>
        </div>
    )
}
Textform.propTypes = {
    headingOne: PropTypes.string.isRequired,
    headingTwo: PropTypes.string.isRequired,
}
Textform.defaultProps = {
    headingOne: 'Set the Text box heading',
    headingTwo: 'Set the Preview heading',
}
