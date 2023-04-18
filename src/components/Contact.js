import React from 'react';
export default class extends React.Component{
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: '', email: '' ,subject:''};
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
    }

render() {
  return (
    <>
    <div className="container contact">
      <h2 className="main-title">Contact</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input required onChange={this.handleChangeName} name="name" placeholder="Name"value = {this.state.name} className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input required  onChange={this.handleChangeEmail} name="email" placeholder="Email" value={this.state.email} className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input onChange={this.handleChangeSubject}
              name="subject"
              value={this.state.subject}
              required
              placeholder="Subject"
              className="contact-input"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChangeText}
            required
            value={this.state.feedback}
            placeholder="Message"
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <button onClick={this.handleSubmit} className="sendButton" ><div id ="button"  >Send Message</div></button>
        </div>
      </div>
    </div>
    <script type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
    
  </>
  )
}
  handleChangeText(event) {
   
      this.setState({feedback: event.target.value})
  }
  handleChangeEmail(event) {
   
    this.setState({email: event.target.value})
}
handleChangeSubject(event) {
   
  this.setState({subject: event.target.value})
}
handleChangeName(event) {
   
  this.setState({name: event.target.value})
}

  handleSubmit (event) {
    if(!this.state.email.trim().length || !this.state.subject.trim().length ||!this.state.name.trim().length||  !this.state.feedback.trim().length){
      alert('Fill out every cell of the form!');
    }
    else{
      document.getElementById('button').innerHTML = String('Sending...');
      const templateId = 'template_ws2xu86';
      this.sendFeedback(templateId, {subject: this.state.subject,to_name:"Systemiai team", message: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
  }
  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	"service_vjvxhiq", templateId,
  	variables
  	).then(()=> {
      document.getElementById('button').innerHTML = String("Send Message");
      alert('Sent!');
  	},(err) => {
      document.getElementById('button').innerHTML = String("Send Message");
      alert(JSON.stringify(err));
    }
    )
  }
}
