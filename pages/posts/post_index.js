import { Inter } from '@next/font/google'
import { getSortedPostData } from '@/lib/lector';
import Link from 'next/link';
import Layout from '@/components/layout';
import Image from 'next/image';
import stylePost from '@/styles/posts.module.css';
const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
    const allPostsData = getSortedPostData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <h3 style={{margin:"2em 0",textAlign:"center"}}>All Post</h3>
            <main className={stylePost.main}>
                <ul className={stylePost.lista}>
                    {allPostsData.map(({ id, image,short, fecha, titulo }) => (
                        <li className={stylePost.items} key={id}>
                            <Image className={stylePost.imagen} src={image} alt="a cambiar" width={200} height={200}></Image>
                            <Link className={stylePost.titulo} href={`/posts/${id}`}>{titulo}</Link>
                            <p className={stylePost.p}>{short}</p>
                            <p className={stylePost.fecha}>Fecha: {fecha}</p>
                        </li>
                    ))
                    }
                </ul>
            </main>
        </Layout>

    )
}
