import styled from 'styled-components'

const media ={
    small: '@media(min-width: 700px)'
}
export const CNavbar = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    background-image: linear-gradient(180deg,#12518b,#3d77a1,#65adbb);
    width: ${(props) => (props.clicked ? "200px" : "0")};
    display: ${(props) => (props.clicked ? "flex" : "none")};
    visibility: ${(props) => (props.clicked ? "visible" : "hidden")};

    ${media.small}{
        position: static;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        visibility: visible;

        width: ${(props) => (props.clicked ? "200px" : "80px")};
        transition: all 0.5s ease;
        border-radius: 30px 0 0 30px;

        li{
            padding: ${(props) => (props.clicked ? "0px" : "0px")};
        }
        li p{
            display: ${(props) => (props.clicked ? "block" : "none")};
            visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
        }
        li .nav-icons{
            margin: ${(props) => (props.clicked ? "15px 10px 15px 18px" : "15px 10px 15px 24px")};
        }

    }

`;