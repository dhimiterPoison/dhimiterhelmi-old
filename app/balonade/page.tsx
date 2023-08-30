import Image from 'next/image';
import React from 'react';
import balonadeHomeScreen from '../../public/images/balonade-homescreen.png';

const Balonade = () => {
	return (
		<div className='flex flex-col w-full'>
			<div className='relative flex flex-col h-52 xl:h-64 w-full'>
				<Image
					src={balonadeHomeScreen}
					alt='cover image for balonade project'
					className='h-full w-full object-cover image-opacity-gradient-bottom'
				/>
				<div className='absolute bottom-0 flex w-full justify-center font-semibold text-xl'>Balonade Web App</div>
			</div>
            <div className="prose md:prose-md lg:prose-lg py-4">
                {/* <h3>Balonade Web App</h3> */}
                <p>Test</p>
            </div>
		</div>
	);
};

export default Balonade;
