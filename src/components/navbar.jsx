import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary menu-fijo'>
        <div className="container-fluid">
          <Link to ='/' className="navbar-brand" ><span className="px-2">ThreePosts</span><i className="bi bi-postcard-heart"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link" ><i className="bi bi-person-circle"></i> Perfil</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;