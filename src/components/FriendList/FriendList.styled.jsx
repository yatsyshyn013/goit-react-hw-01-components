import styled from "@emotion/styled";

export const FriendListSection = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    margin-top: 50px;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    width: 200px;
    height: 70px;
    padding-left: 10px;

    :not(:last-child){
        margin-bottom: 10px;
      
    }

    -webkit-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
`