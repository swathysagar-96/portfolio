import React,{Component} from 'react';
import axios from 'axios';
export default class from extends Component{

state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false
}

handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
}

handleLastname=(e)=>{
    this.setState({
        lastname:e.target.value
    })
}

handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })
}

formSubmit=(e)=>{
    e.preventDefault();
    let data={
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
    }
    axios.post('/api/form',data).then(res=>{
        this.setState({
            sent:true,
        },this.resetForm())
    }).catch(()=>{
        console.log('message not sent');
    })

}

resetForm=()=>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''
    })

    setTimeout(() => {
        this.setState({
            sent:false,
        })
    },3000);
}



    render(){
        return(
            <div className="contactcontainer">
                <form>
                    <div className="singleitem">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="name" placeholder="Your Name" value={this.state.name} onChange={this.handleName}/>
                    </div>

                    <div className="singleitem">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" name="lastname" className="lastname" placeholder="Your Last Name"  value={this.state.lastname} onChange={this.handleLastname}/>
                    </div>

                    <div className="singleitem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="name" placeholder="Your email..." value={this.state.email} onChange={this.handleEmail}/>
                    </div>

                    <div className="textarea">
                    <label htmlFor="msg">Message</label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="Your message" value={this.state.message} onChange={this.handleMessage}></textarea>
                    </div>
                     <div className={this.state.sent?`msg msgAppear`:`msg`}>Messsage has been send</div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}