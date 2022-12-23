import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../app/film';
import Search from '../../components/Search/Search';
import { fetchOneFilm } from './filmSlice';

const Film = () => {
    const { id } = useParams();
    const dispatch: AppDispatch = useDispatch();
    const object = useSelector((state: RootState) => state.film.object);

    const searchOneFilm = useCallback(async () => {
        await dispatch(fetchOneFilm(Number(id)));
    }, [dispatch, id]);

    useEffect(() => {
        searchOneFilm().catch(console.error);
    }, [searchOneFilm]);
    
    return (
        <div>
            <div className="d-flex justify-content-around my-3">
                <img src={object.image} alt="film" style={{height: '20rem'}}/>
                <div style={{ width: '33%' }}>
                    <h2>{object.name}</h2>
                    <h3>Type: {object.type}</h3>
                    <h3>Runtime: {object.runtime}</h3>
                    <p>Description: {object.summary}</p>
                </div>
                <Search />
            </div>
        </div>
    );
};

export default Film;