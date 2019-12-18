import React, { Component } from "react"
import '../css/epo.css'
import '../css/index.css'
import splash from '../images/splashimage.png'


class Homepage extends Component {


  
  render() {

    const data = this.props.data

    return (
      <>
      <div className="splashPage">
        <div className="image-map-container">
          <img src={splash}  useMap="#image_map"></img>
          <div className="map-selector"></div>
          </div>
          <map name="image_map" id="image-map">
  <area alt="Projects" title="Projects" href="/projects" coords="221,134 245,21 270,26 289,32 308,40 328,54 349,69 380,101 385,110 278,136 252,144 238,139 " shape="polygon" />
  <area alt="Multimedia" title="Multimedia" href="/media" coords="259,149 388,118 415,201 412,234 400,286 299,227 291,196 283,169 " shape="polygon" />
  <area alt="About" title="About" href="/about" coords="276,270 394,311 372,335 348,362 310,390 282,401 271,345 263,281 263,281 " shape="polygon" />
  <area alt="Contact" title="Contact" href="/contact" coords="108,379 171,288 189,294 210,297 210,297 217,297 238,295 260,290 268,415 218,412 186,409 144,399 " shape="polygon" />
  <area alt="Starlab" title="Starlab" href="/starlab" coords="33,283 139,239 144,254 155,265 165,279 102,376 66,346 46,318 " shape="polygon" />
</map>



        
      </div>
        
      </>
    )
  }
}

export default Homepage
