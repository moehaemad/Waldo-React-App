import React, { Component } from 'react';
import './Generator.css';


class RanString extends Component {

    state = {
        open: true,
        capital: false,
        special: false,
        output: '',
        length: 5
    }

    toggleWindow = () => {
        this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    changeValues = (e, type) => {
        const checked = e.target.checked;
        if (type === 'capital') this.setState({capital: checked});
        if (type === 'special') this.setState({special: checked});
    }
    
    pickAtRandom = (size) => {
        let toReturn = [];
        for (let i=0; i<this.state.length; i++){
            toReturn.push(Math.floor(Math.random()*(size-1)));
        }
        return toReturn;
    }

    createString = () => {
        const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const special = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `@`, `^`, `_`, `{`, `}`, `~`];
        const ABC = abc.map(el => el.toUpperCase());
        let full = abc;
        let toReturn = [];
        if (this.state.capital) full = full.concat(ABC);
        if (this.state.special) full = full.concat(special);

        let indexes = this.pickAtRandom(full.length);
        indexes.forEach((el) => {
            toReturn.push(full[el]);
        });

        this.setState({output: toReturn});
    }

    options = () => {

        return (
            <div className='Options'>
                {/* <input type="checkbox" id="something"/> */}
                <label><input type="checkbox" onChange={(e) => this.changeValues(e, 'capital')}/> include capital letters</label>
                <label><input type="checkbox" onChange={(e) => this.changeValues(e, 'special')}/> special characters</label>
                <label>Length: <input type="number" onChange={(e)=> {
                    this.setState ({length: e.target.value});
                }}/></label>
            </div>
        );
    }

    render() {
        const output = this.state.output;

        return (
            <div className='Output'>
                <div className='Title'>
                    <h2>
                        Random String
                    </h2>
                    <button className='Close' onClick={this.toggleWindow}>{this.state.open ? 'X' : 'O'}</button>
                </div>
                {this.state.open ? this.options() : null}
                <button onClick={(e) => this.createString()}>Submit</button>
                <p>
                    {output}
                </p>
            </div>
        );
    }
}

export default RanString;