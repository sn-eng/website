function SuspenseLoader() {
    return (
        <div className='flex justify-center items-center'>
            <div
                className='spinner-border animate-spin inline-block w-[100px] h-[100px] border-[8px] rounded-full'
                role='status'
            >
            </div>
        </div>
    )
}

export default SuspenseLoader
