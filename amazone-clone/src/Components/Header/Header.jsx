import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to href="#">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={classes.delivery}>
            <span>{<SlLocationPin />}</span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>{" "}
        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
        </div>
        {/* Right side link */}
        <div className={classes.order_container}>
          <Link to href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
              alt="USA flags"
            />
            <section>
              <option value="">EN</option>
            </section>
          </Link>
          {/* three components */}
          <Link href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          {/* orders */}
          <Link href="/orders">
            <p>return</p>
            <span>& orders</span>
          </Link>
          {/* cart */}
          <Link href='/cart' className={classes.cart} >
            {<BiCart size={35} />}
            <span>0</span>
          </Link>
        </div>
      </section>
      <LowerHeader/>

    </>
    
  );
}

export default Header
