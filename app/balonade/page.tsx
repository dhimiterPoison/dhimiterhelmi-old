import Image from 'next/image';
import React from 'react';
import balonadeHomeScreen from '../../public/images/balonade-homescreen.png';

const Balonade = () => {
	return (
		<div className='flex flex-col w-full px-8'>
			<div className='relative flex flex-col h-52 xl:h-64 w-full'>
				<Image
					src={balonadeHomeScreen}
					alt='cover image for balonade project'
					className='h-full w-full object-cover image-opacity-gradient-bottom'
				/>
				<div className='absolute bottom-0 flex w-full justify-center font-semibold text-xl'>
					Balonade Web App
				</div>
			</div>
			<div className='animation-test flex flex-col prose md:prose-md lg:prose-lg py-4'>
				{/* <h3>Balonade Web App</h3> */}
				<h2>New vanilla CSS animations</h2>
				<p>Bro this shit is lit, check out these new vanilla css animations</p>
				<p>
					Mauris ac turpis dictum, ullamcorper odio in, egestas libero. In sed
					libero a sapien euismod malesuada non at lectus. Quisque mi lorem,
					dictum nec risus vitae, rhoncus hendrerit mauris. Integer non molestie
					dolor. Aliquam at finibus enim. Curabitur maximus bibendum ligula.
					ornare finibus, tortor tellus euismod velit, vel interdum velit purus
					sed orci.
				</p>
				<h2>This shit is lit 🔥</h2>
				<p>
					Aliquam libero dolor, porta eget quam tristique, convallis vestibulum
					eros. Suspendisse hendrerit lectus sem, ut commodo nunc faucibus
					maximus. Praesent posuere ut ligula congue maximus. Etiam vel dui at
					ligula placerat elementum quis eget libero. Phasellus sit amet
					bibendum nunc.
				</p>
				<Image
					src='https://media.tenor.com/VOf_IsXVKfsAAAAC/meme-elmo.gif'
					alt=''
					width={300}
					height={280}
					className='self-center'
				/>
			</div>
		</div>
	);
};

export default Balonade;
