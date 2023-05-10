import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/trungdc-ha/reactjs-ci/posts")
            .then((res) => {
                setPost(res.data)
            })
    }, [])

    return (
        <>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h1>{post.author}</h1>
        </>
    );
}

export default App;
