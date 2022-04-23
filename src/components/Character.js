// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.h3`
  width: 100%;
  color: 'black';
  text-shadow: 1px 1px 5px #fff;
`

const Character = (props) => {
  const listNames = props.characters.map((character, idx) => <StyledCharacter key={idx}>{character.name}</StyledCharacter>);

    return (
        <div>{listNames}</div>
    )
};

export default Character;
