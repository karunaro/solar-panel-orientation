import React from "react";
import styles from "./title.module.css";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";

const Title = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.title__text}>solar panel orientation</h1>
      <Tooltip
        title={
          <div>
            <h3>Instructions:</h3>
            <p>
              - Enter the angle degrees into the Degrees input and Click on the change angle button to rotate the solar panel .
            </p>
            <p>
              - The Reset button is to reset the solar panel to the original position
            </p>
            <p>
             -The showOrientation button is to hide and show  the cardinal directions;
            </p>
            <p>
             -The Angle Mode  button is to change  the angle mode Sud_180° or Sud_0°;
            </p>
          </div>
        }
      >
        <HelpIcon
          className={styles.title__helpIcon}
          style={{ fontSize: "3vh" }}
        />
      </Tooltip>
    </div>
  );
};

export default Title;
