import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Payment from '@/images/payment.png'

const Footer = () => {
  return (
        <footer className='bg-lightBg text-sm'>
      <Container className='py-5 flex items-center justify-between'>
        <p className='text-gray-500'>Copyright &copy; 2025  
            <span className='text-darkBlue font-semibold'> Maryam Shahid </span> All Right Reserved </p>
        <Image src={Payment} alt={'payment'} className='w-64 object-cover'/>
      </Container>
      </footer>
  )
}

export default Footer;