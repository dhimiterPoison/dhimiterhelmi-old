import Image from 'next/image';

export default function Home() {
    return (
        <main className='flex flex-col my-10 justify-start'>
            <div className='flex flex-row justify-center text-3xl font-bold'>
                {/* //set fist letter to secondary color */}
                <span className='text-primary'>U</span>ser e
                <span className='text-secondary'>X</span>perience
            </div>
            <div className='flex flex-row justify-center text-3xl font-bold'>
                consultant
            </div>
            <div className='flex flex-row justify-center text-3xl font-bold mt-32'>
                protfolio / WiP
            </div>
        </main>
    );
}
