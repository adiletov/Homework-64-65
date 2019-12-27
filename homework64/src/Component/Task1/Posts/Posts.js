import React, {Component} from 'react';
import axiosApi from "../../../axiosApi";
import {NavLink} from "react-router-dom";

class Posts extends Component {
    state={
      posts: null,
    };
    getRequest = async () => {
        const response = await axiosApi.get('/todolist.json');
        this.setState({posts: response.data})
    };
    componentDidMount() {
        this.getRequest();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // eslint-disable-next-line no-unused-expressions
        this.state.posts !== prevProps ? this.getRequest() : null;
    }
    deletePost=(id)=>{
       axiosApi.delete('/todolist/' + id + '.json')
    };
    render(){
        return(
           <div>
               {this.state.posts ? Object.keys(this.state.posts).map(p=> <div key={p}>
                   <h3>Автор : {this.state.posts[p].author}</h3>
                   <p>Публикация : {this.state.posts[p].publication}</p>
                   <button onClick={()=> this.deletePost(p)}>Delete</button>
                   <NavLink to={`/task1/${p}/edit`}>Редактировать</NavLink>
               </div>) : null}
           </div>
        );
    }
}

export default Posts;