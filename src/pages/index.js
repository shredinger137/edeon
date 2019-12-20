import React, { Component } from "react"
import '../css/epo.css'
import '../css/index.css'
import splash from '../images/splashimage.png'
import ImageMapper from 'react-image-mapper';
import { withPrefix } from "gatsby";
import Circle from '../css/testcircle.svg'

//<div className="svg-wrapper"><Circle /></div> In case we go back to it


class Homepage extends Component {
  clicked(area){
    console.log(area.name);
    window.location.href = withPrefix(area.name);
  }

  
  render() {
    const fillcolor = "rgba(255,255,255,0.5)";
    const data = this.props.data
    var areas_map = {
      name: "my-map",
      areas: [
        { name: "projects", shape: "poly", 
          coords: [221,134,245,21,270,26,289,32,308,40,328,54,349,69,380,101,385,110,278,136,252,144,238,139], fillColor: fillcolor  },
        { name: "multimedia", shape: "poly", 
          coords: [259,149,388,118,415,201,412,234,400,286,299,227,291,196,283,169],  fillColor: fillcolor },
        { name: "about", shape: "poly", 
          coords: [276,270,394,311,372,335,348,362,310,390,282,401,271,345,263,281,263,281],  fillColor: fillcolor   },
        { name: "contact", shape: "poly", 
          coords: [108,379,171,288,189,294,210,297,210,297,217,297,238,295,260,290,268,415,218,412,186,409,144,399],  fillColor: fillcolor  },
        { name: "starlab", shape: "poly", coords: [33,283,139,239,144,254,155,265,165,279,102,376,66,346,46,318 ] },
      ]
    }


    return (
      <>
      <div className="splashPage">
      
        </div>
        <div className="image-map-container">
        <ImageMapper src={splash} map={areas_map} onClick={area => this.clicked(area)}/>
        
        <div className="map-selector"></div>
     




        
      </div>
        
      </>
    )
  }
}

export default Homepage
