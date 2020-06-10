import React from 'react';
import GeneratorCSS from './Generator.module.css';
const RanString = () => {
    const [state, setState] = React.useState({open: true});

    const toggleWindow = () => {
        state.open ? setState({open: false}) : setState({open:true});
    }

    const options = () => {
        return (
            <div className={GeneratorCSS.Options}>
                {/* <input type="checkbox" id="something"/> */}
                <label><input type="checkbox"/> include capital letters</label>
                <label><input type="checkbox"/> special characters</label>
                <label>Length: <input type="number"/></label>
            </div>
        );
    }
    return (
        <div className={GeneratorCSS.Output}>
            <div className={GeneratorCSS.Title}>
                <h2>
                    Random String
                </h2>
                <button className={GeneratorCSS.Close} onClick={toggleWindow}>{state.open ? 'X' : 'O'}</button>
            </div>
            {state.open ? options() : null}
        </div>
    );
}

export default RanString;