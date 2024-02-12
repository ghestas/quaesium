import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Learn() {
    let { id } = useParams();

    useEffect(() => {
        async function getSet () {
            const response = await fetch('https://www.ghestas.com/api/sets?id=1')
            const responseText = await response.text()
            console.log(responseText)
        }
        getSet()
    }, [])

    return (
        <div className='question-set'>
            <h1 className='title'>{id}</h1>
        </div>
    )
}