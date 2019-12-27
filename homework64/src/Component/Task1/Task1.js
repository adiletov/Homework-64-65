import React, {Component, Fragment} from 'react';
import './Task1.css';
import {Button, } from "reactstrap";
import axiosApi from "../../axiosApi";
import Posts from "./Posts/Posts";

class Task1 extends Component {
    state={
        author:'',
        publication: '',
    };
    getInpVal=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    };
    serverRequest= async (e) =>{
        e.preventDefault();
        const todo = {
            author: this.state.author,
            publication: this.state.publication,
        };
       await axiosApi.post('/todolist.json',todo)
    };

    render() {
        return (
            <Fragment>
                <div className="toDoList">
                    <input className="input " type="text" value={this.state.author} name="author" placeholder="Автор" onChange={this.getInpVal}/>
                    <textarea className="input " type="textarea" value={this.state.publication} name="publication" placeholder="Публикация" onChange={this.getInpVal}/>
                    <Button onClick={this.serverRequest} className="btn" outline color="success">success</Button>

                </div>
                <Posts/>
            </Fragment>
        );
    }
}

export default Task1;