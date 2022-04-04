import { useState, useEffect } from 'react';
import PostsList from './postsList';
import Search from './search';
import { getPosts } from '../services/postsService';
import Spinner from './spinner';

function PostsPage() {

    const [busca, setBusca] = useState("");
    const [showPosts, setShowPosts] = useState(false);
    const [posts, setPosts] = useState(undefined);

    useEffect(() => {
        const token = localStorage.getItem("token");
        getPosts(token).then((response) => {
            setPosts(response.data);
            console.log(response.data);
        }).then(() => {
            setTimeout(setShowPosts(true), 3000);
        }).catch(() => {
            localStorage.removeItem("token"); 
        });
    }, []);

    return (
        <>
        <Search onSearch={(str) => { setBusca(str); }} />
        {showPosts ? <PostsList posts={posts} busca={busca} /> : <Spinner/>}
        </>
    )

}

export default PostsPage; 