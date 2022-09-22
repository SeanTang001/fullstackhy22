const Part = ({name, e}) => {
    console.log(e)
    return (
        <li>
            {name} {e}
        </li>       
    )
}

export default Part