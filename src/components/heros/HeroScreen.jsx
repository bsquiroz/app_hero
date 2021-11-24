import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router";
import { getHeroById } from "../../helpers/getHero";

export const HeroScreen = () => {
    const { heroId } = useParams();
    const navigate = useNavigate();

    const [hero, setHero] = useState({});

    useEffect(() => {
        if (heroId) {
            setHero(getHeroById(heroId)[0]);
        }
    }, [heroId]);

    if (!hero) return <Navigate to="/not-found-404" />;

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const imgPath = `/assets/img/heroes/${id}.jpg`;

    const handleReturn = () => {
        navigate(-1);
    };

    const arrayList = [
        {
            name: "Alter ego",
            value: alter_ego,
        },
        {
            name: "Publisher",
            value: publisher,
        },
        {
            name: "Firts Appearance",
            value: first_appearance,
        },
    ];

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imgPath} alt={superhero} className="img-thumbnail" />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>

                <ul className="list-group">
                    {arrayList.map((item, i) => (
                        <li className="list-group-item" key={i}>
                            <b>{item.name}: </b>
                            {item.value}
                        </li>
                    ))}
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Regresar
                </button>
            </div>
        </div>
    );
};
