import React from "react";


class Post extends React.Component {

    
    
    constructor (props) {
        super(props)
        this.state={
            likes:0, 
            class: "bi bi-heart",
        }; 
    }

    aumentarLikes() {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                <div className="card-body">
                    <div className="card-title d-flex justify-content-between mb-2 align-items-center mb-2">
                        <h5 className="mt-1">{this.props.title}</h5>
                        <div>
                            <button className="btn" onClick={() => 
                                {   this.aumentarLikes()
                                    this.setState({
                                        class: "bi bi-heart-fill liked"
                                    })
                                }
                                }><i className={this.props.class}></i></button>
                            <span>{this.props.likes}</span>
                        </div>
                    </div>
                    <div className="card-text my-1">
                        <p className="creador">
                            Creado el: {this.props.createdAt}
                        </p>
                    </div>
                    <div className="card-text text-justify texto">
                        <p>{this.props.text}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-7">
                            <p className="creador">Creado por: @{this.props.autor}</p>
                        </div>
                        <div className="col-5 d-flex align-items-end justify-content-end">
                            <p className="creador"><i className="bi bi-chat-left"></i>Comments ({this.props.comments})</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post; 