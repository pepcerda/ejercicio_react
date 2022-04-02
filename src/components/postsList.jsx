import React from 'react';
import Post from './post';

class PostsList extends React.Component {

    render() {
        return (
            <div id="posts" className="row mt-5 mx-2">
                {this.props.posts
                    .filter((post) => post.title.includes(this.props.busca))
                    .map((post) => (
                        <div className="col-12 col-md-4 mb-2" key={post.id}>
                            <Post
                                title={post.title}
                                image={post.image}
                                text={post.text.slice(0, 100)}
                                autor={post.autor}
                                createdAt={post.createdAt}
                                comments={post.comments}
                            />
                        </div>
                    ))}
            </div>
        )
    }
}

export default PostsList; 