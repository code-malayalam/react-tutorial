
import React, {useCallback, useState} from 'react'
import produce from 'immer';


const initialState = [
    {
        name: 'house',
        rooms: [
            {
                name: 'room1',
                text: 'Room1'
            }
        ]
    },
    {
        name: 'car',
        text: 'i20' 
    }
];

function RoomName(props) {
    console.log('Room Name');
    const {
        data,
        onChange
    } = props;

    return (
        <div>
            <div>Update Room Name</div>
            <input value={data.text} onChange={onChange}/>
        </div>
    )
}

const CarName = React.memo((props) => {
    console.log('CarName');
    const {
        data,
        onChange
    } = props;
    return (
        <div>
            <div>Update Car Name</div>
            <input value={data.text} onChange={onChange}/>
        </div>
    )
})



export default function Test() {

    const [info, setInfo] = useState(initialState);

    const onRoomChange = (evt) => {
        
        setInfo((state) => {
            const newState = produce(state, (draft) => {
                draft[0].rooms[0].text = evt.target.value;
            });
            return newState;
        });


    }

    const onCarChange = useCallback((evt) =>{
        setInfo((state) => {
            const newState = produce(state, (draft) => {
                draft[1].text = evt.target.value;
            });
            return newState;
        });
    }, []); 

    console.log(info);

    return (
        <div>
            <RoomName data={info[0].rooms[0]} onChange={onRoomChange}/>
            <CarName data={info[1]} onChange={onCarChange}/>
        </div>
    )
}
