import React from "react";
import styles from "./BubbleAlert.module.css";

interface BubbleAlertProps {
  value: number;
}

const BubbleAlert: React.FC<BubbleAlertProps> = ({ value }) => {
  return <span className={styles.bubble}>{value > 9 ? "9+" : value}</span>;
};

export default BubbleAlert;
