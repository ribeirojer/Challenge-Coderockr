import { Link } from "react-router-dom"
import { Wrapper, Logo, Navbar, Posts, Contact } from "../styles/HeaderStyle"

type Props = {}

const Header = (props: Props) => {
  return (
    <Wrapper>
        <Link to={"/"}><Logo>Rockr Blog</Logo></Link>
        <Navbar>
            <Link to={"/"}><Posts>Posts</Posts></Link>
            <Contact>Contact</Contact>
        </Navbar>
    </Wrapper>
  )
}

export default Header;