import { useNavigate } from "react-router-dom";
import { CardWrapper, Img, Texts, Title, SvgCardB } from "../styles/HomeStyle"

type Props = {}

const CardB = ({ data }: {data: any}) => {
  
    const { imageUrl, author, title, article, id } = data;
    const navigate = useNavigate();
    const text:string = article.split("\n");
    
    function removeTags(str: string): any {
        if ((str===null) || (str===''))
            return false;
        else {
            str = str.toString();
            return str.replace( /(<([^>]+)>)/ig, '');
        }
    }
    function handleShowPost(id: string){
        navigate("/post/"+id);
    }

    return (
        <CardWrapper>
            <Texts>
                <p>{author}</p>
                <Title>{title}</Title>
                <p>{removeTags(text[0])}</p>
            </Texts>
            <Img src={imageUrl} alt="" />
            <SvgCardB onClick={()=>handleShowPost(id)} width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.024 0H16.039L24 8L16.039 16H10.024L17.985 8L10.024 0ZM0 16H6.015L13.976 8L6.015 0H0L7.961 8L0 16H0Z" fill="#032937"/></SvgCardB>
        </CardWrapper>
    )
}

export default CardB;