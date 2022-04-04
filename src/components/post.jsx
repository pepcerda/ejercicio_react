import React, { useState } from "react";
import { postLike } from "../services/postsService";

function Post({ id, image, likes, createdAt, text, author, comments, onLoginFailure}) {

    const [likeClass, setLikeClass] = useState(likes === 0 ? "bi bi-heart" : "bi bi-heart-fill liked");
    const [likesState, setLikesState] = useState(likes);

    function aumentarLike(id) {
        const token = localStorage.getItem("token");
        postLike(token, id)
            .then(() => {
                console.log("response" + likesState);
                if (likesState === 0) {
                    setLikeClass("bi bi-heart-fill liked");
                    setLikesState(likesState + 1);
                } else {
                    setLikesState(likesState + 1);
                }
            }).catch(() => {
                console.log("Entro aqui");
                localStorage.removeItem("token");
                onLoginFailure(true); 
            })
    }

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <div className="card-title mb-2">
                    <div>
                        <button className="btn" onClick={() => {
                            aumentarLike(id);
                        }
                        }><i className={likeClass}></i></button>
                        <span>{likesState}</span>
                    </div>
                </div>
                <div className="card-text my-1">
                    <p className="creador">
                        Creado el: {createdAt}
                    </p>
                </div>
                <div className="card-text text-justify texto">
                    <p>{text}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="col-7">
                        <p className="creador">Creado por: @{author}</p>
                    </div>
                    <div className="col-5 d-flex align-items-end justify-content-end">
                        <p className="creador"><i className="bi bi-chat-left"></i> Comments ({comments})</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Post; 