import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-black h-40 text-white'> 
    <div className='flex p-5 justify-between'>
      <div className='text-center'>
        <h1>Welcome to work manager app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
          Harum praesentium alias similique repellendus non consectetur<br/>
         dolore? Doloremque voluptatem necessitatibus aliquid fugiat...
          
        </p>
      </div>
      <div className='text-center'>
        <h1>Important Links</h1>
        <ul>
          <li>
            <Link href="facebook.com">Facebook</Link>
          </li>
          <li>
            <Link href="Instagram.com">Instagram</Link>
          </li>
          <li>
            <Link href="linkedin.com">Linkedin</Link>
          </li>
          <li>
            <Link href="twitter.com">Twitter</Link>
          </li>
        </ul>
      </div>
    </div>

    </footer>
  )
}

export default Footer