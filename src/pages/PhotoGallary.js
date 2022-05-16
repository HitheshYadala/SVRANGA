import React, { Component } from 'react'
import Gallery from "react-photo-gallery";

export default class PhotoGallary extends Component {

     columns(containerWidth) {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
        return columns;
      }

  render() {
    return (
        <div>
        {/* <Gallery photos={photos} columns={columns} direction="column" /> */}
        HI
      </div>
    )
  }
}
