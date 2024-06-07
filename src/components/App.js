import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    async function getQuestions() {
      const resp = await fetch('http://localhost:4000/questions')
      const data = await resp.json()
      setQuestions(data)
    }

    getQuestions()
  }, [])

function addForm(question){
  setQuestions([...questions, question])
}

function removeQuestion(id){
  const filteredQuestions = questions.filter(question => question.id !== id)
    
  setQuestions(filteredQuestions)
}
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  addform={addForm}/> : <QuestionList questions={questions} removeQuestion={removeQuestion}/> }
    </main>
  );
}

export default App;
