import './App.css';
import Navbar from './components/navbar';
import Post from './components/post';
import Search from './components/search';
import data from './data/posts.json'; 

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <div className='container mt-3'>
        <Search />
      </div>
      <div id="posts" className="row mt-5 mx-2">
        {data.posts.map((post, i) => (
            <div className="col-12 col-md-4 mb-2" key={i}>
            <Post 
              title={post.title}
              img={post.img}
              descripcion={post.descripcion.slice(0, 100)}
              owner={post.owner}
              />
            </div>
        ))}
      </div>
    </div>
  );
}
export default App;
