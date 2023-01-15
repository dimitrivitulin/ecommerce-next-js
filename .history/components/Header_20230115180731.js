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
              className="snipcart-checkout snipcart-summary no-underline flex justify-end items-center gap-3"
              href="#"
            >
              <FaShoppingCart />
              <strong className="sr-only">Panier</strong>
              <span className="snipcart-total-price">
                {new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
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