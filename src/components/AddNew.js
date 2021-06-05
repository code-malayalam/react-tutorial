import React from 'react';
import './AddNew.css';
class AddNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titleInput: ''
        }
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            titleInput: value
        });
    }

    handleClick = () => {
        console.log(this.state.titleInput);
    }

    render() {
        return (
            <div className="add-new">
                <input value={this.state.titleInput} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default AddNew;