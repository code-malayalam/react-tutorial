import React, {useState, useEffect} from 'react';
import Tools from '../components/Tools';
import SimpleList from '../list/SimpleList';

import {
    MyContext,
    MyNewContext
} from './mycontexts';

function HomePage() {

    const [showLabel, setShowLabel] = useState(true);
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

    const handleShowLabel = (evt) => {
        setShowLabel(evt.target.checked);
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
                <div>
                <input checked={showLabel} onChange={handleShowLabel} type="checkbox"></input> Show Label
                </div>
                <MyNewContext.Provider value={100}>
                    <MyContext.Provider value={showLabel}>
                        <Tools onAdd={handleAdd} labelValue={activeState} onAction={onListChange} count={data.length} onRefresh={handleRefresh}>
                            <SimpleList onLabelClick={handleLabelClick} data={newList} onAction={handleDelete} />
                        </Tools>
                    </MyContext.Provider>
                </MyNewContext.Provider>
            </div>
        )
    );
    
}

export default HomePage;
