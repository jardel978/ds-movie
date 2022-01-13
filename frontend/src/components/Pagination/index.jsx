import './style.css';
<<<<<<< HEAD:frontend/src/components/Pagination/index.tsx
import { ReactComponent as Arrow } from 'assets/img/Arrow2.svg';
=======
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';

>>>>>>> 2ab9d9c62df8b23c004a228668084ac4b4d53e00:frontend/src/components/Pagination/index.jsx
export const Pagination = () => {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
<<<<<<< HEAD:frontend/src/components/Pagination/index.tsx
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <Arrow className="dsmovie-flip-horizontal"  />
=======
                   <Arrow  className="dsmovie-flip-horizontal" />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                   <Arrow />
>>>>>>> 2ab9d9c62df8b23c004a228668084ac4b4d53e00:frontend/src/components/Pagination/index.jsx
                </button>
            </div>
        </div>
    )
}
