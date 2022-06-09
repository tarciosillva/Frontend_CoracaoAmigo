import styled from "styled-components";

interface gridColumnProps{
    columns:string
}

export const GridColumn = styled.div<gridColumnProps>`
    display: grid;
    grid-template-columns: ${props=>props.columns};
    justify-items: center;
    align-items: center;
    grid-gap:1rem;
    margin-bottom: 2rem;
`