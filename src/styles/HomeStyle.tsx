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
    position: relative;
`;
export const Img = style.img`
    width: ${props => props.width || "16vw"};
    height: ${props => props.width || "16vw"};
`;
export const Texts = style.div`
    height: 16vw;
    padding: 1rem 2rem;
    overflow: hidden;
`;
export const Title = style.h3`
    font-weight: 700;
    font-size: 1.4rem;
    color: #F1A10A;
    margin: 0.6rem 0;
`;
export const Svg = style.svg`
    position: absolute;
    top: 11rem;
    right: 1rem;
    cursor: pointer;
`;
export const SvgCardB = style.svg`
    position: absolute;
    top: 11rem;
    right: 15rem;
    cursor: pointer;
`;

export const Wrapper = style.div`
    display: flex;
    justify-content: ${props => props.about || "flex-end"};
`;
export const CardTWrapper = style.div`
    display: flex;
    width: 66vw;
    margin-top: 60px;
    position: relative;
`;
export const TextWrapper = style.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
`;
export const SvgCardT = style.svg`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
`;