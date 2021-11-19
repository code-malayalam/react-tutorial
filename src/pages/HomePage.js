import React, {useState, useEffect} from 'react';
import Tools from '../components/Tools';
import SimpleList from '../list/SimpleList';

import {
    MyNewContext
} from './mycontexts';

function HomePage() {

    const [activeState, setActiveState] = useState('all');
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/data.json')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setData(data);
            })
    }, []);


    const handleRefresh = () => {
        console.log('Refresh');
        fetch('/data2.json')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setData(data);
            })
    }



    const onListChange = (evt) => {
        const value = evt.target.value;
        setActiveState(value);

    }

    const handleDelete = (item) => {
            console.log('Delete', item);
            const newList = data.filter((element) => element.id !== item.id);
            setData(newList);
    }

    const handleLabelClick = (arg) => {
        setActiveState(arg);
    }

    const handleAdd = (item) => {
        setData([item, ...data]);
    }


    const newList = data.filter((item) => {
        if(activeState === 'all') {
            return true;
        }
        if(activeState === 'active') {
            return item.isActive === true;
        }
        if(activeState === 'non-active'){
            return item.isActive === false;
        }
        return false;   
    });

    return (
        (
            <div>
                <MyNewContext.Provider value={100}>
                        <Tools onAdd={handleAdd} labelValue={activeState} onAction={onListChange} count={data.length} onRefresh={handleRefresh}>
                            <SimpleList onLabelClick={handleLabelClick} data={newList} onAction={handleDelete} />
                        </Tools>
                </MyNewContext.Provider>
            </div>
        )
    );
    
}

export default HomePage;
