import { Post, Wrapper, ImgPost, TextsPost, ImageAndText, Date, Author, Title, Article } from '../styles/PostStyle';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

type Props = {}

const Posts = (props: Props) => {
  
  const url: string = "https://stormy-shelf-93141.herokuapp.com/";
  const { data, isLoading, error } = useFetch(`${url}articles`);
  const { id } = useParams();

  if(isLoading){
    return <Loader />
  }
  if(error){
    return <p>Houve um problema...</p>
  }

  function formatDate (date:string): string {
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    let index = parseInt(date.slice(5, 7))-1;
    return `${monthNames[index]} ${date.slice(8, 10)},  ${date.slice(0, 4)}`;
  }

  const post:any = data.filter((po: any)=>{//aqui é filtrado o post selecionado
    if(id===po.id)
      return po;
  })[0]
    
  const { imageUrl, date, author, title, article } = post;
  const text:string[] = article.split("\n");

  function removeTags(str: string): any {
      if ((str===null) || (str===''))
          return false;
      else {
          str = str.toString();
          return str.replace( /(<([^>]+)>)/ig, '');
      }
  }
  return (
    <Wrapper>
      <Post>
        <ImageAndText>
          <ImgPost src={ imageUrl } alt="" />
          <TextsPost>
            <Date>{ formatDate(date) }</Date>
            <Author>{ author }</Author>
            <Title>{ title }</Title>
          </TextsPost>
        </ImageAndText>
        {text.map((txt) => {
          return <Article>{ removeTags(txt) }</Article>})}
      </Post>
    </Wrapper>
  )
}

export default Posts;