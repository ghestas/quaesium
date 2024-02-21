import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Learn() {
    const { id } = useParams();
    const [unfinishedQuestions, setUnfinishedQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const getRandomQuestion = (questionArr) => {
        const index = Math.floor(Math.random() * questionArr.length)
        const randomisedAnswers = questionArr[index].answers.slice().sort(() => Math.random() - 0.6)
        return {...questionArr[index], answers: randomisedAnswers, questionIndex: index}
    }

    const handleAnswer = (answerIndex) => {
        const newUnfinishedQuestions = unfinishedQuestions.slice()
        const correctAnswer = unfinishedQuestions[currentQuestion.questionIndex].answers[0]
        console.log(correctAnswer === currentQuestion.answers[answerIndex])
        newUnfinishedQuestions.splice(unfinishedQuestions.findIndex((e) => {return e.title === currentQuestion.title}), 1)
        setUnfinishedQuestions(newUnfinishedQuestions)
    }

    useEffect(() => {
        fetch('https://www.ghestas.com/api/sets?id=' + id)
        .then((response) => response.json())
        .then((body) => {
            setUnfinishedQuestions(JSON.parse(body.set).questions)
        });
    }, [id]);

    useEffect(() => {
        if(unfinishedQuestions) {
            console.log(unfinishedQuestions)
            setCurrentQuestion(getRandomQuestion(unfinishedQuestions))
        }
    }, [unfinishedQuestions]);

    return (
        <div className='question-set'>
            <div className='title-container'>
                <h1 className='title'>{currentQuestion !== null ? currentQuestion.title : ''}</h1>
            </div>
            <div className='answer-container'>
                <button className='answer' onClick={() => {handleAnswer(0)}}>{currentQuestion !== null ? currentQuestion.answers[0] : ''}</button>
                <button className='answer' onClick={() => {handleAnswer(1)}}>{currentQuestion !== null ? currentQuestion.answers[1] : ''}</button>
                <button className='answer' onClick={() => {handleAnswer(2)}}>{currentQuestion !== null ? currentQuestion.answers[2] : ''}</button>
                <button className='answer' onClick={() => {handleAnswer(3)}}>{currentQuestion !== null ? currentQuestion.answers[3] : ''}</button>
            </div>
        </div>
    );
}