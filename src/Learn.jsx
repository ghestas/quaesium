import { useParams } from 'react-router-dom';
export default function Learn() {
    let { id } = useParams();
    return (
        <div className='learn-set'>
            <h1 className='title'>{id}</h1>
        </div>
    )
}