import { useNavigate } from 'react-router-dom';
import { Wrapper, CardTWrapper, Img, TextWrapper, Title, SvgCardT, Articles } from '../styles/HomeStyle';

type Props = {}

const CardT = ({ data, pos }: {data: any, pos:string}) => {
  
    const { imageUrl, author, title, article, id } = data;
    const navigate = useNavigate()
    const text:string = article.split("\n");
    
    const posi = (pos==="left"? "flex-start" : "flex-end");
    
    function removeTags(str: string): any {
        if ((str===null) || (str===''))
            return false;
        else {
            str = str.toString();
            return str.replace( /(<([^>]+)>)/ig, '');
        }
    }
    function handleShowPost(id: string): void{
        navigate("/post/"+id);
    }

    return (
        <Wrapper about={posi}>
            <CardTWrapper>
                <Img width={"33vw"} src={imageUrl} alt="" />
                <TextWrapper>
                    <p>{author}</p>
                    <Title>{title}</Title>
                    <Articles>{removeTags(text[0])}</Articles>
                </TextWrapper>
                <SvgCardT onClick={()=>handleShowPost(id)} width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.024 0H16.039L24 8L16.039 16H10.024L17.985 8L10.024 0ZM0 16H6.015L13.976 8L6.015 0H0L7.961 8L0 16H0Z" fill="#032937"/></SvgCardT>
            </CardTWrapper>
        </Wrapper>
    )
}

export default CardT;