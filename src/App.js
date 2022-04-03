import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import PostsList from './components/postsList';
import Search from './components/search';
import Profile from './components/profile';
import data from './data/posts.json';
import Spinner from './components/spinner';
import Login from './components/login';

class App extends React.Component {
  postsData = data.posts; 
  perfil = {
    avatar: "/pexels-andrea-piacquadio-733872.jpg",
    username: "jcerdar", 
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tellus tempor, tempus est eu."
  }
  state = {
    busca: "", 
    pagina: "I",
    posts: this.postsData, 
    showPosts: false, 
    loginOk: false
  };

  changePage(newPage) {
    this.setState({
      pagina: newPage
    })
  }

  buscar(str) {
    this.setState({
      busca: str
    }) 
  }

  componentDidMount() {
    setTimeout(this.postsCargadas.bind(this), 3000); 
  }

  postsCargadas() {
    this.setState({
      showPosts: true
    })
  }

  autenticar(bool) {
    this.setState({
      loginOk: bool
    })
  }


  render() {
      if(this.state.loginOk) {
        return ( <div className="App">
        <Navbar 
          onClickLogo={(paginaActiva) => {
            if(paginaActiva){
              this.changePage("I"); 
            }
          }}
          onClickPerfil={(paginaActiva) => {
            if(paginaActiva){
              this.changePage("P");
            }
          }}
          
          />
        {this.state.pagina === "P" ? <Profile avatar={this.perfil.avatar} 
        username={this.perfil.username}
        bio={this.perfil.bio}/> : null}
        {this.state.pagina === "I" ? <Search onSearch={(str) => {
          this.buscar(str);
        }}/> : null}
        {(this.state.pagina === "I" && this.state.showPosts)? <PostsList posts={this.state.posts} busca={this.state.busca}/> : <Spinner />}
      </div> );
      } else {
        return (
          <Login onLoginComplete={(bool) => {
            this.autenticar(bool)}}/>
        );
        
      }



     
   
  }
}
export default App;
