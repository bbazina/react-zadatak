import React, { useState } from 'react';
import './App.css';

function Colors() {
    
    const [color, setColor] = useState('');
    const [list, setList] = useState([]);
    const [text, setText] = useState('');
    

 
const onClick = async () => {
    const res = await fetch('http://www.colr.org/json/color/random');
    const data = await res.json();
    const textColor = data.colors[0].hex;
    const newList = [...list, color];
    setList(newList)
    console.log(newList)


    setColor(`#${textColor}`);

    
}
    const handleChange = (e) => {
        setText(e.target.value);
    }


  return (
   <>   
  <div onClick={onClick} style={{backgroundColor:'#000000', height: '100px', width: '300px', color}}>{text}</div>
  <ul>
  {list.map((color_hex, i) => <li key={i} style={{color: color_hex}} >{color_hex}</li>)}
  <input value={text} onChange={handleChange}/>
</ul> 
</>
  );
}

export default Colors;
