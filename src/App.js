import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Welcome(props) {
    // let a = 1;
    // let b = 9;
    // let c = a + b;
    // b +=a + b;
    // console.log(c, b);
    const [value, setValue] = useState();
    return <>
        
           <br/> {props.name} {value ? value.target.value : ''}
        
        <input type={'text'} onChange={setValue} />
    </>;
}
function App() {
    return (
        <div>
            <Welcome name="FIO:" /> <br/>
            <Welcome name="Nomer:" /><br />
            <Welcome name="Email:" /><br />
            <Welcome name="data rogdeniya:" /><br />
            <Welcome name="biografia:" /><br />
        </div>
            
       
    );

}
export default Welcome; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
