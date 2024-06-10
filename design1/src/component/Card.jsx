// Card component to display individual cards
import React from 'react';
import Button from '@mui/material/Button';

const Card = ({ cardData }) => {
    return (
        <>
            {cardData.map((item) => (
                <div className='card_con' key={item.id}> {/* Unique key for each card */}
                    <h1 className='title'>
                        <span>A</span> {item.title}
                    </h1>
                    <ul className='listView'>
                        <li><h5>Type Of Film</h5> <h6>FEATURE FILM</h6></li>
                        <li><h5>Language of <br />Sub Title</h5> <h6>ENGLISH US</h6></li>
                    </ul>
                    <div className='button_con'>
                        <Button variant="contained">View</Button>
                        <Button variant="contained">Print</Button>
                    </div>
                </div>
            ))}
        </>
    );
}
export default Card;