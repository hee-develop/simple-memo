import { useTitle } from '../hooks/useTitle';

import styles from '../styles/components/footer.module.scss';

type Props = {};

export default function Footer({}: Props) {
  const title = useTitle();

  return (
    <footer
      className={styles.footer}
    >
      <h1 className={styles.footerTitle}>{title}</h1>
    </footer>
  );
}
