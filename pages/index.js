
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h3>Hola Xoup</h3>

      </main>
    </Layout>

  )
}
