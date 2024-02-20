import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Learn() {
    const { id } = useParams();
    const [unfinishedQuestions, setUnfinishedQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const getRandomQuestion = (questionArr) => {
        const index = Math.floor(Math.random() * questionArr.length)
        const randomisedAnswers = questionArr[index].answers.slice().sort(() => Math.random() - 0.6)
        return {...questionArr[index], answers: randomisedAnswers}
    }

    const handleAnswer = () => {
        const newUnfinishedQuestions = unfinishedQuestions.slice()
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
            <h1 className='title'>{currentQuestion !== null ? currentQuestion.title : ''}</h1>
            <button className='answer' onClick={handleAnswer}>{currentQuestion !== null ? currentQuestion.answers[0] : ''}</button>
            <button className='answer' onClick={handleAnswer}>{currentQuestion !== null ? currentQuestion.answers[1] : ''}</button>
            <button className='answer' onClick={handleAnswer}>{currentQuestion !== null ? currentQuestion.answers[2] : ''}</button>
            <button className='answer' onClick={handleAnswer}>{currentQuestion !== null ? currentQuestion.answers[3] : ''}</button>
        </div>
    );
}