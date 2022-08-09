import style from "styled-components";

export const Title = style.span`
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2rem;
    color: #F1A10A;
    display: flex;
    justify-content: center;
    margin: 0 0 1rem 0;
    @media (max-width: 360px) {
        margin: unset;
    }
`;
export const Subtitle = style.span`
    font-size: 1rem;
    line-height: 2rem;
    color: #000000;
`;
export const Button = style.button`
    font-size: 18px;
    background: #2D2D2D;
    border: 1px solid #2D2D2D;
    border-radius: 4px;
    font-weight: 500;
    color: #FFFFFF;
    margin: 1rem 0 1rem 0;
    padding: 8px;
    width: 10rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Input = style.input`
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 4px;
    padding: 4px 0 4px 8px;
    border: 1px solid #2d2d2d8a;
    margin: 0 0 1rem 0;
`;
export const Svg = style.svg`
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    @media (max-width: 360px) {
        width: 18px;
        top: 1rem;
        right: 1rem;
    }
`;
export const SvgButton = style.svg`
    margin-right: 1rem;
`;
export const WrapperButton = style.div`
    display: flex;
    justify-content: center;
`;
export const TextArea = style.textarea`
    font-size: 1rem;
    height: 5rem;
    line-height: 1.5rem;
    border-radius: 4px;
    padding: 4px 0 4px 8px;
    border: 1px solid #2d2d2d8a;
    margin: 0 0 1rem 0;
`;