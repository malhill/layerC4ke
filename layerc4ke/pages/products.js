import Head from "next/head";

export default function Products() {
    const content = [
        {
            id: 1,
            title: 'Product 1',
            body: 'Product Detail 1',
            image: 'Product Image Here',
        }
    ]

    return (
        <>
        <section>
            <Head>
                <title>Products - Layer C4ke</title>
            </Head>
            <h2>Products Page</h2>
            <div>
                <h3>{content[0].title}</h3>
                <image>{content[0].image}</image>
                <p>{content[0].body}</p>
            </div>
        </section>
        </>
    )
};