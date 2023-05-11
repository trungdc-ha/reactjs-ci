import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://my-json-server.typicode.com/trungdc-ha/reactjs-ci/posts")
                console.log(res)
                setPosts(res.data);
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {
                posts.map((value) => (
                    <div key={value.id}>
                        <h1>{value.id}</h1>
                        <h1>{value.title}</h1>
                        <h1>{value.author}</h1>
                    </div>
                ))
            }
        </>
    )
}

export default App;
