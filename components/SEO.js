import Head from 'next/head';

export default function SEO({
    title = 'Awesome Website',
    description = 'Learn cool stuff from a collection of awesome things.',
}) {
    return (
        <>
            <Head>
                <title key="title">{title}</title>
                <meta key="description" name="description" content={description} />
            </Head>
        </>
    );
}