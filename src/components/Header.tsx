import { Wrapper, Logo, Posts, Contact } from "../styles/HeaderStyle"

type Props = {}

const Header = (props: Props) => {
  return (
    <Wrapper>
        <Logo>Rockr Blog</Logo>
        <div>
            <Posts>Posts</Posts>
            <Contact>Contact</Contact>
        </div>
    </Wrapper>
  )
}

export default Header;