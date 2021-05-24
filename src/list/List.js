import React from 'react';
import Tools from '../components/Tools';
import ListItem from './ListItem';

let arr = [
    {
        title: "Appointment for October",
        descr: 'The patient is rescheduled to October',
        isActive: false
    },
    {
        title: "Appointment for November",
        descr: 'The patient is rescheduled to November',
        isActive: true
    },
    {
        title: "Appointment for December",
        descr: 'The patient is rescheduled to December',
        isActive: false
    },
];

class List extends React.Component {

    myAction(evt) {
        console.log('ON LIST CLICKED', evt.target.value);
        arr = arr.filter((item) => {
            if(evt.target.value === 'all') {
                return true;
            }
            if(evt.target.value === 'active' && item.isActive) {
                return true;
            }
            if(evt.target.value === 'non-active' && !item.isActive) {
                return true;
            }
            return false;
        });
        console.log(arr);

    }

    render() {
        return (
            <Tools onAction={this.myAction}>
                <div className="app-list">
                    {
                        arr.map((obj) => {
                            return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                        })
                    }
                </div>
            </Tools>
        );
    }
}

export default List;
