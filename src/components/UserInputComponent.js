import React,{Component} from 'react'
import ClassifyResult from './ClassifyResult'
import {Col,Button,Jumbotron,Form,FormGroup,Input,Label} from 'reactstrap'

class UserInput extends Component{
    constructor(props){
        super(props)
        this.state={
            height:'',
            weight:'',
            computeData:false
        }
        this.handleData=this.handleData.bind(this)
        this.sendData=this.sendData.bind(this)

    
    }
    handleData(eventData){
        this.setState({
            [eventData.target.name] : eventData.target.value
        })
    }
    sendData(){
        let checkCondition=this.state.height!=='' && this.state.weight!=='' ? true:false
        this.setState({
            computeData:checkCondition
            }
        )
    }
        

    render(){
        return(
            <>  
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-8">
                                <h1>Body Mass Index Calculator</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container content-container" >     
                    <div className="row" >
                        <div className="col-10 col-md-8 offset-1 offset-md-2 form-content">
                            <Form>
                                <FormGroup row>
                                    <Label for="height" sm={3}><b>Enter Your Height :</b></Label>   
                                    <Col sm={7}>
                                        <Input  type="number" placeholder="in cm" step="1"  name="height"  onChange={this.handleData} />
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3} for="weight"><b>Enter Your Weight :</b></Label>
                                    <Col sm={7}>
                                        <Input type="number" placeholder="in kgs" step="1"  name="weight"  onChange={this.handleData} />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 col-md-8 offset-1 offset-md-2 result-content">
                        <Button color="success" size="md"  onClick={this.sendData}>Ready to Check ? </Button>
                        {this.state.computeData && this.state.height===''?<h2><b>Please enter your height</b></h2> : null}
                        {this.state.computeData && this.state.weight===''?<h2><b>Please enter your weight</b></h2> : null}
                        {this.state.computeData && this.state.height!=='' && this.state.weight!==''? <ClassifyResult weight={this.state.weight} height={this.state.height} /> :<div></div>}

                        </div>
                    </div>
                </div>
                    
                
            </>
        )
    }
}

export default UserInput