import styled from "@emotion/styled";



export const StatisticsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    background-color: #fff;
    margin-right: auto;
    margin-left: auto;
    width: 400px;
    
    -webkit-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.75);
`

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    
`

export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    padding: 12px 0;

     color: white;
`

export const Title = styled.h2`
    padding: 40px;
    color: gray;
    text-transform: uppercase;
`

export const ListItemLabel = styled.span`
    margin-bottom: 10px;
    font-size: 15px;

`
export const ListItemInfo = styled.span`
    font-size: 25px;
`
