import style from "styled-components";

export const Wrapper = style.section`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;
export const Post = style.div`
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    width: 66vw;
    padding-bottom: 5rem;
`;
export const ImgPost = style.img`
    width: 33vw;
    height: 33vw;
`;
export const ImageAndText = style.div`
    display: flex;
    margin-bottom: 5rem;

`;
export const Date = style.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #032937;
`;
export const Title = style.h3`
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2rem;
    color: #F1A10A;
`;
export const Author = style.p`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 2rem 0;
`;
export const Article = style.p`
    margin-bottom: 2rem;
    padding: 0 9rem;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
`;
export const TextsPost = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3rem;
`;
