import style from "styled-components";

/* navbar */
export const Wrapper = style.header`
    background: #2D2D2D;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
`;
export const Logo = style.span`
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    margin-left: 16vw;
    width: 48vw;

    @media (max-width: 360px) {
        width: unset;
        font-size: 36px;
        margin-left: 2rem;
    }
`;
export const Navbar = style.div`
    margin-left: 33vw;
    @media (max-width: 360px) {
        display: none;
        margin-left: unset;
    }
`;
export const Posts = style.span`
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    margin-right: 118px;
    
    @media (max-width: 360px) {
        margin-right: unset;
    }
`;
export const Contact = style.span`
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    cursor: pointer;
`;