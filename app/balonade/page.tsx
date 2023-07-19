import Image from 'next/image';
import React from 'react';
// import balonadeHomeScreen from '../../public/balonade-homescreen.PNG';

const Balonade = () => {
    return (
        <div className='flex'>
            <div className='flex flex-col'>
                <div className='mockup-phone'>
                    <div className='camera'></div>
                    <div className='display'>
                        <div className='artboard artboard-demo phone-1'>
                            image placeholder <br />
                            on hover show button to open website
                        </div>
                    </div>
                </div>
                {/* <div className='example'>
                    <Image
                        src='/public/balonade-homescreen.PNG'
                        alt='profile/'
                        objectFit='cover'
                        width={400}
                        height={800}
                        className='object-cover rounded-2xl'
                    />
                </div> */}
            </div>
            <div className='flex flex-col h-full items-center justify-around px-10 '>
                <div className='flex text-2xl font-semibold'>
                    Balonade Web App
                </div>
                <div className='h-10'></div>
                <div className='flex justify-center text-xl'>
                    Made for the Buttrio summer sport tournament. <br />
                    Allows you to enroll your team and see the tournament
                    schedule.
                </div>
            </div>
        </div>
    );
};

export default Balonade;
