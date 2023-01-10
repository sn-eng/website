import { onSnapshot, doc } from 'firebase/firestore'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'

const Article = () => {
    const { id } = useParams()
    const [article, setArticle] = React.useState<any>()

    React.useEffect(() => {
        const docRef = doc(db, 'Blogs', id ? id : 'baba')
        onSnapshot(docRef, snapshot => {
            setArticle({ ...snapshot.data(), id: snapshot.id })
        })
    })

    return (
        <div className='p-8 lg:p-16 max-w-1/2 grid  place-items-center'>
            <Helmet>
                {article?.title ? (
                    <title> {`${article?.title}`} | Siduna & Ndou Eng</title>
                ) : (
                    <title> Article | Siduna & Ndou Eng</title>
                )}
            </Helmet>
            <div className='justify-self-center'>
                <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6'>
                    {article?.title}
                </h2>
                <p className='text-sm font-light leading-relaxed  text-gray-700'>
                    {article?.abstract}
                </p>
                <p className='text-md font-light italic leading-relaxed mb-4 text-gray-700'>
                    by {article?.author},{' '}
                    <span>
                        {' '}
                        {new Date(
                            article?.createdAt.seconds * 1000,
                        ).toDateString()}
                    </span>
                </p>

                <div className=' mt-8'>
                    <div className='w-5/5'>
                        <img
                            className='object-cover rounded-[35px] h-[400px] w-full inline-flex items-center justify-center'
                            src={article?.imageUrl}
                            alt={article?.title}
                        />
                    </div>
                </div>
                <p className='text-md  font-light leading-relaxed mt-4 mb-4 text-gray-700 mt-4 whitespace-pre-wrap'>
                    {article?.body}
                </p>
                <p className='text-md font-light italic leading-relaxed mt-12 text-gray-700 text-right'>
                    {article?.bio}
                </p>
            </div>
        </div>
    )
}

export default Article
