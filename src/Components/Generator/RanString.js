import React from 'react';
import GeneratorCss from './Generator.module.css';

const RanString = (props) => {
    // const [state, setState] = React.useState(0);
    const [state, setState] = React.useState({open: true});

    let values = {
        length: 0,
        start: 1,
        end: 10
    }

    try{
        values = {
            length: state.values,
            start: state.start,
            end: state.end
        };
    }catch(err){
        console.log(err)
    }

    const toggleWindow = () => {
        state.open ? setState({open: false}) : setState({open:true});
        // Update the values object that is a temporary place to put state without
            // entering length, start, end, and open each time to update state.
        values.open = state.open;
    }

    const options = () => {
        return (
            <div>
                <p>Enter Start</p>
                <input type="number" onChange={(e) => values.start = e.target.value}/>
                <p>Enter End</p>
                <input type="number" onChange={(e) => values.end = e.target.value} />
                <button onClick={outputNumber}>Submit</button>
                <p>{state.output}</p>
            </div>
        );
    }

    const outputNumber = (event) => {
        console.log(values);
        values.output = Math.floor(Math.random()*values.end + values.start);
        //re-render the component
        setState({
            open: true,
            output: values.output,
            length: values.length,
            start: values.start,
            end: values.end
            });
    }

    return (
        <div className={GeneratorCss.Output}>
            <div className={GeneratorCss.Title}>
                <h2>
                    Random Number
                </h2>
                <button className={GeneratorCss.Close} onClick={toggleWindow}>{state.open ? 'X' : 'O'}</button>
            </div>
            {state.open ? options() : null}
        </div>
    );

}

export default RanString;