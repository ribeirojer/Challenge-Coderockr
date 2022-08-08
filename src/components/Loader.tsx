import style from "styled-components";

type Props = {}

const Loadero = style.div`
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #342303;
    height: 50px;
    width: 50px;
    margin: auto 0;
    position: relative;
    left: 50%;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;

const Loader = (props: Props) => {
  return (
    <Loadero></Loadero>
  )
}

export default Loader;