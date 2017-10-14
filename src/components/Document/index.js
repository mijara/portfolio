import React, {Component} from 'react';

class Document extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    }
  }

  componentDidMount() {
    const {slug} = this.props.match.params;

    fetch(`${slug}.html`).then((response) => {
      return response.text();
    }).then((response) => {
      this.setState({
        content: response,
      })
    })
  }

  render() {
    return (
      <section dangerouslySetInnerHTML={{
        __html: this.state.content
      }}/>
    )
  }
}

export default Document;
