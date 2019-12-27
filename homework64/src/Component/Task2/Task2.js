import React, {Component, Fragment} from 'react';
import './Task2.css';
import {Form, FormGroup, Input} from "reactstrap";
import axiosApi from "../../axiosApi";
import Forms from "../Form/Form";

class Task2 extends Component {
    state={
        // movie: '',
        // text: '',
        movies: null,
    };
    getVal=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };

    getMovies = async ()=>{
        const res = await axiosApi.get('/movies.json');
        this.setState({movies: res.data})
    };

    componentDidMount() {
        this.getMovies()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.movies!== prevState){
            this.getMovies()
        }
    }

    postRequire = async (e)=>{
        e.preventDefault();
        const obj={
            movie: this.state.movie,
            text: this.state.text,
        };
        await axiosApi.post('/movies.json', obj)
    };


    render() {
        return (
            <Fragment>
               <Form className="inpBlock">
                   <FormGroup>
                            <Input type="text" name="movie"  placeholder="Название фильма" onChange={this.getVal}/>
                            <Input type="textarea" name="text"  placeholder="О фильме" onChange={this.getVal}/>
                            <button onClick={this.postRequire}>Add</button>
                   </FormGroup>
               </Form>
                <div>
                    {this.state.movies  ? Object.keys(this.state.movies).map(id=> <Forms key={id}
                        movie={this.state.movies[id].movie}
                        text={this.state.movies[id].text}
                        id={id}
                    />): <div>No Movies</div>}
                </div>
            </Fragment>
        );
    }
}

export default Task2;