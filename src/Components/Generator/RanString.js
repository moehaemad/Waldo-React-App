import React from 'react';
import GeneratorCSS from './Generator.module.css';
const RanString = () => {
    const [state, setState] = React.useState({
        open: true,
        capital: false,
        special: false
    });

    const toggleWindow = () => {
        state.open ? setState({open: false}) : setState({open:true});
    }

    const changeValues = (e, type) => {
        const checked = e.target.checked;
        const prevState = state;
        if (type === 'capital') setState({open: prevState.open, capital: checked, special: prevState.special});
        if (type === 'special') setState({open: prevState.open, capital: prevState.capital, special: checked});
    }

    const createString = () => {
        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const special = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `@`, `^`, `_`, `{`, `}`, `~`];
        const ABC = abc.map(el => el.toUpperCase());
        let toReturn = [];
        if (state.capital) toReturn = toReturn.concat(abc, ABC);
        if (state.special) toReturn = toReturn.concat(special);

        return (
            <div>
                <p>{toReturn}</p>
            </div>
        );
    }

    const options = () => {

        // const output = createString();

        return (
            <div className={GeneratorCSS.Options}>
                {/* <input type="checkbox" id="something"/> */}
                <label><input type="checkbox" onChange={(e) => changeValues(e, 'capital')}/> include capital letters</label>
                <label><input type="checkbox" onChange={(e) => changeValues(e, 'special')}/> special characters</label>
                <label>Length: <input type="number"/></label>
                {/* {output} */}
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
            {createString()}
        </div>
    );
}

export default RanString;