export default function Contact() {
    const config = {
        email: 'yogeshwaran485@gmail.com',
        phone: '7639941268'
    }
    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 mb-5 w-[140px] border-secondary'>Contact</h1>
            <p className='pb-5'>
                If you want to discuss more in detail, please contact me
            </p>
            <p><span className='font-bold py-2'>Email:</span> {config.email}</p>
            <p><span className='font-bold py-2'>Phone:</span> {config.phone}</p>
        </div>
    </section>
}