import React, { Component } from 'react';


const jumbotronStyle = {
  paddingBottom: '150px',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

class JumboTron extends Component {
  render() {
    return (
        <div className="jumbotron-container">
            <div className="card-panel grey lighten-2" style={jumbotronStyle}>
                <div className="container">
                    <h1>DIABETUS!</h1>
                    <h3>Let's Dia Beat This</h3>
                    <a><img src="https://smallimg.pngkey.com/png/small/71-719828_the-awesome-smiley-face-by-thevideogameguy-d5atcdm-awesome.png"/></a>
                    <div className="container login-btn-container">
                        <a className="waves-effect waves-light btn red accent-2">Login</a>
                    </div>
                </div>
            </div>
        </div>        
    );
  }
}

export default JumboTron;