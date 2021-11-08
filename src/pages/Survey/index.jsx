import { Link, useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const paramNumber = parseInt(questionNumber)
  const url = paramNumber === 10 ? '/results/' : `/survey/${paramNumber + 1}`

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>
      <nav>
        {questionNumber > 1 && (
          <Link to={`/survey/${paramNumber - 1}`}>Précedent</Link>
        )}
        <Link to={url}>{paramNumber === 10 ? 'Résultat' : 'Suivant'}</Link>
      </nav>
    </div>
  )
}

export default Survey
