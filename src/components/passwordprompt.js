import React, { Component } from "react"


export default class Password extends Component {

handleSubmit(e){
    e.preventDefault();
    var password = document.getElementById("passprompt")
    if(password && password.value && password.value == "UofL@2019"){
        document.getElementById("password-main").style.display = "none";
        document.getElementById("content").innerHTML = this.props.content;
    } else {console.log("no")};

}

  render() {
    console.log(this.props.content);

    return (
        <div id="password-wrapper">
            <div id="password-main">
                <h2>This page is password protected. Enter the password to continue.</h2>
                <br />
                <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" id="passprompt"></input>
                <button type="submit">Submit</button>
                </form>
                <br />
            </div>
            <div id="content"></div>
        </div>

    )
  }
}
