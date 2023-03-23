import styled from "@emotion/styled";

export const Table = styled.table`
    margin-top: 50px;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    width: 600px;
    
`

export const TableHead = styled.thead`
    background-color: #6BD3F3;
    color: white;
    height: 40px;
    text-transform: uppercase;
`

export const TableItem = styled.tr`
    background-color: #fff;
    text-align: center;
    color: gray;

    height: 40px;

    :nth-of-type(2n) {
  background-color: #DCE8EC;
}

`