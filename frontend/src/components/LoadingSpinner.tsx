import styles from "./loadingSpinner.module.scss";

export default function LoadingSpinner() {
  return (
    <div className={styles.loadingWrapper}>
      <img src="/loading-icon.png" alt="Loading something good..." className={styles.image} />
    </div>
  );
}