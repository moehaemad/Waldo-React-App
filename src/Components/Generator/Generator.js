import React, {Component} from 'react';
import Generator from './Generator.module.css';
import RanNum from './RanNum';

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
                <RanNum/>
            </div>
        );
    }
}


export default generator;