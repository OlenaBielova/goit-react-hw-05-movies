import { Link } from 'react-router-dom';

export const Cast = (id) => {
    return (
        <Link to={`/movies/${id}/cast`}>{}</Link>
    )
};