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
    width: 16vw;
    height: 16vw;
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