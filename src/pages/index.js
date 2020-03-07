import React, { Component } from "react"
import '../css/index.css'
import ImageMapper from 'react-image-mapper';
import { withPrefix } from "gatsby";
import logo from '../images/logo_text_lines.png';


class Homepage extends Component {
  constructor(){
    super();
  }
  state = {
    width: 1000
  }

  clicked(area){
    console.log(area.name);
    window.location.href = withPrefix(area.name);
  }

  componentDidMount(){
    var width;
    if(window && typeof window != undefined && window.innerWidth){
      if(window.innerWidth <= 1100){
       width = window.innerWidth
      }
    else{
        width = window.innerWidth / 2.5
      }
      this.setState({width: width});

    }

  }


  
  render() {
     const fillcolor = "rgba(58,27,1,0.25)";
    var areas_map = {
      name: "my-map",
      areas: [
        { name: "our-projects", shape: "poly", 
          coords: [909,363,980,133,1083,158,1221,228,1342,314,1459,458,1228,518,1168,468,1083,418,986,381], fillColor: fillcolor  },
        { name: "multimedia", shape: "poly", 
          coords: [1228,521,1469,465,1502,537,1530,595,1560,693,1573,790,1575,907,1528,1114,1351,1002,1371,912,1367,809,1350,732,1301,617],  fillColor: fillcolor },
        { name: "about", shape: "poly", 
          coords: [1295,1135,1482,1206,1434,1282,1344,1385,1223,1480,1116,1534,1050,1552,1039,1354,1101,1328,1178,1274,1244,1208],  fillColor: fillcolor   },
        { name: "group", shape: "poly", 
          coords: [555,1293,459,1481,515,1513,607,1553,737,1576,877,1586,975,1579,1047,1558,1028,1360,940,1380,853,1386,742,1365,666,1346,580,1315],  fillColor: fillcolor  },
        { name: "starlab", shape: "poly", coords: [560,1240,432,1455,382,1426,301,1354,236,1274,168,1151,282,1090,400,1023,437,1097,483,1163], fillColor: fillcolor },
      ]
    }

    return (
      <>
      <div className="splashPage">
        <div className="stars"></div>
        <div className="clouds"></div>
        <div className="twinkling"></div>
        
        <div className="image-map-container">
        <ImageMapper width={this.state.width} imgWidth={1820} src={logo} map={areas_map} onClick={area => this.clicked(area)}/>
        <div className="map-selector"></div>
      </div>
        
      </div>
      </>
    )
  }
}

export default Homepage
