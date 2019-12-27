import './Forms.css';


import React, {Component} from 'react';
import axiosApi from "../../axiosApi";

class Form extends Component {
    state={
        movie: '',
        text: '',
        id: '',

    };

    putMovie=async ()=>{
        const id = this.state.id;
        const obj = {
            movie: this.state.movie,
            text: this.state.text,
        };
        await axiosApi.put('/movies/' + id + '.json', obj)
    };

    componentDidMount() {
        this.setState({movie: this.props.movie, text: this.props.text, id: this.props.id})
    }

    onChangeVal = (e) => {
        this.setState({[e.target.name] : e.target.value});
        this.putMovie()
    };

    deleteMovie = async (e)=>{
        e.preventDefault();
        const id = this.state.id;
        await axiosApi.delete('/movies/' + id + '.json');
    };


    render() {
        return (
            <div className="form">
                <form action="">
                    <label>Наименование:
                        <input type="text" value={this.state.movie} name="movie" onChange={this.onChangeVal}/>
                    </label>
                    <label >
                        Описание:
                        <textarea type="textarea" rows="5"  cols="40" value={this.state.text} name="text" onChange={this.onChangeVal}/>
                    </label>
                </form>
                <button onClick={this.deleteMovie}>Delete</button>
            </div>
        );
    }
}

export default Form;