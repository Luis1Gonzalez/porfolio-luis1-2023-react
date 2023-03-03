import '../styles/portfolio.css'
import foto1 from '../assets/foto1.png'
import qr from '../assets/qr.png'

export default function About() {

    return (
        <div className='w-[100%] flex flex-col flex-wrap p-2 lg:px-28 mb-5'>
            
            <div className='p-2 w-[100%] flex flex-col justify-center'>
                <h1 className='text-white font-black text-2xl pb-4' >About Me</h1>
                <p className='modifier-text text-stone-200 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, aut voluptatem quis voluptatum repellendus sed iure. Impedit aliquam tempore nulla. Ut, odit! Rerum, recusandae ab repudiandae labore natus iusto dicta!
                    Perspiciatis enim, voluptatum ad blanditiis quo error cupiditate nam illum sequi omnis sint eaque officia ullam rem, qui accusantium pariatur molestiae? Quo facere repellat voluptates vitae ad, dolor maiores! Magnam.
                    A laudantium corrupti fugiat ad beatae at porro dolor magni assumenda saepe necessitatibus quo provident, commodi, non tenetur officia similique quam? Explicabo vel libero error dolor dolorem amet consequatur quas?
                    Rerum sint similique amet repellendus iure quia ipsam cupiditate ab quasi quas? Modi, hic exercitationem quod corporis dolores saepe ab possimus consectetur aperiam a minima dolore quibusdam sint neque autem!
                    Repellat ratione maiores odit reprehenderit quam dolor amet, asperiores eveniet sequi, quae voluptatem possimus voluptates optio aliquid ullam reiciendis soluta aspernatur. Itaque nemo facere eveniet aliquam sequi voluptate necessitatibus repudiandae.</p>
            </div>
    
            <p className='font-bold text-emerald-300 text-end mt-8'><span className='hover:text-yellow-500 hover:cursor-pointer'>Know Me...</span></p>

            <div className='lg:flex hidden pl-6 sm:justify-end items-center mt-5 h-[auto]'>
                <img src={qr} alt="Enlaces" className='h-[80px]' />
            </div>



            

            
        </div>
    )
}
