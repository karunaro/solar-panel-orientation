import React from "react";
import Image from "./image/image";
import * as style from "./grid.style";
import styles from "./grid.module.css";

const Grid = ({
  url,
  rotation,
  changeSelectedImages,
  selectedImages,
  isHorizontallyFlipped,
  isVerticallyFlipped,
  showOrientation,
  angleMode,
  
}) => {
  // Generate each image's style object based on props.
  const modifyImage = (
    degrees,
    gridPosition,
    horizontallyFlipped,
    verticallyFlipped,
  
  ) => {
    return {
      "--rotation": `rotate(${degrees}deg)`,
      "--border": `${
        selectedImages.includes(gridPosition)
          ? style.selectedImageBorder
          : style.nonSelectedImageBorder
      }`,
      "--horizontalInversion": `${
        horizontallyFlipped ? `rotateY(180deg)` : `rotateY(0deg)`
      }`,
      "--verticalInversion": `${
        verticallyFlipped ? `rotateX(180deg)` : `rotateX(0deg)`
      }`,
    
    };
  };
  return (
    <div className={styles.grid}>
       <div className={styles.btn}>
      <div
        className={styles.grid__imageBorder}
        style={modifyImage(
          rotation.topLeft,
          "topLeft",
          isHorizontallyFlipped.topLeft,
          isVerticallyFlipped.topLeft,
         
        )}
      >
        
        <Image
          imageClassName={`${styles.grid__image} ${styles.grid__image_horizontallyFlipped}`}
          borderClassName={styles.grid__image_selected}
          url={url}
         
          alt={style.alt}
        />
        <div>
      {(angleMode==="Sud_0")? <div>
             <div  className={styles.btn__norddeg}>180°/-180°</div>
<div  className={styles.btn__estdeg}>-90°</div>
<div className={styles.btn__suddeg}>0°</div>
<div className={styles.btn__ouestdeg}>90°</div>
      </div>
      :<div>
      <div  className={styles.btn__norddeg}>360°/0°</div>
<div  className={styles.btn__estdeg}>90°</div>
<div className={styles.btn__suddeg}>180°</div>
<div className={styles.btn__ouestdeg}>270°</div>
</div>
}</div>
      </div>
      <div>
      {showOrientation&& <div>
      
      <div  className={styles.btn__nord}>Nord</div>
<div  className={styles.btn__est}>Est</div>
<div className={styles.btn__sud}>Sud</div>
<div className={styles.btn__ouest}>Ouest</div>
</div>
}</div>
</div>
   
      </div>
      
      
  
  );
};

export default Grid;
