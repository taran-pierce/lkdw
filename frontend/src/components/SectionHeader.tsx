import { rubikDoodleShadow } from "../styles/fonts";
import styles from "./sectionHeader.module.scss";

export default function SectionHeader({
  text,
  subText,
}: {
  text: string,
  subText: string,
}) {
  return (
    <>
      <h1 className={`${rubikDoodleShadow.className} ${styles.h1}`}>{text}</h1>
      <p className={styles.p}>{subText}</p>
    </>
  );
}
