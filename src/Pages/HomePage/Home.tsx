import Pagination from "../../components/Pagination/Pagination"
import NewsRoomPage from "../NewsRoomPage/NewsRoom"

function Home() {
  return (
    <div className="w-full h-full">
      <NewsRoomPage/>
      <Pagination/>
    </div>
  )
}

export default Home
