import React from 'react';
import Post from './post';

function PostsList ({posts, busca, onLoginFailure}) {

    return (
        <div id="posts" className="row mt-5 mx-2">
            {posts
                .filter((post) => post.text.includes(busca))
                .map((post) => (
                    <div className="col-12 col-md-4 mb-2" key={post.id}>
                        <Post
                            id= {post.id}
                            image={post.image}
                            text={post.text.slice(0, 100)}
                            author={post.author.name}
                            createdAt={post.createdAt.split('T')[0]}
                            comments={post.comments.length}
                            likes={post.likes}
                            onLoginFailure={onLoginFailure}
                        />
                    </div>
                ))}
        </div>
    );
}

export default PostsList; 