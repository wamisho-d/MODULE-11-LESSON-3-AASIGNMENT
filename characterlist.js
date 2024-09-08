// file : src/components/CharacterList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PUBLIC_KEY = '<YOURPUBLICKEY>';
const HASH = '<YOURHASH>';
const BASE_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

function CharacterList({ onCharacterSelect}) {
    const [character, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacers = async () => {
          try {
            const response = await axios.get(BASE_URL);
            setCharacters(response.data.data.results);
          } catch (error) {
            console.error('Error fetching characters:, error');
          }
        };

        fetchCharacters();
    }, []);

    return (
      <div className="character-list">
          {characters.map((character) => (
            <div 
            key={character.id}
            className="character-card"
            onClick={() => onCharacterSelect(character)}>
            <h2>{character.name}</h2>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
        </div>

       ))}

     </div>

    );
}

export default CharacterList;
