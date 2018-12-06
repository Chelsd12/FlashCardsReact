import React from "react";
import { Form } from "semantic-ui-react";

class CardForm extends React.Component {
    state = { question: "", answer: "" };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({ question: "", answer: "" });
    };//handleSubmit end

    handleChange = (e) => {
        this.setState({ [e.target.question]: e.target.answer });
    };//handleChange end

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Question"
                        placeholder="Question"
                        name="Question"
                        value={this.state.question}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Answer"
                        placeholder="Answer"
                        name="Answer"
                        value={this.state.answer}
                        onChange={this.handleChange}
                    />
                    <Form.Button>Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
};//class CardForm end

export default CardForm;