import styled from 'styled-components'

export const DivComp3 = styled.div`
    background-color: darkgreen;
    padding: 20px;
    border-radius: 10px;

    h2 {
        text-align: center;
        color: white;
    }

    p {
        text-align: center;
        color: darkgreen;
    }
`

export default function Componente3(){

    return(
        <DivComp3>
            <h2>Componente 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat labore voluptatibus, rerum nobis corrupti reprehenderit quisquam asperiores doloremque, alias, tempora saepe quasi ipsa deleniti laborum deserunt! Ut, reiciendis aperiam?</p>
        </DivComp3>
    )
}