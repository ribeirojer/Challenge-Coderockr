import style from "styled-components";

/* cards */
export const SectionOne = style.section`
    background: #FFFFFF;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    height: 16vw;
    display: flex;
    align-items: center;
    margin-top: 60px;
`;
export const CardWrapper = style.div`
    display: flex;
    width: 50vw;
`;
export const Img = style.img`
    width: ${props => props.width || "16vw"};
    height: ${props => props.width || "16vw"};
`;
export const Texts = style.div`
    width: 32vw;
    height: 16vw;
    padding: 1rem 2rem;
`;
export const Author = style.p`
    font-size: 1rem;
`;
export const Title = style.h3`
    font-weight: 700;
    font-size: 1.4rem;
    color: #F1A10A;
    margin: 0.6rem 0;
`;
export const Article = style.p`
    font-size: 1rem;
`;
export const Svg = style.svg`
    position: relative;
    top: 11rem;
    right: 1rem;
`;

/* Bigs */
export const CardBigWrapper = style.div`
    display: flex;
    justify-content: ${props => props.about || "flex-end"};
`;
export const Cardbig = style.div`
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    margin-top: 60px;
    background: #fff;
    width: 66vw;
`;
export const TextsBig = style.div`
    width: 33vw;
    height: 16vw;
    padding: 1rem 2rem;
`;