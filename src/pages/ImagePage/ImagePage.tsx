import { Image } from "../../components";
import styles from "./ImagePage.module.css";

export function ImagePage() {
  return (
    <>
      <h3 className="component-name">Image</h3>
      <h4 className="sub-header">Error placeholder image</h4>
      <Image className={styles.image} src="./url/to/nothing" />
    </>
  );
}
