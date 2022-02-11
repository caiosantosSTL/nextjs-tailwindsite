

export default function AreaC(props) {
    return (
        <>
            <div className='grid md:grid-cols-4 my-4'>
                <div className='p-2 md:mr-10 '>
                    {props.a}
                </div>
                <div className='md:col-span-3 bg-slate-300 rounded-md shadow-md p-2 flex flex-col space-y-4'>
                    {props.b}
                </div>
            </div>
        </>
    )
}