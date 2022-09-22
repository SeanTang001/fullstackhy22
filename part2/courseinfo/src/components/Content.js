import Part from "./Part"

const Content = ({course}) => {

    return(
        <ul>
            {course.parts.map((part) => <Part key = {part.id} name = {part.name} e = {part.e}/>)}
        </ul>
    )
}
export default Content