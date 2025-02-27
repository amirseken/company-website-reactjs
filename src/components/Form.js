import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'sekenamir@gmail.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
	return (
  	<form className="test-mailing">
    	<div>
			<textarea
				id="test-mailing"
				name="test-mailing"
				onChange={this.handleChange}
				placeholder="Post some lorem ipsum here"
				required
				value={this.state.feedback}
				style={{width: '100%', height: '150px'}}
			/>
			</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }
  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_ws2xu86';
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }
  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	"service_vjvxhiq", templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}