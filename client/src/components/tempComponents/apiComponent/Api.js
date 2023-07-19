import Nav from '../../reusableComponent/navComponent/Nav'
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

export default function Api() {
    const [input, setInput] = useState('');
    const [resData, setResData] = useState([]);
    const handleClick = async () => {
        const res = await axios.get(`http://localhost:3005/food/${input}`);
        console.log(res.data);
        const foodList = res.data.message;
        let foodListString = '';
        for (let i = 0; i < foodList.length; i++) {
            foodListString += foodList[i].name + ' ' + foodList[i].calories + ';  ';
        }
        setResData(foodListString);
    }



    return (
        <div className="Api">
            <h1>Api</h1>
            <Nav />
            <textarea type="text" style={{
                width: '500px',  // 定义宽度
                height: '150px',   // 定义高度
                wordWrap: 'break-word'
            }}
                onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={() => { handleClick() }}>Submit</button>
            <p>{resData}</p>
        </div>
    );
}


