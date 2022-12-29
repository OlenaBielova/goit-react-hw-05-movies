import { Link, Outlet } from 'react-router-dom';

export const MoviesList = ({ movies }) => {

    return (
        <div>
            <ul>
            {movies.map(({id, title}) => 
                <li key={id}>
                    <Link to={`/movies/${id}`}>{title}</Link>
                </li>
            )}
            </ul>
            <Outlet />
        </div>
    )
};