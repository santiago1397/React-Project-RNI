import styled from 'styled-components'

const media = {
    medium: '@media(min-width: 900px)',
    small: '@media(min-width: 700px)',
    micro: '@media(min-width: 400px)'
}

//Options Style
export const Options = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: #7298bb;

    ${media.medium}{  
        flex-direction: row;
        height: var(--options-height);
    }
`;

export const Add = styled.div`
    width: 100%;
    display: flex;
    padding:1.2rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
    flex-direction: column;

    @keyframes scale {
        to {
          transform: scale(0.9);
        }
    }
    ${media.micro}{
        flex-direction: row;
    }
    ${media.small}{
    }
    ${media.medium}{
        width: 65%;
        border-bottom: none;
        border-right: 3px solid white;
    }
`;

export const Add_innovator_btn = styled.button`
    height:100%;
    display: flex;
    align-items:center;
    cursor: pointer;
    background-color: #248bab;
    color: white;
    border-radius: 10px;
    border-style: none;
    padding:1rem;
    border-bottom: 5px solid #15548f;
    &:hover{
        animation: scale 200ms ease-in-out forwards;
    }
    
    p{
        padding-right: 6px;
    }
`;

export const Add_excel_btn = styled.button`
    height:100%;
    cursor: pointer;
    display: flex;
    align-items:center;
    overflow: hidden;
    position: relative;
    background: #077D3F;
    border-style: none;
    border-radius: 10px;
    padding:1rem;
    color: white;
    border-bottom: 5px solid #195d38;
    &:hover{
        
        animation: scale 100ms ease-in-out forwards;
    }
    
    p{
        padding-right: 6px;
    }
    input{
        cursor: pointer;
        position: absolute;
        top:0;
        left: 0;
        transform: scale(5) translate(-50%);
        opacity: 0;
    }
`;

export const Download = styled.div`
    height:100%;
    display: flex;
    align-items:center;
    cursor: pointer;
    background-color: #248bab;
    color: white;
    border-radius: 10px;
    border-style: none;
    padding:1rem;
    border-bottom: 5px solid #15548f;
    &:hover{
        animation: scale 200ms ease-in-out forwards;
    }
    
    p{
        padding-right: 6px;
    }
`

export const Search = styled.div`
    padding: 1.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    ${media.medium}{
        width: 35%;
    }
`;

export const Search_input = styled.div`
    border: 2px solid #15548f;
    border-radius: 20px;
    overflow: hidden;
    position:relative;
    background: white;
    padding: 0px 10px;
    table{
        vertical-align: middle;
    }
    input{
        height: 100%;
        width: 100%;
        border: none;
    }
    input:focus{
        outline: none;
    }
    button{
        height: 100%;
        width: 20px;
        background:white;
        cursor: pointer;
        color: #15548f;
        border:none;
        vertical-align: middle;
    }
    
`;

export const Filtrar = styled.button`
    color: white;
    border: none;
    display:flex;
    flex-direction: row-reverse;
    align-items:center;
    background: #15548f;
    color:white;
    padding: 10px;
    border-radius:5px;
    &:hover{
        background:#248BAB;
        cursor: pointer;
    }
`;


//Table styles
export const ScrolledTable= styled.div`
    position: none;
    padding:0;
    
    
    .hidde-column{
        display: none;
        visibility: hidden;
    }
    ${media.small}{
        height: calc(92vh - 100px);
        overflow: hidden;
        overflow-y: scroll;
        padding: 10px;
        .hidde-column{
            display: table-cell;
            visibility: visible;
        }
    }
`;

export const Table = styled.table`
    border-collapse: separate; 
    border-spacing: 0 5px; 
    width: 100%;
    height: 100%;
    
`;

export const MyTHead = styled.thead`
    background:#AB4A09;
    color: white;
    width: auto;
    text-align: left;
    font-size: 0.9rem;

    tr{
        
        font-weight: bold;
        border: solid 1px #fff;
        border-style: solid none;
    }

    th{
        padding: 2px 2px;
    }
    th:first-child {
        border-left-style: solid;
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    }
    
    th:last-child {
        border-right-style: solid;
        border-bottom-right-radius: 10px; 
        border-top-right-radius: 10px; 
    }
    ${media.micro}{
        font-size: 1.1rem;
        th{
            padding: 5px 5px;
        }
    }

    
`;

export const Tbody =styled.tbody`
    width: 100%;
    font-size: 0.7rem;
    td{
        padding: 10px 2px;
        border: solid 1px #fff;
        border-style: solid none;
        cursor: pointer;
    }
    td:first-child {
        border-left-style: solid;
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    }
    td:last-child {
        border-right-style: solid;
        border-bottom-right-radius: 10px; 
        border-top-right-radius: 10px; 
    }
    tr{
        height:20%;
    }
    tr:nth-of-type(even){
        background-color:#FCECD2;
    }
    tr:hover{
        background-color:#e8c387;
    }
    ${media.micro}{
        font-size: 0.9rem;
        td{
            padding: 5px 5px;
            
        }
    }
`;

//Adding Innovator Styles
export const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.5; 
    z-index: 3;
`;

export const Form = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 1; 
    z-index: 4;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        width: 80%;
        height: 80%;
        background: white;
        border-radius: 10px;
        overflow:hidden;
        overflow-y: scroll;
        box-shadow: 0px 0px 2px;
    }
    ${media.small}{
        .sections{
            display: flex;
            width:100%;
            height:100%;
        }
    }
`;  

export const Personal_Information = styled.div`
    background-color: #12518b;
    padding: 20px;
    color:white;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    flex-grow: 1;
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin:0;
    }

    div{
        display:flex;
        flex-direction: column;

    }
`;

export const Project_Information = styled.div`
    padding: 20px;
    flex-grow: 3;
    display: flex;
    flex-direction: column;

    input[type="submit"]{
        margin: 0 auto 0 auto;
        width: 30%;
        border-style:none;
        background-color: #12518b;
        color:white;
        border-radius: 5px;
        padding: 5px;
        border: 1px solid white;
    }

    input[type="submit"]:hover{
        border-color: #12518b;
        background-color: #ffffff;
        color:#12518b;
        font-weight: bold;
        cursor: pointer;
    }
    .title{
        flexGrow: 1;
        text-align: center;
        diplay: flex;
        padding: 8px;
        justify-content: space-between;
    }
    .fields{
        display: flex;
        flex-grow: 12;
        flex-direction: column;
    }
    .left-fields{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 5px;
        justify-content: space-evenly;
    }
    .right-fields{
        display: flex;
        flex-direction: column;
        flex-grow: 12;
        padding: 5px;
        justify-content: space-evenly;
    }
    ${media.small}{
        .fields{
            flex-direction: row;
        }
    }
`;

export const Cross = styled.button`
    display:flex;
    position: fixed;
    top: 10px;
    left: calc(100vw - 50px);

    align-items: center;
    background: #fc6d6d;
    border: 1px solid #f72525;
    color: #f72525;
    border-radius: 5px;
    padding: 5px;
    &:hover{
        cursor: pointer;
    }
`;


//Displaying Information Styles
export const Personal_Information_D = styled.div`
    padding: 20px;
    border-bottom: 3px solid grey;
    display: flex;
    flex-direction: column;
    h3{
        text-align: center;
        padding: 10px;
    }

    .person-info{
        display:flex;
        flex-direction: column;
        width: 100%;
    }

    .location-ci{
        text-align: left;
        padding: 5px;
    }

    .right-section{

    }

    ${media.small}{
        .person-info{
            flex-direction: row;
        }
        .location-ci{
            text-align: center;
            padding: 5px;
        }
        flex-direction: column;
    }
`;

export const Contact = styled.div`
    margin: 5px;
    display: flex;
    align-items: center;
    width: 50%;
    p{
        border: 1px solid #8cb2d0;
        border-radius: 0px 10px 10px 0px;
        padding: 5px;
        flex-grow: 10;
    }
    &:hover p{
        border-color: #15548F;
    }
`; 

export const Project_Information_D = styled.div`
    padding: 10px;
    .project-details{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }
    ${media.small}{
        flex-direction: row;
        .project-details{
            flex-direction: row;
        }
    }
`;

export const Proyect_Data = styled.div`
    display:flex;
    text-align: center;
    justify-content: center;
    b{
        padding-right: 8px;
    }
    &:hover b{
        color: #15548F;
    }
    &:hover{
        color: #15548F;
    }
`;

//Filter
export const CheckBox = styled.div`
    .toggle {
        --width: 50px;
        --height: calc(var(--width) / 2);
        --border-radius: calc(var(--height) / 2);
    
        display: inline-block;
        cursor: pointer;
    }
    
    .toggle__input {
        display: none;
    }
    
    .toggle__fill {
        position: relative;
        width: var(--width);
        height: var(--height);
        border-radius: var(--border-radius);
        background: #dddddd;
        transition: background 0.2s;
    }
    
    .toggle__input:checked ~ .toggle__fill {
        background: #009578;
    }
    
    .toggle__fill::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: var(--height);
        width: var(--height);
        background: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        border-radius: var(--border-radius);
        transition: transform 0.2s;
    }
    
    .toggle__input:checked ~ .toggle__fill::after {
        transform: translateX(var(--height));
    }
`;

