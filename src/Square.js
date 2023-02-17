

const Square = (props) => {

    console.log(props.squareValue)

    const handleClick = () => {
        if (!props.squareValue) {
            if (props.player) {
                props.square.splice(props.index, 1, "X");
                props.setSquares(props.square);
                props.setPlayers(!props.player);
            } else {
                props.square.splice(props.index, 1, "O");
                props.setSquares(props.square);
                props.setPlayers(!props.player);
            }
        }
    };



    return(
        <div className='square' onClick={handleClick}>
            {props.squareValue === 'O' ? <p>O</p> : props.squareValue}
        </div>
    )
}

export default Square