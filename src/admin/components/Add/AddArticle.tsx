import React from 'react'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../../services/firebaseConfig'

const AddArticle = () => {
    const [author, setAuthor] = React.useState('')
    const [loader, setLoader] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [abstract, setAbstract] = React.useState('')
    const [image, setImage] = React.useState<any>(null)
    const [body, setBody] = React.useState('')
    const [bio, setBio] = React.useState('')

    const handleImageChange = (e: any) => {
        setImage(e.target.files[0])
    }

    const handlePublish = (event: any) => {
        event.preventDefault()
        setLoader(true)

        const storageRef = ref(storage, 'images/' + image.name)
        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on(
            'state_changed',
            snapshot => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            },
            error => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break
                    case 'storage/canceled':
                        // User canceled the upload
                        break

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break
                    default:
                        break
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    const articleRef = collection(db, 'Blogs')
                    addDoc(articleRef, {
                        title: title,
                        abstract: abstract,
                        body: body,
                        author: author,
                        imageUrl: downloadURL,
                        bio: bio,
                        createdAt: Timestamp.now().toDate(),
                    })
                        .then(() => {
                            setLoader(false)
                            alert('Article Successfully Published')
                        })
                        .catch(error => {
                            alert(error.message)
                            setLoader(false)
                        })
                })
            },
        )

        setTitle('')
        setAbstract('')
        setBody('')
        setImage('')
        setAuthor('')
        setBio('')
    }

    return (
        <>
            <div className='content-center text-center mb-4 mt-8'>
                <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900'>
                    Add Article
                </h2>
            </div>
            <div className='mx-4 py-4'>
                <form className=''>
                    <div className='mb-6'>
                        <label
                            htmlFor='title'
                            className='block text-xs text-dark'
                        >
                            Title
                        </label>
                        <input
                            required
                            type='text'
                            name='title'
                            placeholder='article title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className='w-full border-0 border-b border-gray-600 py-4 focus:border-primary focus:outline-none '
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='author'
                            className='block text-xs text-dark'
                        >
                            Author
                        </label>
                        <input
                            required
                            type='text'
                            name='author'
                            placeholder='name of author'
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            className='w-full border-0 border-b border-gray-600 py-4 focus:border-primary focus:outline-none '
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='phone'
                            className='block text-xs text-dark'
                        >
                            Author Bio
                        </label>
                        <input
                            required
                            type='text'
                            name='bio'
                            placeholder='mini bio of author'
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                            className='w-full border-0 border-b border-gray-600 py-4 focus:border-primary focus:outline-none '
                        />
                    </div>
                    <div className='flex items-center justify-center w-full mb-6'>
                        <label className='flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                <svg
                                    aria-hidden='true'
                                    className='w-10 h-10 mb-3 text-gray-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                                    ></path>
                                </svg>
                                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                    <span className='font-semibold'>
                                        Add Article Image. Click to upload
                                    </span>{' '}
                                    or drag and drop
                                </p>
                            </div>
                            <input
                                id='dropzone-file'
                                type='file'
                                className='hidden'
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>

                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='block text-xs text-dark'
                        >
                            Abstract
                        </label>
                        <input
                            required
                            type='text'
                            name='abstract'
                            placeholder='article abstract'
                            value={abstract}
                            onChange={e => setAbstract(e.target.value)}
                            className='w-full border-0 border-b border-gray-600 py-4 focus:border-primary focus:outline-none '
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='message'
                            className='block text-xs text-dark'
                        >
                            Article Body
                        </label>
                        <textarea
                            required
                            rows={8}
                            name='body'
                            placeholder='article body'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            className='w-full resize-none  border rounded border-gray-300 py-4 focus:border-primary focus:outline-none '
                        ></textarea>
                    </div>
                    <div className='mb-0'>
                        <button
                            type='submit'
                            onClick={handlePublish}
                            className={`inline-flex items-center  ${
                                loader ? 'bg-[#f2fcf4]' : 'bg-[#10a65c]'
                            } justify-center rounded py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark`}
                        >
                            Add Article
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddArticle
