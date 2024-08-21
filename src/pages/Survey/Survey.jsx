import { Link, useParams } from "react-router-dom";

function Survey() {

    const {questionNumber} = useParams();
    return (
        <div>
            {questionNumber < 10 ? (
                <>
                    <h1>Questionnaire 🧮</h1>
                    <h2>Question {questionNumber}</h2>
                    {questionNumber > 1 && <Link to={`/survey/${parseInt(questionNumber) - 1}`}>Previous</Link>}
                    <Link to={`/survey/${parseInt(questionNumber) + 1}`}>Next</Link>
                </>
            ) : (
                <>
                <h1>Questionnaire 🧮</h1>
                <h2>Question {questionNumber}</h2>
                <Link to={`/survey/${parseInt(questionNumber) - 1}`}>Previous</Link>
                <Link to={`/results`}>Results</Link>
            </>
            )}
        </div>
    )
}
export default Survey