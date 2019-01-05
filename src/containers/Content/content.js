import React from "react";
import About from "../../components/About/about";
import Services from '../../components/Services/services';
import "../../styles/content.css";

class Content extends React.Component {
  render() {
    return (
      <div className='container offset_content bottom_pad'>
        <About />
        <Services/>
      </div>
    );
  }
}

export default Content;
