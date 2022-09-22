import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({courses}) => {
    return(
        <div>
        {courses.map(
            (course) => {
                return(
                <>
                    <Header course={course}/>
                    <Content course = {course}/>
                    <Total course = {course}/>
                    <br></br>
                </>
                )
            })}
        </div>
    )
}

export default Course

{/* <div>
<Header course = {course}/>
<Content course = {course}/>
<Total course = {course}/>
</div> */}
