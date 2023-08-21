import { useDispatch, useSelector } from "react-redux"
import LinkButton from "../../ui/LinkButton"
import Button from "../../ui/Button"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import { getCart, clearCart } from "./cartSlice"

function Cart() {
  const cart = useSelector(getCart)
  const { userName } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  if (!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart