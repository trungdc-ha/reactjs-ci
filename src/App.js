import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/trungdc-ha/reactjs-ci/posts")
            .then((res) => {
                setPosts(res.data)
            })
    }, [])

    return (
        <>
            <h1>{posts[0].id}</h1>
            <h1>{posts[0].title}</h1>
            <h1>{posts[0].author}</h1>
        </>
    );
}

export default App;
