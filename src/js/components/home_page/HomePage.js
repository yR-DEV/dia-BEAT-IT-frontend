import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { url } from 'inspector';

// const jumbotronStyle = {
//   paddingBottom: '150px',
//   boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
//   marginTop: "50px",
//   marginBottom: "50px"
// }

class HomePage extends Component {

  // componentDidMount = () => {
  //   new WOW.init()
  // }

  render() {
    return (
      <div className="container">
        p
      </div> 
      // <div className=" container jumbotron-container">
      //     <div className="card-panel  ui-interface-backgrounds" style={jumbotronStyle}>
      //         <div className="container">
      //             <h1>DIA-BEAT-IT</h1>
      //             <h3>Because we can dia-beat-this.</h3>
      //             <a><img className="jumbotron-logo" src="https://smallimg.pngkey.com/png/small/71-719828_the-awesome-smiley-face-by-thevideogameguy-d5atcdm-awesome.png"/></a>
      //             <div className="container login-btn-container">
      //                 <div className="row">
      //                   <br></br>
      //                     <Link to="/login" className="waves-effect waves-light btn-large green accent-4 root-url-btn">Login</Link>
      //                 </div>
      //                 <div className="row">
      //                   <br></br>
      //                     <Link to="/create-account" className="waves-effect waves-light btn-large green accent-4 root-url-btn">Create Account</Link>
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      // </div>        
    );
  }
}

export default HomePage;