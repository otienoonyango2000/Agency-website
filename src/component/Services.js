import React from 'react'
import logo3 from '../assets/Logo3.png'
import logo4 from '../assets/Logo4.png'
import logo5 from '../assets/Logo5.png'
import logo6 from '../assets/Logo6.png'
import logo7 from '../assets/Logo7.png'
import logo8 from '../assets/Logo8.png'

const Services = () => {
  const services = [
    {id: 1, title: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments', image: '/src/assets/icons/Icon1.png'},
    {id: 2, title: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments', image: '/src/assets/Icon2.png'},
    {id: 3, title: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments', image: '/src/assets/Icon3.png'}
  ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey text-semibold mb-2'>Our Clients</h2>
            <p className='text-neutral-Grey'>We have been working with some fortune 500+ clients</p>

            {/* company logo */}
            <div className='my-12 flex flex-wrap justify-between items-center'>
                <img src={logo8} alt='img' />
                <img src={logo3} alt='img' />
                <img src={logo4} alt='img' />
                <img src={logo5} alt='img' />
                <img src={logo6} alt='img' />
                <img src={logo7} alt='img' />
                <img src={logo8} alt='img' />


            </div>
        </div>

        {/* Service card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGrey text-semibold mb-2'>Manage your entire community in asingle system</h2>
        <p className='text-neutral-Grey'>Who is Nextcent suitable for?</p>
        </div>
        {/* cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
              services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 translation-all durarion-300 flex items-center justify-center h-full' >
                  <div>
                    <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt='img' className='-ml-5'/></div>
                    <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                    <p className='text-sm text-neutralDGrey'>{service.description}</p>
                  </div>
              </div> )
            }
        </div>
    </div>
  )
}

export default Services