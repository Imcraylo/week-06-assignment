// ! PUT ALL THE IMPORT BELOW THIS MESSAGE

import { useState } from "react";

// ! DO NOT PUT ALL YOUR CODE IN JUST App.jsx
// ! USE COMPONENTS
/*
examples of components:
- images container
- single image
- larger image
- ui buttons (left + right)
*/

// Start with a wireframe: build you react app UI first, then start coding

function App() {
  // state
  // - variable to store API image data
  const [images, setImages] = useState([]);

  // - variable to store current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // effects
  // - fetch data from the API
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `${import.meta.env.VITE_UNSPLASH_API_URL}&query=travel&per_page=12`
      );
      const data = await response.json();
      // - once fetched, put it in state
      setImages(data.results);
      console.log(data.results);
    }

    getData();
  }, []);
  // - once it's fetched, put it in state

  // functions(event handlers)
  // - when a user clicks an image
  function clickThumbnail(i) {
    setCurrentImageIndex(i);
  }
  // - when a user presses a button that should switch the image (left and right)
  // when user clicks the "prev button" function should travel (-1) index back to the previous thumbnail, when function reaches the first image, it should loop back to the last image of the thumbnail container
  function prevButton() {
    if (currentImageIndex - 1 < 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  // when user clicks the "next button" function should travel (1) index towards the next thumbnail, when function reaches the last image, it should loop back to the first image of the thumbnail container
  function nextButton() {
    if (currentImageIndex + 1 > images.length - 1) {
      setCurrentImageIndex(currentImageIndex 0);
    }
    else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  return (
    <>
      // Thumbnail container, showing all the images using .map()
      <div className="thumbnail-container"></div>
      // One big image, or a modal that is only sometimes there
      <div className="fullscreen-container"></div>
      <button onClick={prevButton} className="prev">
        {"<"}
      </button>
      <button onClick={nextButton} className="next">
        {">"}
      </button>
    </>
  );
}

export default App;
