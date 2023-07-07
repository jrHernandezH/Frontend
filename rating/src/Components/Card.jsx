import React, { useState } from 'react';
import '../Styles/card.css'
function Card() {
    const [selectedValue, setSelectedValue] = useState('');
    const [isFading, setIsFading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const resultado=()=>{
        if(selectedValue !== ''){
            setIsFading(true);
            setTimeout(() => {
                localStorage.setItem('resultado', selectedValue);
                window.location.href='./resultado';
              }, 500);
        }else{
            setShowAlert(true);
        }
    }
  return (
    <>
        <div className={`card ${isFading ? 'fade-out fade-out-active' : ''}`}>
            <div className='c-svg'>
                <svg  viewBox="-5 -3 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="radio-group">
                <label>
                    <input type="radio" name="option" value="1" onChange={handleRadioChange}/>
                    <span>1</span>
                </label>
                <label>
                    <input type="radio" name="option" value="2" onChange={handleRadioChange}/>
                    <span>2</span>
                </label>
                <label>
                    <input type="radio" name="option" value="3" onChange={handleRadioChange} />
                    <span>3</span>
                </label>
                <label>
                    <input type="radio" name="option" value="4" onChange={handleRadioChange}/>
                    <span>4</span>
                </label>
                <label>
                    <input type="radio" name="option" value="5" onChange={handleRadioChange}/>
                    <span>5</span>
                </label>
            </div>
            <button className='btn sucess' onClick={resultado}>Submit</button>
            {showAlert && (
        <div className="alert">
          <p>Please select a number before submitting.</p>
        </div>
      )}
        </div>
    </>
  )
}

export default Card