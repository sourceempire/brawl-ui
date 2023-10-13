import { Button } from "../../components";
import styles from './ButtonPage.module.css';


export function ButtonPage() {
  return (
    <>
      <h3 className="component-name">Button</h3>

      <p className={styles.header}>Secondary</p>
      <Button className={styles.testButton}>Button</Button>

      <p className={styles.header}>Primary</p>
      <Button className={styles.testButton} variant="primary">Button</Button>

      <p className={styles.header}>Accent</p>
      <Button className={styles.testButton} variant="accent">Button</Button>

      <p className={styles.header}>Secondary Surface</p>
      <Button className={styles.testButton} variant="surfaceSecondary">Button</Button>
    </>
  );
}
