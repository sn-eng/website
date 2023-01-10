function SuspenseLoader() {
    return (
        <div className='flex justify-center items-center'>
            <div
                className='spinner-grow inline-block w-[100px] h-[100px] bg-[#10a65c] rounded-full opacity-0'
                role='status'
            >
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    )
}

export default SuspenseLoader
