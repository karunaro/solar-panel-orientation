import React from "react";
import Filters from "../common/inputs/dropdown-field";
import NumberField from "../common/inputs/text-field";
import HorizontalFlipIcon from "../icons/horizontal-flip-icon";
import ResetIcon from "../icons/reset-icon";
import RotateClockwiseIcon from "../icons/rotate-clockwise-icon";
import VerticalFlipIcon from "../icons/vertical-flip-icon";
import styles from "./actions-bar.module.css";
import * as style from "./actions-bar.style";

const ActionsBar = ({
  changeDegrees,
  changeRotation,
  angleModeAppState,
  showorientationAppState,
  resetAppState,
  
}) => {
  return (
    <div className={styles.actionsBar}>
      <div className={styles.actionBar__actionsContainer}>
        <h3 className={styles.actionsBar__title}>Actions</h3>
        <div className={styles.actionsBar__numberField}>
          <NumberField
            label="Degrees:"
            variant="standard"
            inputProps={{ fontSize: "0.8em", width: "50px" }}
            inputLabelProps={{ fontSize: "0.8em" }}
            onChange={changeDegrees}
            type="text"
            color="secondary"
          />
          <div className={styles.actionsBar__rotateIcon}>
            <RotateClockwiseIcon
              color="secondary"
              tooltipLabel="Change Angle"
              onClick={changeRotation}
              style={style.iconSize}
              buttonSize="small"
            />
          </div>
        </div>
        
      
        <div className={styles.actionBar__resetIcon}>
          <ResetIcon
            color="secondary"
            tooltipLabel="Reset Angle to 0°"
            onClick={resetAppState}
            buttonSize={style.iconButtonSize}
            style={style.iconSize}
          />
        </div>
        <div className={styles.actionsBar__horizontalFlipIcon}>
        <HorizontalFlipIcon
        color="secondary"
        tooltipLabel="showOrientation"
        onClick={showorientationAppState}
        buttonSize={style.iconButtonSize}
        style={style.iconSize}
        />
        </div>
        <div className={styles.actionsBar__horizontalFlipIcon}>
         <VerticalFlipIcon
        color="secondary"
        tooltipLabel="AngleMode"
        onClick={angleModeAppState}
        buttonSize={style.iconButtonSize}
        style={style.iconSize}
        />
        </div>
        
      </div>
    </div>
  );
};

export default ActionsBar;
