import Link from "next/link";
import { useEffect, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import Container from "./Container";


const Header = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  },[]);
  
  return (
    <nav  className="py-3 px-5">
      <Container >
        <ul className="flex justify-between">
          <li>

            <h2>
              <Link href="/" className="text-3xl">
                Ma petite Turbulette
              </Link>
            </h2>
          </li>
          <li>
            <Link
              className="snipcart-checkout snipcart-summary"
              href="#"
              style={{ textDecoration: "none" }}
            >
              <FaShoppingCart />
              <strong className="sr-only">Cart</strong>
              <span className="snipcart-total-price">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(total)}
              </span>
            </Link>
          </li>
        </ul>



      </Container>
    </nav>
  );
};

export default Header;