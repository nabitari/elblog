import PostLayout from "@/components/post_layout";
import SEO from "@/components/SEO";
import { getAllPostIds,getPostData } from "@/lib/lector";


export async function getStaticProps ({params}){
    const postData = await getPostData(params.id);
    return{
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({postData}){
    return(
        /*De aca sale el contenido de cada post, el como se muestra*/
        <PostLayout>
        <SEO title={postData.titulo} description="Algo para el cambio"/>
            <article>
                <h1>{postData.titulo}</h1>
                <p style={{fontSize:"12px",borderBottom: "#a38359 1px solid"}}>Fecha: {postData.fecha}</p>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </PostLayout>
    );
}