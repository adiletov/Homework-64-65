import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import {Form, FormGroup, Input, Label} from "reactstrap";

class Task3 extends Component {
    state={
        text: '',
        textarea: [],
    };

    getText= async ()=>{
        const response = await axiosApi.get('/text.json');
        this.setState({textarea: response.data})
    };
    async componentDidMount() {
        this.getText();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.textarea!==prevState.textarea){
            this.getText()
        }
    }

    getInp=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };


    addText=async (e)=>{
        e.preventDefault();
        const txt = {
            text: this.state.text
        };
        await axiosApi.post('/text.json', txt)
    };
    deleteText=async (e, id)=>{
        e.preventDefault()
       await axiosApi.delete('/text/' + id + '.json');
    };
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label>Text Area</Label>
                        <Input type="textarea" name="text" value={this.state.text} onChange={this.getInp} />
                        <button onClick={this.addText}>ADD</button>
                    </FormGroup>
                    <div>
                        {this.state.textarea ? Object.keys(this.state.textarea).map(id=> <div key={id}>
                            <p>{this.state.textarea[id].text}</p>
                            <button onClick={(event)=>this.deleteText(event, id)}>Delete</button>
                        </div>): null}
                    </div>
                </Form>

            </div>
        );
    }
}

export default Task3;