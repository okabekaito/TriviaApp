import React, { useCallback, useEffect, useState, VFC } from "react"
import axios from "axios";

export const PostPage : VFC = () => {
    
    const [posts, setPosts] = useState([]);

    const [formData,setFormData] = useState({title:'',category:'',content:''});

    useEffect(() =>  {
        getPostsData();
    },[])

    const getPostsData = () => {
        axios
            .get('api/posts')
            .then(response => {
                setPosts(response.data);
                console.log(response.data)
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    return (
        <>
            <h1>Post Page</h1>

        </>
    )
}
