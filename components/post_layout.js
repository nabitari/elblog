import style from "@/styles/post.module.css";
import Layout from "./layout";

export default function PostLayout({ children }) {
    return (
        <Layout>
            <div className='cuadro'>
                {children}
            </div>
        </Layout>
    )
}