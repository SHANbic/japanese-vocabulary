import styles from "./cta.module.css";
export default function Cta() {
  return (
    <a
      target="_blank"
      referrerPolicy="no-referrer"
      href="https://www.objectif-japon.com/formation/index/"
    >
      <div className={styles.cta}>Aller sur Objectif Japon</div>
    </a>
  );
}
