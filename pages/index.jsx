import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styless from '../styles/Bg.module.css'

import AreaA from '../components/sections/areaa'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import AreaB from '../components/sections/areab'
import AreaC from '../components/sections/areac'
import AreaC2 from '../components/sections/areac2'


export default function Home() {
  return (
    <>
      
      <div className='h-24'> {/* space */}</div>

      <AreaA />

      <div className='h-24'> {/* space */}</div>

      <div className='container mx-auto'>

        <AreaB />

        <div className='h-24'> {/* space */}</div>

        <AreaC
          a={
            <Image src="/img/sunonubo.png" alt="" width={500} height={500} />

          }
          b={
            <>
              <h1 className='text-2xl'>Lorem ipsum dolor sit amet</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Iste corrupti aperiam nemo quibusdam, voluptatem rerum sapiente est, dolorem ab odit iusto aliquid.
                Perferendis consequatur accusantium facere adipisci illum aut ab voluptate quasi laudantium recusandae et doloribus,
                quam molestias tempora provident veritatis rem aperiam perspiciatis?
                Tempora dolorum autem voluptas ad corporis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Iste corrupti aperiam nemo quibusdam, voluptatem rerum sapiente est, dolorem ab odit iusto aliquid.
                Perferendis consequatur accusantium facere adipisci illum aut ab voluptate quasi laudantium recusandae et doloribus,
                quam molestias tempora provident veritatis rem aperiam perspiciatis?
                Tempora dolorum autem voluptas ad corporis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Iste corrupti aperiam nemo quibusdam, voluptatem rerum sapiente est, dolorem ab odit iusto aliquid.
                Perferendis consequatur accusantium facere adipisci illum aut ab voluptate quasi laudantium recusandae et doloribus,
                quam molestias tempora provident veritatis rem aperiam perspiciatis?
                Tempora dolorum autem voluptas ad corporis.
              </p>
            </>
          }

        />

        <AreaC2
          a={
            <Image src="/img/sunonubo.png" alt="" width={500} height={500} />
          }
          b={
            <>
              <h1 className='text-2xl'>Lorem ipsum dolor sit amet</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Iste corrupti aperiam nemo quibusdam, voluptatem rerum sapiente est, dolorem ab odit iusto aliquid.
                Perferendis consequatur accusantium facere adipisci illum aut ab voluptate quasi laudantium recusandae et doloribus,
                quam molestias tempora provident veritatis rem aperiam perspiciatis?
                Tempora dolorum autem voluptas ad corporis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Iste corrupti aperiam nemo quibusdam, voluptatem rerum sapiente est, dolorem ab odit iusto aliquid.
                Perferendis consequatur accusantium facere adipisci illum aut ab voluptate quasi laudantium recusandae et doloribus,
                quam molestias tempora provident veritatis rem aperiam perspiciatis?
                Tempora dolorum autem voluptas ad corporis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Iste corrupti aperiam nemo quibusdam, voluptatem rerum sapiente est, dolorem ab odit iusto aliquid.
                Perferendis consequatur accusantium facere adipisci illum aut ab voluptate quasi laudantium recusandae et doloribus,
                quam molestias tempora provident veritatis rem aperiam perspiciatis?
                Tempora dolorum autem voluptas ad corporis.
              </p>
            </>
          }
        />


        <div className='h-24'> {/* space */}</div>


      </div>

      

      <script src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"></script>
    </>
  )
}
