import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../app/film';
import { fetchFilms } from '../filmSlice';

const Main = () => {
    const dispatch: AppDispatch = useDispatch();
    const state = useSelector((state: RootState) => state.film.value)

    const getFilm = async (name: string) => {
        await dispatch(fetchFilms(name))
    }
    const createFilms = state.map(film => {
        return <Link key={film.id} to={'/show/' + film.id} className='list-group-item'>{film.name}</Link>
    })
    return (
        <div className='d-flex justify-content-around'><div>
            Search for Tw-Show
        </div><div>
                <input type="text" onChange={(e) => getFilm(e.target.value)} />
                <div className="card" style={{ width: '11.5rem' }}>
                    <ul className="list-group list-group-flush">
                        {createFilms}
                    </ul>
                </div>
            </div></div>
    );
};

export default Main;