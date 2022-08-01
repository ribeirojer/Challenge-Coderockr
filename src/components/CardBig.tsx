import { CardBigWrapper, Cardbig, Img, TextsBig, Author, Title, Svg } from "../styles/HomeStyle"

type Props = {}

const CardBig = ({ data, pos }: {data: any, pos:string}) => {
  
    const { imageUrl, author, title, article } = data;
    
    const text:string = article.split("\n");
    
    function removeTags(str: string): any {
        if ((str===null) || (str===''))
            return false;
        else {
            str = str.toString();
            return str.replace( /(<([^>]+)>)/ig, '');
        }
    }
    const posi = (pos==="left"? "flex-start" : "flex-end");
    return (
        <CardBigWrapper about={posi}>
            <Cardbig>
                <Img width={"33vw"} src={imageUrl} alt="" />
                <TextsBig>
                    <Author>{author}</Author>
                    <Title>{title}</Title>
                    <p>{removeTags(text[1])}</p>
                </TextsBig>
                <Svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.024 0H16.039L24 8L16.039 16H10.024L17.985 8L10.024 0ZM0 16H6.015L13.976 8L6.015 0H0L7.961 8L0 16H0Z" fill="#032937"/></Svg>
            </Cardbig>
        </CardBigWrapper>
    )
}

export default CardBig;