import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloReact name="React" />,
  document.getElementById('root')
);