import styled from "@emotion/styled";

export const ProfileCard = styled.div`
margin-right: auto;
margin-left: auto;
margin-top: 40px;
width: 400px;
height: 440px;

background-color: #fff;
    border-radius: 6px;
    -webkit-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Avatar = styled.img`
    margin: 20px;

    width: 150px;
    border-radius: 50%;
    background-color: goldenrod;

`; 

export const ProfileName = styled.h1`
    margin-top: 20px;
    font-weight: bold;
    font-size: 30px;
`

export const ProfileInfo = styled.p`
    margin-top: 10px;
    font-size: 20px;
    color: gray;
`

export const ProfileStats = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-top: 30px;
    padding: 0;
    /* gap: 30px; */
    background-color: #DDDEDF;

    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    padding: 29px 0;
    border-top: 1px solid #A5A7A9;
    
    

    :not(:last-child) {
        border-right: 1px solid #A5A7A9;
    }
`

export const ProfileLabel = styled.span`
    color: gray;
`

export const ProfileQuantity = styled.span`
    font-weight: bold;
    margin-top: 5px;
`
