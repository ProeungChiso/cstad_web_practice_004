'use client';
import { Button, Navbar } from 'flowbite-react';
import navbar_logo from '../../assets/images/navbar_logo.png';
function NavBar() {
  return (
    <Navbar fluid className='max-w-full lg:mx-auto md:mx-5 mx-2 my-5 border border-cyan-500'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={navbar_logo} className="mr-3 h-6 sm:h-9" alt="AmongUs" />
        <span className="self-center whitespace-nowrap text-xl font-bold uppercase"><span className=' text-red-800'>Among</span>-Shop</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-1">
        <Button>Your Order</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Products</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
