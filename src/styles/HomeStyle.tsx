import style from "styled-components";

/* cards */
export const SectionOne = style.section`
    background: #FFFFFF;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    height: 16vw;
    display: flex;
    align-items: center;
    margin-top: 60px;

    @media (max-width: 360px) {
        flex-direction: column;
        height: unset;
        align-items: flex-start;
        background: unset;
        margin-top: unset;
    }
`;
export const CardWrapper = style.div`
    display: flex;
    width: 50vw;
    position: relative;

    @media (max-width: 360px) {
        width: unset;
        margin-top: 60px;
        align-items: center;
        background: #FFFFFF;
    }
`;
export const Img = style.img`
    width: ${props => props.width || "16vw"};
    height: ${props => props.width || "16vw"};
    @media (max-width: 360px) {
        width: 33vw;
        height: 33vw;
    }
`;
export const Texts = style.div`
    height: 16vw;
    padding: 1rem 2rem;
    overflow: hidden;


    @media (max-width: 360px) {
        overflow: unset;
        height: unset;
        padding: 1rem 1rem;
    }
`;
export const Title = style.h3`
    font-weight: 700;
    font-size: 1.4rem;
    color: #F1A10A;
    margin: 0.6rem 0;
    @media (max-width: 360px) {
        font-size: 1rem;
        margin: 0.2rem 0;
    }
    
`;
export const Svg = style.svg`
    position: absolute;
    top: 11rem;
    right: 1rem;
    cursor: pointer;
    @media (max-width: 360px) {
        top: unset;
        bottom: 1rem;
    }
`;
export const Articles = style.p`
    font-size: 0.8rem;
`;
export const SvgCardB = style.svg`
    position: absolute;
    top: 11rem;
    right: 15rem;
    cursor: pointer;
    @media (max-width: 360px) {
        top: unset;
        right: 0.5rem;
        bottom: 0.5rem;
    }
`;

export const Wrapper = style.div`
    display: flex;
    justify-content: ${props => props.about || "flex-end"};
    @media (max-width: 360px) {
        justify-content: flex-start;
    }
`;
export const CardTWrapper = style.div`
    display: flex;
    width: 66vw;
    margin-top: 60px;
    position: relative;
    @media (max-width: 360px) {
        width: unset;
    }
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
    @media (max-width: 360px) {
        bottom: 1rem;
        right: 1rem;
    }
`;