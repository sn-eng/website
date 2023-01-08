import React from 'react'
import {
    collection,
    query,
    onSnapshot,
    deleteDoc,
    doc,
} from 'firebase/firestore'
import { db } from '../../../services/firebaseConfig'

export type IBlog = {
    id: string
    abstract: string
    author: string
    body: string
    createdAt: {
        seconds: number
        nanoseconds: number
    }
    imageUrl: string
    title: string
}

const Articles = () => {
    const [articles, setArticles] = React.useState<IBlog[]>([])

    React.useEffect(() => {
        const q = query(collection(db, 'Blogs'))
        const unsub = onSnapshot(q, querySnapshot => {
            let ArticlesArray: any = []
            querySnapshot.forEach(doc => {
                ArticlesArray.push({ ...doc.data(), id: doc.id })
            })
            setArticles(ArticlesArray)
        })
        return () => unsub()
    })

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'Blogs', id))
    }

    return (
        <section className='mt-12'>
            {articles.map(article => (
                <div
                    className=' w-full lg:w-full lg:flex border-r border-b border-l border-gray-400 '
                    key={article.id}
                >
                    <div className='h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l  overflow-hidden'>
                        <img
                            className='w-48 h-48 mr-4'
                            src={article.imageUrl}
                            alt={article.title}
                        />
                    </div>
                    <div className='lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                        <div className='mb-8'>
                            <div className='text-gray-900 font-bold text-xl mb-2'>
                                {article.title}
                            </div>
                            <p className='text-gray-700 text-base'>
                                {article.abstract}
                            </p>
                        </div>
                        <div className=' items-center flex flex-row'>
                            <div className='text-sm flex-1'>
                                <p className='text-gray-900 leading-none'>
                                    {article.author}
                                </p>
                                <p className='text-gray-600'>
                                    {' '}
                                    {new Date(
                                        article?.createdAt.seconds * 1000,
                                    ).toDateString()}
                                </p>
                            </div>
                            <div>
                                <button
                                    type='button'
                                    onClick={() => handleDelete(article.id)}
                                    className=' text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 '
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Articles
