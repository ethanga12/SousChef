import React from 'react';
import Dropzone from 'react-dropzone';

export default class ContactForm extends React.Component {
  render() {
    return(
    <Dropzone
    onDrop={this.onImageDrop}
    accept="image/*"
    multiple={false}>
      {({getRootProps, getInputProps}) => {
        return(
          <div
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {
            <p>Try dropping some files here, or click to select files to upload.</p>
            }
          </div>
        )
    }}
  </Dropzone>);
}
}
