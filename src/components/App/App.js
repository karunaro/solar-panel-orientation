import React, { useState } from "react";
import styles from "./App.module.css";
import Title from "../title/title";
import Grid from "../grid/grid";
import ActionsBar from "../actions-bar/actions-bar";
import swal from 'sweetalert';


function App() {
  const [selectedUrl, setSelectedUrl] = useState(
    "https://i.postimg.cc/VvD9MrgK/Panneau-orientation.png"
  );
  const [displayedUrl, setDisplayedUrl] = useState(
    "https://i.postimg.cc/VvD9MrgK/Panneau-orientation.png"
  );
  const [degrees, setDegrees] = useState(null);
  const [rotation, setRotation] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });
  const [isHorizontallyFlipped, setIsHorizontallyFlipped] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  });
  const [isVerticallyFlipped, setIsVerticallyFlipped] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  });
  const [showorientation, setShoworientation] = useState(true);
  
  const [angleMode, setAngleMode] = useState("Sud_180");
  const [filters, setFilters] = useState({
    topLeft: "none",
    topRight: "none",
    bottomLeft: "none",
    bottomRight: "none",
  });
  const [selectedImages, setSelectedImages] = useState(["topLeft"]);

  

  const changeSelectedImages = (newSelection) => {
    let currentlySelectedImages;
    console.log(newSelection)
    if (selectedImages.includes(newSelection)) {
      currentlySelectedImages = selectedImages.filter(
        (_) => _ !== newSelection
      );
    } else {
      currentlySelectedImages = selectedImages.concat(newSelection);
    }
    setSelectedImages(currentlySelectedImages);
  };

  /* Methods related to actions */
  const changeDegrees = (event) => setDegrees(event.target.value);

  /* Generic function that will be later used to change various image states. */
  const changeState = (
    setState,
    newTopLeftState,
    newTopRightState,
    newBottomLeftState,
    newBottomRightState,
    originalState
  ) =>
    setState({
      topLeft:
        selectedImages && selectedImages.includes("topLeft")
          ? newTopLeftState
          : originalState.topLeft,
      topRight:
        selectedImages && selectedImages.includes("topRight")
          ? newTopRightState
          : originalState.topRight,
      bottomLeft:
        selectedImages && selectedImages.includes("bottomLeft")
          ? newBottomLeftState
          : originalState.bottomLeft,
      bottomRight:
        selectedImages && selectedImages.includes("bottomRight")
          ? newBottomRightState
          : originalState.bottomRight,
    });

  const changeRotation = () => {
    
      if ((angleMode==="Sud_180"))
     { if (degrees  > 0 && degrees < 360) 
        changeState(setRotation, degrees, degrees, degrees, degrees, rotation);
      else swal("", "Please enter a number between 0 and 360. ", "info");
    } 
    if(angleMode==="Sud_0")
    {if (degrees  > 0 && degrees < 360){
      if (degrees => -180) 
        changeState(setRotation, degrees+180, degrees, degrees, degrees, rotation);
        if ( degrees<= 180) 
        changeState(setRotation, degrees-180, degrees, degrees, degrees, rotation);
     
    }
    else swal("", "Please enter a number between -180 and 180. ", "info");
  }
    
  };

  const changeIsHorizontallyFlipped = () => {
    if (selectedImages.length > 0)
      changeState(
        setIsHorizontallyFlipped,
        !isHorizontallyFlipped.topLeft,
        !isHorizontallyFlipped.topRight,
        !isHorizontallyFlipped.bottomLeft,
        !isHorizontallyFlipped.bottomRight,
        isHorizontallyFlipped
      );
    else alert("Please select an image first.");
  };

  const changeIsVerticallyFlipped = () => {
    if (selectedImages.length > 0)
      changeState(
        setIsVerticallyFlipped,
        !isVerticallyFlipped.topLeft,
        !isVerticallyFlipped.topRight,
        !isVerticallyFlipped.bottomLeft,
        !isVerticallyFlipped.bottomRight,
        isVerticallyFlipped
      );
    else alert("Please select an image first.");
  };

  const resetAppState = () => {
    if (selectedImages.length > 0) {
      changeState(setRotation, 0, 0, 0, 0, rotation);
      changeState(
        setIsHorizontallyFlipped,
        false,
        false,
        false,
        false,
        isHorizontallyFlipped
      );
      changeState(
        setIsVerticallyFlipped,
        false,
        false,
        false,
        false,
        isVerticallyFlipped
      );
      changeState(setFilters, "None", "None", "None", "None", filters);
    } else alert("Please select an image first.");
  };
  const showorientationAppState = () => {
    setShoworientation(!showorientation);
    
  };
  
  const angleModeAppState = () => {
    if(angleMode==="Sud_180"){
      setAngleMode("Sud_0");
      
    }
    
    if(angleMode==="Sud_0")
    {
      
      setAngleMode("Sud_180")
      
    }
    
  };

  const changeFilters = (event, value) => {
    if (selectedImages.length > 0) {
      if (value && value.title !== null) {
        const newFilter = value.title;
        changeState(
          setFilters,
          newFilter,
          newFilter,
          newFilter,
          newFilter,
          filters
        );
      }
    } else alert("Please select an image first.");
  };

  return (
    <div className={styles.app}>
      <Title />
      <div className={styles.app__gridActionsBarContainer}>
        <Grid
          url={displayedUrl}
          rotation={rotation}
          changeSelectedImages={changeSelectedImages}
          selectedImages={selectedImages}
          isHorizontallyFlipped={isHorizontallyFlipped}
          isVerticallyFlipped={isVerticallyFlipped}
          showOrientation={ showorientation}
         angleMode={angleMode}
        />
        <ActionsBar
          changeDegrees={changeDegrees}
          changeRotation={changeRotation}
          resetAppState={resetAppState}
          showorientationAppState={ showorientationAppState} 
          angleModeAppState={angleModeAppState}         
        />
      </div>
   
    </div>
  );
}

export default App;
