import { Await, Link, defer, json, useLoaderData, useSearchParams } from 'react-router-dom'
import mypost from './mypost.module.css'
import './container.css'
import { Suspense, useState } from 'react'

export default function Posts() {
    const {receivedPost} = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || ''

    console.log(receivedPost)

    const styles = {
        display: 'flex',    
        justifyContent: 'center',
        flexDirection: 'column',
        border: '2px solid #f0495e',
        width: '60%',
        marginBottom: '25px',
        flexWrap: 'wrap'
    }

    function handleRemove(postTitle) {
        
    }

    return (
        <div className={mypost.posts}> 
            <h1>Posts</h1>
            <Link to='/posts/create'>Create Post</Link>

            <input type='search' value={query} onChange={(e) => {
                setSearchParams({query: e.target.value})
            }}/>

            <Suspense fallback={<h1>Загрузка постов...</h1>}>
                <Await resolve={receivedPost} errorElement={<h1>Постов нет.</h1>}>
                    {
                        (resolvedPosts) => (
                            <>
                                {
                                    resolvedPosts.filter(post => post.title.includes(query)).map((elem, key) => {
                                        return (
                                            <div style={styles} key={key}>
                                                Title: <Link to={`/posts/${elem.id}`}>{elem.title}</Link>
                                                <h3>Post Text:{elem.body}</h3>
                                                <button onClick={() => handleRemove(elem.title)}>Удалить пост</button>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </Await>
            </Suspense>
        </div>
    )   
}


const getPosts = async() =>  {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    // if (!res.ok) {
    //     throw new Response('', {status: res.status, statusText: 'Not found'})
    // }

    return res.json()
}

const blogLoader = async () => {
    return defer({
        receivedPost: getPosts().then(posts => {
            if (!posts.length) {
                throw json({ message: 'Not found', reason: 'Wrong url' }, { status: 404 });
            }
            return posts;
        })
    });
}

export {blogLoader, getPosts}