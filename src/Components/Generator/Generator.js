import React, {Component} from 'react';
import Generator from './Generator.module.css';


class generator extends Component {

    state = {
        num: 0,
        numStart: 1,
        numEnd: 10,
        numLength: 10,
        string: ''
    }

    render (){
        return (
            <div className={Generator.Output}>
                <p>Enter length</p>
                <input type="text"/>
                <p>Enter Start</p>
                <input type="text"/>
                <p>Enter End</p>
                <input type="text"/>
            </div>
        );
    }
}


export default generator;