import { useSelector } from "react-redux"
import CreateUser from "../features/user/CreateUser"
import Button from "./Button"

function Home() {
  const { userName } = useSelector((state) => state.user)

  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="text-xl font-semibold md:text-3xl mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  )
}

export default Home
