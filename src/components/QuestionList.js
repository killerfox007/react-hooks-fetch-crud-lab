import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({questions, removeQuestion }) {


  const questionMap = questions.map(question => <QuestionItem key={question.id} question={question} removeQuestion={removeQuestion}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  );
}

export default QuestionList;
