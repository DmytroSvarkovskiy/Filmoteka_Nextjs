import styles from './page.module.scss';
import { MoviesList } from './_components/MoviesList/MoviesList';
export default function Home() {
  return (
    <section className={styles.wrap}>
      <MoviesList />
    </section>
  );
}
