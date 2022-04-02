function Post (props) {
    return (
    <div className="card">
        <img className="card-img-top" src={props.img} alt="Card image cap"/>
        <div className="card-body">
            <div className="card-title d-flex justify-content-between mb-2 align-items-center mb-2">
                <h5 className="mt-1">{props.title}</h5>
                <div>
                    <button className="btn"><i className="bi bi-heart"></i></button>
                    <span>15k</span>
                </div>
            </div>
            <div className="card-text my-1">
                <p className="creador">
                    Creado el: 27/01/2022
                </p>
            </div>
            <div className="card-text text-justify texto">
                <p>{props.descripcion}</p>
            </div>   
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-7">
                    <p className="creador">Creado por: @{props.owner}</p>
                </div>
                <div className="col-5 d-flex align-items-end justify-content-end">
                    <p className="creador"><i class="bi bi-chat-left"></i>Comments (15)</p>
                </div>
            </div>
        </div>
    </div>); 
}
export default Post; 