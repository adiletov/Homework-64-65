import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import {FormGroup, Input, Label} from "reactstrap";
import {Categories} from "../../Category";

class Edit extends Component {
   state={
       category: Categories[0],
       name: '',
       title: '',
       description: '',
   };
    getOption=(e)=>{
       this.setState({category: e.target.value})
   };

    getVal=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };

    getInfo = async () =>{
           const name = this.state.category;
           const response = await axiosApi.get('/pages/' + name + '.json');

        this.setState({
               description: response.data.description,
               name: response.data.name,
               title: response.data.title,
           });
    };
    componentDidMount() {
        this.getInfo();
    }
   async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.category !== prevState.category){
          await  this.getInfo()
        }
    }

    putRequire=async ()=>{
        const id = this.state.category;
        const obj={
            name: this.state.name,
            title: this.state.title,
            description: this.state.description,
        };
        await axiosApi.put('/pages/' + id + '.json', obj);
        this.props.history.replace('/pages/' + id)
    };

    render() {
        return (
            <div>
                <FormGroup>
                    <Label for="category">Select</Label>
                    <select
                        name="category"
                        onChange={this.getOption}
                        value={this.state.category}
                    >
                        {Categories.map(id=> <option  key={id}>{id}</option>)}
                    </select>
                </FormGroup>
                <FormGroup>
                    <Label >Content:</Label>
                    <Input type="text" name="name"  placeholder="Введите название" value={this.state.name} onChange={(e)=>this.getVal(e)}/>
                    <Input type="text" name="title"  placeholder="Введите текст" value={this.state.title} onChange={(e)=>this.getVal(e)}/>
                    <Input type="textarea" name="description"  placeholder="Введите текст" value={this.state.description} onChange={(e)=>this.getVal(e)}/>
                    <button onClick={this.putRequire}>Save</button>
                </FormGroup>
            </div>
        );
    }
}

export default Edit;