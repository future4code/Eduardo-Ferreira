import { Component } from "react";

export class SecaoCompartilhar extends Component {
  render() {
    return (
      <div className={"share-container"}>
        <button value="Facebook" onClick={this.props.aoEnviar}>
          Facebook
        </button>
        <button value="Twitter" onClick={this.props.aoEnviar}>
          Twitter
        </button>
        <button value="Instagram" onClick={this.props.aoEnviar}>
          Instagram
        </button>
      </div>
    );
  }
}
