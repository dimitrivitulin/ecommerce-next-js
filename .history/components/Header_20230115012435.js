import { useEffect, useState } from "react";


const Header = ({children}) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  }, []);
  return (
    <div><span className="snipcart-total-price">
    {new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total)}
  </span></div>
  )
}

export default Header