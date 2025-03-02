import React, { useEffect, useState } from "react"
import { getAllImages } from "./services";


const LidBord = ({setLidBord}) => {

    const [images, setImages] = useState([])
  
    useEffect(() => {
      async function getImages () {
        const response = await getAllImages()
        setImages(response)
      }
      getImages()
    }, [])



  return <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 720,
    margin: "50px auto",
    padding: 10,
    border: "1px solid #000",
    borderRadius: 5,
    textAlign: "center"
  }}>
    <div>Rating by number of likes</div>
    <button onClick={() => setLidBord(false)}>Close</button>
      {images ? images.sort((a, b) => b.countLike - a.countLike).map((image) => (
        <div style={{ display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 10, margin: 5, padding: 5}}>
          <div>
           <img style={{width: 200, height: 200}} src={image.path} alt="" />
          </div>
          <div>
            <div>{image.name}</div>
            <div>Total likes: {image.countLike}</div>

          </div>
        </div>
      )) : null }
    </div>
};

export default LidBord;
