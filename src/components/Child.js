const Child = ({handlerValue}) => {


    return(
        <button onClick={() => handlerValue('Informacion desde el componente hijo')}>Mandando informacion al Padre</button>
    )
}

export default Child