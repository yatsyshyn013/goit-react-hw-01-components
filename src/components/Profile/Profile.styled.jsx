import styled from "@emotion/styled";

export const ProfileCard = styled.div`
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
margin-right: auto;
margin-left: auto;
margin-top: 40px;
width: 500px;
border: solid 1px;
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
padding: 20px;

width: 400px;

`;

export const AvatarDiv = styled.div`
    overflow: hidden;
    border-radius: 50%;
`