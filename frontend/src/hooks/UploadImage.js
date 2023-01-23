import React, {useState} from "react";
import axios from "../api/axios";

const UploadImage = () => {
    const [picture, setPicture] = useState({});
  
    const uploadPicture = (e) => {
      setPicture({
        /* contains the preview, if you want to show the picture to the user
             you can access it with this.state.currentPicture
         */
        picturePreview: URL.createObjectURL(e.target.files[0]),
        /* this contains the file we want to send */
        pictureAsFile: e.target.files[0],
      });
    };
  
    const setImageAction = async (event) => {
      event.preventDefault();
  
      let formData = new FormData();
      formData.append("file", picture.pictureAsFile);
      formData.append("name", "hello world")
  
      const data = await axios.post("/upload", {
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      });
    //   const uploadedImage = await data.json();
    //   if (uploadedImage) {
    //     console.log("Successfully uploaded image");
    //   } else {
    //     console.log("Error Found");
    //   }
    console.log("this is the formdata", formData)
    };
  
    return (
      <div className="content landing">
        <form onSubmit={setImageAction}>
          <input type="file" name="image" onChange={uploadPicture} />
          <br />
          <br />
          <button type="submit" name="upload">
            Upload
          </button>
        </form>
      </div>
    );
  };

  export default UploadImage