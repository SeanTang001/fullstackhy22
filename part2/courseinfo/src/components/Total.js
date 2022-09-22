const Total = ({course}) => {
    return (
        <strong>
            total of {course.parts.reduce((sum, part) => {return(sum + part.e)}, 0)} excercises 
        </strong>
    )
}


export default Total