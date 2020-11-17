import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flavor: 'coconut', name: ''};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }

    handleSelectChange(event){
        this.setState({flavor: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + "|||| Flavor selected: " + this.state.flavor);
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>

            <label>
                Pick your favorite flavor:
                <select value={this.state.flavor} onChange={this.handleSelectChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default NameForm;