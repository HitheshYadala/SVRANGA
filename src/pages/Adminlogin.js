import React, { Component } from 'react'

export default class Adminlogin extends Component {

  //Constructor to declare state variables

    constructor(props) {
        super(props);
        this.state = {
          image: null,
          designation : ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleText = this.handleText.bind(this)
    }  

// Description handler function
handleText = event => {
    
    if (event.target.value.length < 1) 
      {
        alert("Please enter Mandatory Fields")
      }
    this.setState({designation : event.target.value})
}


handleChange(event) {
    console.log("EVENT", event.target.files[0].name)
    this.setState({image: event.target.files[0]})
    
  }

//Api call to submit image and designation

handleSubmit = event => {

    if(this.state.designation.length > 1)
    {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "token 3c8d33a6cf5fdcc:b020ce98d33d51f");
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({
            "designation": this.state.designation,
            "designation_image": this.state.image["name"],
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://ngranga.com:8080/api/resource/Gallary", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    else{
        alert("Please Enter Mandatory Fields")
    }
};

  render() {
    return (
        <div>
          <div>
            <div style={{justifyContent : "space-between"}}>
              <img src={this.state.image} />
              <h1>Select Image</h1>
              <input type="file" name="myImage" onChange={this.handleChange} />
              {/* <button style={{backgroundColor : "red" , width : '80px', border: 'none'}}>Upload</button> */}
              <input type="text" name="Designation" onChange={this.handleText} />
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
      </div>
    )
  }
}
