import styles from "./cta.module.css";
export default function Cta({
  text,
  href,
  onClick = () => {},
}: {
  text: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <a target="_blank" referrerPolicy="no-referrer" href={href}>
      <div className={styles.cta} onClick={() => onClick()}>
        {text}
      </div>
    </a>
  );
}
