import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader"

function AppLAyout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-screen">
      {isLoading && <Loader />}

      <Header />

      <div>
        <main className=" max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}

export default AppLAyout
