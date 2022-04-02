function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary menu-fijo'>
        <div className="container-fluid">
          <a className="navbar-brand" href="/index.html"><span className="px-2">ThreePosts</span><i className="bi bi-postcard-heart"></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./perfil.html"><i className="bi bi-person-circle"></i> Perfil</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;