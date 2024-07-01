import { MdNavigateNext } from "react-icons/md";

const Pagination = () => {
  return (
    <div>
       <div className="flex justify-center my-6">
        <button className="px-4 py-1 mx-1 bg-gray-300 rounded">1</button>
        <button className="px-4 py-1 mx-1 bg-gray-300 rounded">2</button>
        <button className="px-4 py-1 mx-1 bg-red-500 text-white rounded">3</button>
        <button className="px-4 py-1 mx-1 bg-gray-300 rounded">4</button>
        <button className="px-4 py-1 mx-1 bg-gray-300 rounded">5</button>
        <button className="px-4 py-1 mx-1 bg-gray-300 rounded"><MdNavigateNext /></button>
      
      </div>
    </div>
  )
}

export default Pagination
