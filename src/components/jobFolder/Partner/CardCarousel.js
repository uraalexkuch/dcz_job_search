import React, { useEffect, useCallback, useState } from "react";
import "./style.css";
import logo1 from "../../Img/grc_ua_logo.png";
import logo3 from "../../Img/robota.png";
import logo2 from "../../Img/jooble.png";
import logo4 from "../../Img/logo4.png";
import logo5 from "../../Img/pidbir.png";
import logo6 from "../../Img/work.png";
const cardItems = [
    {
        id: 1,
        image: logo1,

    },
    {
        id: 2,
        image: logo2,
    },
    {
        id: 3,
        image: logo3,
    },
    {
        id: 4,
        image: logo4,
    },{
        id: 5,
        image: logo5,
    },
    {
        id: 6,
        image: logo6,
    }
];

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
        return "active";
    } else if (indexes.nextIndex === cardIndex) {
        return "next";
    } else if (indexes.previousIndex === cardIndex) {
        return "prev";
    }
    return "inactive";
}

const CardCarousel = () => {
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1
    });

    const handleCardTransition = useCallback(() => {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex >= cardItems.length - 1) {
            setIndexes({
                previousIndex: cardItems.length - 1,
                currentIndex: 0,
                nextIndex: 1
            });
        } else {
            setIndexes(prevState => ({
                previousIndex: prevState.currentIndex,
                currentIndex: prevState.currentIndex + 1,
                nextIndex:
                    prevState.currentIndex + 2 === cardItems.length
                        ? 0
                        : prevState.currentIndex + 2
            }));
        }
    }, [indexes.currentIndex]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
            handleCardTransition();
        }, 2000);

        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);

    return (
        <div className="container">
            <ul className="card-carousel">
                {cardItems.map((card, index) => (
                    <li
                        key={card.id}
                        className={`card ${determineClasses(indexes, index)}`}
                    >
                        <img
                            className="logoimgcard"
                            src={card.image}
                            height="auto"
                            width="100"
                            alt="logo" style={{
                            margin: "1%",


                        }}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardCarousel;
