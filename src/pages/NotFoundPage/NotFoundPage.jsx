import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { TfiFaceSad } from 'react-icons/tfi';

export default function NotFoundPage() {
  return (
    <div className={css.errorWrapper}>
      <TfiFaceSad />
      <p className={css.code}>404</p>
      <p>This Page Not Found</p>
      <Link to="/">Return to the main page</Link>
    </div>
  );
}
