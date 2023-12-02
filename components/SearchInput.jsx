import { IoSearch } from "react-icons/io5";
export default function SearchInput() {
    return (
        <div className='w-9/12 relative min-w-min25'>
            <input className='focus:outline-none text-white p-2 w-full rounded-md h-7 bg-search'
                placeholder='搜尋' type="text" />
            <button className=' absolute right-0 w-9 h-full bg-navcolor'>
                <IoSearch size={20} className='relative left-2 text-white' />
            </button>
        </div>
    )
}