import { Suspense } from "react";
import { Await, defer, useLoaderData, useAsyncValue } from "react-router-dom";

function Post() {
    const post = useAsyncValue();

    return (
        <>
            <h1>Post Title: {post.title}</h1>
            <h3>Post Text: {post.body}</h3>
        </>
    );
}

function SinglePage() {
    const { post } = useLoaderData();

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '2px solid #f0495e',
        width: '60%',
        marginBottom: '25px',
        flexWrap: 'wrap'
    };

    return (
        <div>
            <Suspense fallback={<h1>Загрузка поста...</h1>}>
                <Await resolve={post}>
                    <Post />
                </Await>
            </Suspense>
        </div>
    );
}

const postLoader = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (res.status === 404) {
        throw new Response('Not found', { status: 404 });
    }

    const current_post = await res.json();

    return defer({
        post: current_post
    });
};

export default SinglePage;
export { postLoader };