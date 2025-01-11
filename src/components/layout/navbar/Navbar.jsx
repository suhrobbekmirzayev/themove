import { Plus, Search } from "lucide-react"
import logo from "/mock/logo.svg"
import { Link } from "react-router-dom" 

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <div className='bg-[#052442]'>
      <nav className='container mx-auto flex justify-around items-center py-4'>
        <ul className='flex items-center justify-between gap-8 text-white'>

          <li>
            <Link to="/">
            <img src={logo} alt="logo" className='w-[154px]' />
            </Link>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h4 className='cursor-pointer hover:text-[#048cc1]'>Movies</h4>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 absolute left-0">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/movies/popular">Popular</Link> 
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link to="/movies/now-playing">NowPlaying</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link to="/movies/up-coming">up-coming</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link to="/movies/top-rated">top-rated</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h4 className='cursor-pointer hover:text-[#048cc1]'>TV Shows</h4>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 absolute left-0">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                  <Link to="/TVShow/popular">Popular</Link> 
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link to="/TVShow/Airing Today">Airing Today</Link> 
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link to="/TVShow/OnTv">On Tv</Link> 

                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link to="/TVshow/top-rated">top-rated</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h4 className='cursor-pointer hover:text-[#048cc1]'>People</h4>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 absolute left-0">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                  <Link to="Peoples/person"> Popular People </Link>
                  {/* <Link to="Peoples/users">users</Link> */}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h4 className='cursor-pointer hover:text-[#048cc1]'>More</h4>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 absolute left-0">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                  <Link to="More/discuss">Discussions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Leaderboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>API</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

        </ul>
        <div className="flex gap-8">
          <Plus className="text-white cursor-pointer" />
          <Link to="/join" className="text-white">Join TMDB</Link>
          <Link to="/login" className="text-white">Login</Link> 
          <Search className="text-[#048cc1] cursor-pointer" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
