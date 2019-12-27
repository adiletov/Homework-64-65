import React, {Component} from 'react';
import axiosApi from "../../../axiosApi";

class Edit extends Component {
    state={
        author: '',
        publication: '',
    };

   async componentDidMount() {
       const id = this.props.match.params.id;
        const response = await axiosApi.get('/todolist/' + id + '.json');
       this.setState({author: response.data.author, publication: response.data.publication})
   }
    getInpValue=(e)=>{
      this.setState({[e.target.name]: e.target.value})
    };
    editPost = async () => {
        const id = this.props.match.params.id;
        const postObject = {
          author: this.state.author,
          publication: this.state.publication,
        };
        await axiosApi.put('/todolist/' + id + '.json', postObject)
        this.props.history.replace('/task1')
    };

    render() {
        return (
            <div>
                <input type="text" name="author" value={this.state.author} onChange={this.getInpValue}/>
                <textarea type="text" name="publication" value={this.state.publication} onChange={this.getInpValue}/>
                <button onClick={this.editPost}>Сохранить</button>
            </div>
        );
    }
}

export default Edit;