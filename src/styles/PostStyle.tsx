import style from "styled-components";

export const Wrapper = style.section`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    @media (max-width: 360px) {
        margin-top: 20px;
    }
`;
export const Post = style.div`
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    width: 66vw;
    padding-bottom: 5rem;
    @media (max-width: 360px) {
        width: 90vw;
    }
`;
export const ImgPost = style.img`
    width: 33vw;
    height: 33vw;
    @media (max-width: 360px) {
        width: unset;
        height: unset;
        margin-bottom: 1rem;
    }
`;
export const ImageAndText = style.div`
    display: flex;
    margin-bottom: 5rem;
    @media (max-width: 360px) {
        flex-direction: column;
        margin-bottom: 1rem;
    }
`;
export const TextsPost = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3rem;
`;
export const Date = style.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #032937;
    @media (max-width: 360px) {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`;
export const Title = style.h3`
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2rem;
    color: #F1A10A;
    @media (max-width: 360px) {
        font-size: 1.3rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;
    }
`;
export const Author = style.p`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 2rem 0;
    @media (max-width: 360px) {
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin: unset;
        margin-bottom: 1rem;
    }
`;
export const Article = style.p`
    padding: 0 9rem;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 2rem;
    @media (max-width: 360px) {
        padding: 0 2rem;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 1rem;
    }
`;
