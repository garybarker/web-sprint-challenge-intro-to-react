// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.h4`
  width: 100%;
  color: 'black';
  text-shadow: 1px 1px 5px #fff;
`

export default function Character(props) {

    return (
        <div>{props.characters.map((character, idx) => <StyledCharacter key={idx}>{character.name}</StyledCharacter>)}</div>
    )
};


