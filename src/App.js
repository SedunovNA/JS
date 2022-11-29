"import React, {useState} from 'react'; 

function App() {
    // let a = 1;
    // let b = 9;
    // let c = a + b;
    // b +=a + b;
    // console.log(c, b);
    const [value, setValue] = useState();

    return <>
        <p>
            Привет, {value ? value.target.value : ''}
        </p>

        <input type={'text'} onChange={setValue}/>
    </>;
}

export default App;"