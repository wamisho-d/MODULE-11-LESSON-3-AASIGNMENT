// File: src/components/CharacterDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PUBLIC_KEY = '<YOURPUBLICKEY>';
const HASH = 'YOURHASH';

function CharacterDetail({ character }) {
    const [characterdetail, setCharacterDetail] = useState(null);

    useEffect(() => {
        const fetchCharacterDetail = async () => {
          try {
            const response = await axios.get(
                `https://gateway.marvel.com/v1/public/characters/${character.id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`
            );
            setCharacterDetail(response.data.data.results[0]);
        } catch (error) {
          console.error('Error fetching character details:', error);
        }
        
      };
      
      fetchCharacterDetail();
    }, [character]);

    if (!characterDetial) return <div>Loading...</div>;

    return (
        <div className="character-detail">
            <h2>{characterDetail.name}</h2>
            <p>{characterDetail.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <u1>
              {characterDetial.comics.items.map((comic, index) => (
                <l1 key={index}>{comic.name}</l1>
              ))}
            </u1>
        </div>
    );
}

export default CharacterDetail;
