import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      posts: [
        {
          id: 1,
          title: 'Post 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'Post 2',
          body: 'O corpo 2'
        },
        {
          id: 3,
          title: 'Post 3',
          body: 'O corpo 3'
        }
      ]
    };


  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(nome_a_escolha => (
          <div key={nome_a_escolha.id}>
          <p>{nome_a_escolha.id}</p>
          <h1>{nome_a_escolha.title}</h1>
          <p>{nome_a_escolha.body}</p>
          </div>
        ))}
        
      </div>
    );
  }
}

export default App;
