import { FaExclamationTriangle} from 'react-icons/fa'
import Link from 'next/Link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css'


export default function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.error}>
        <h1><FaExclamationTriangle /> 404</h1>
        <h4>Sorry there is nothing here</h4>
        <Link href="/">Go to Home Page</Link>
      </div>
    </Layout>
  );
};
