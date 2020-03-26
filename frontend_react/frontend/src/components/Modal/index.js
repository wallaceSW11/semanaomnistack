import React from 'react';
import './styles.css';

export default class Modal extends React.Component {
  state = {
    pro: false
  }


  async componentDidMount() {
    //let { mostrar } = this.props.mostrar;

   //this.setState({pro: this.props.mostrar})
  }



  render() {
    return (
      <div className={this.props.mostrar ? "showmodal" : "oculto"}>
        {this.props.mensagem}
        <button onClick={e => {this.props.mostrar= false}}>Close</button>
      </div>
    )
  }
}