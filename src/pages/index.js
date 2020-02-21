import React, { Component } from "react"
import '../css/index.css'
import ImageMapper from 'react-image-mapper';
import { withPrefix } from "gatsby";
import logo from '../images/logo_with_text.png';

//<div className="svg-wrapper"><Circle /></div> In case we go back to it


class Homepage extends Component {
  constructor(){
    super();
  }
  state = {
    width: 550
  }

  clicked(area){
    console.log(area.name);
    window.location.href = withPrefix(area.name);
  }

  componentDidMount(){
    var width = 500;
    if(window && typeof window != undefined && window.innerWidth){
      if(window.innerWidth <= 1000){
       width = window.innerWidth / 2 
      }
      if(window.innerWidth <= 800){
        width = window.innerWidth / 1.2
      } else{
        width = window.innerWidth / 3
      }
      this.setState({width: width});

    }

  }


  
  render() {
     const fillcolor = "rgba(58,27,1,0.25)";
    var areas_map = {
      name: "my-map",
      areas: [
        { name: "projects", shape: "poly", 
          coords: [481,143,512,44,539,49,594,71,630,85,680,109,719,136,764,168,785,189,701,253,663,221,626,198,574,174,512,152], fillColor: fillcolor  },
        { name: "multimedia", shape: "poly", 
          coords: [732,289,859,255,867,279,881,319,892,356,902,451,905,559,801,567,802,542,802,473,789,412,776,362,757,322],  fillColor: fillcolor },
        { name: "about", shape: "poly", 
          coords: [686,970,579,806,638,774,660,751,689,719,713,688,721,665,793,731,867,806,839,843,820,864,792,889,768,911,735,936],  fillColor: fillcolor   },
        { name: "group", shape: "poly", 
          coords: [253,777,181,899,227,927,277,947,341,965,431,983,496,988,492,908,486,866,481,830,444,833,383,829,326,814,291,800],  fillColor: fillcolor  },
        { name: "starlab", shape: "poly", coords: [125,619,9,702,25,734,52,772,70,795,97,825,113,848,161,893,236,767,201,735,178,710,147,669,137,649], fillColor: fillcolor },
      ]
    }


    return (
      <>
      <div className="splashPage">
      
        </div>
        <div className="image-map-container">
        <ImageMapper width={this.state.width} imgWidth={908} src={logo} map={areas_map} onClick={area => this.clicked(area)}/>
        <div className="map-selector"></div>
      </div>
        
      </>
    )
  }
}

export default Homepage
