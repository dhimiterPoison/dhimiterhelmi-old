import React from 'react'
import { allBlogs, Blog, } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'

const ProjectPage = ({ params }: { params: { slug: string } }) => {

	const blogItem = allBlogs.find((el: Blog) => el.slug === params.slug)

	return (
		<div className='flex flex-col w-full text-white'>
			<div className='blog-cover rounded-xl'>
				<Image
					src={blogItem?.cover.src || ''}
					alt='Balonade cover image'
					className='h-full object-cover rounded-xl '
					width={blogItem?.cover.width}
					height={blogItem?.cover.height}
				/>
				<Link className='esc-button' href="/#personal-projects">
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18 18 6M6 6l12 12'
						/>
					</svg>
				</Link>
			</div>
			<div className='px-4 prose lg:prose-lg py-4 md:mx-auto bg-base-100 '>
				<h2 className='text-center  text-[#FDF5E6]'>{blogItem?.title}</h2>
				<div
					className=' prose lg:prose-lg text-justify text-[#FDF5E6]'
					dangerouslySetInnerHTML={{ __html: blogItem?.body.html || '' }}
				>
					{/* {blogItem?.body.raw} */}
				</div>
			</div>
		</div>
	)
}

export default ProjectPage
