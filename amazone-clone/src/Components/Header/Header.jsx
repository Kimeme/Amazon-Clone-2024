import React, { useContext } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';


const Header = () => {
  const [{basket}, dispatch] = useContext(DataContext)
  // console.log(basket.length)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount+amount
  }, 0)



  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="#">
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
          <input type="text" name="" id="" placeholder="Search Product" />
          <BsSearch size={25} />
        </div>
        {/* Right side link */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
              alt="USA flags"
            />
            <section>
              <option value="">EN</option>
            </section>
          </Link>
          {/* three components */}
          <Link to="/SignIn">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>return</p>
            <span>& orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            {<BiCart size={35} />}
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header
