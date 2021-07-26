import React from 'react';
import {MyNewContext} from '../pages/HomePage';

console.log(MyNewContext);
class InfoLabel extends React.Component {
    // static contextType = MyNewContext;
    render() {
        return (
            <div>
                {/* {this.context} */}
            </div>
        );
    }
}

InfoLabel.contextType = MyNewContext;



export default InfoLabel;