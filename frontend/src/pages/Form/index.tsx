import { FormCard } from 'components/FormCard';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movies';
// import './style.css';


export const Form = () => {

    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`} />
    )
}
