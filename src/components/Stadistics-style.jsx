import styled from 'styled-components'

const media = {
    medium: '@media(min-width: 100px)',
    small: '@media(min-width: 700px)',
    micro: '@media(min-width: 400px)'
}

export const Stats = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    padding: 10px;
    background: #eed5ab;

    .top-section{
        
        width: 100%;
        height: 50%;
        display: block;
        flex-direction: column;
    }
    .bottom-section{
        text-align: center;
        height: 600px;
        margin: 10px 5px;
        padding: 5px;
        border-radius: 10px;
        background: #E8C387;
        display: none;
        visibility: hidden;
    }
    .aux-bottom-section{
        height: 600px;
        margin: 10px 0px;
        padding: 10px;
        border-radius: 10px;
        background: #E8C387;
    }

    ${media.small}{ 
        width: 100%;
        min-height: 0vh;
        height: 100%;
        .top-section{
            display: flex;
            flex-direction: row;
            
        }
        .aux-bottom-section{
            display: none;
            visibility: hidden;
        }
        .bottom-section{
            display: block;
            visibility: visible;
            height: 45%;
            margin: 10px 0px;
            padding: 5px;
            border-radius: 10px;
            background: #E8C387;
        }
    }
`;
export const SChartL = styled.div`
    width: 100%;
    height: 400px;
    margin: 10px 0px;
    padding: 5px;        
    background: #E8C387;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        margin-top:20px;
    }
    ${media.small}{ 
        height: 100%;
        width: 50%;
        margin: 5px;
        h3{
            margin-top:40px;
        }
    }
`;

export const SChartR = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px 0px;
    padding: 5px;        
    background: #E8C387;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media.small}{ 
        width: 50%;
        margin: 5px;
    }
`;
