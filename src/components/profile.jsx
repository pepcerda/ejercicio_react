function Profile({avatar, username, bio}) {
    console.log("Vengo aqui:" + avatar)
    return (
        <div id="contenidoPerfil" className="col-12 col-sm-6 mx-auto mt-5">
            <div className="row px-5 mb-3 justify-content-center">
              <img className="imagen-perfil" src={avatar} alt=""/>
            </div>
            <div className="row text-center mb-3">
              <h4 className="mb-3"><b>@{username}</b></h4>
              <p className="px-5">{bio}</p>
            </div>
        </div>
    );
}

export default Profile;