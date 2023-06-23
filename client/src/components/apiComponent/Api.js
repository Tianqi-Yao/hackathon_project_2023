import { useState } from 'react'
import Nav from '../navComponent/Nav'
import axios from 'axios'

function Api() {
    const [data, setData] = useState("")
    const [other, setOther] = useState("")


    const handleApiBtn = async () => {
        await axios.get("http://localhost:3001/api")
            .then(res => {
                console.log("res.data",res.data);
                setData(res.data.message.result)
                // setOther(res.data.note)
            })
        // const app = await client("user/space-name");
        // const submission = app
        //     .submit("/predict", payload)
        //     .on("data", (data) => console.log(data))
        //     .on("status", (status: Status) => console.log(status));
    }
    const handleMenuBtn = () => {

    }
    const handleTestBtn = () => {
        axios.get("http://localhost:3001/")
            .then(res => {
                console.log(res.data);
                setData(res.data.message)
                setOther(res.data.note)
            })
    }

    return (
        <div className="Api">
            <h1>Api</h1>
            <Nav />
            <main>
                <button onClick={handleApiBtn}>api</button>
                <button onClick={handleMenuBtn}>get menu</button>
                <button onClick={handleTestBtn}>test</button>

                <p>data:{data}</p>
                <p>other: {other}</p>
            </main>
        </div>
    );
}



export default Api;