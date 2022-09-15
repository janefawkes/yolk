import { withUrqlClient } from "next-urql"
import { NavBar } from "../components/NavBar"
import { createUrqlClient } from "../utils/createUrqlClient"

const Index = () =>
  <>
    <NavBar />
    <div>uwu</div>
  </>

export default withUrqlClient(createUrqlClient, { ssr: false })(Index)