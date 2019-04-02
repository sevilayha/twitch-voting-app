import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export default function VotingButton({ number, name, icon, vote }) {
  const colors = {
    react: 'blue',
    vuejs: 'green',
    angular: 'red'
  };

  const buttonColor = colors[icon];

  return (
    <StyledVotingButton
      onClick={vote}
      className={`flex-1 bg-${buttonColor}-lightest border border-${buttonColor} p-10 rounded shadow-lg mr-8 relative`}
    >
      <FontAwesomeIcon
        icon={['fab', icon]}
        className={`absolute text-${buttonColor}`}
      />
      <div className="relative z-1">
        <span className={`block text-5xl text-${buttonColor}-dark mb-3`}>
          {number}
        </span>
        <span className={`text-xl text-${buttonColor}`}>{name}</span>
      </div>
    </StyledVotingButton>
  );
}

const StyledVotingButton = styled.button`
  svg {
    font-size: 240px;
    top: -30px;
    left: -30px;
    opacity: 0.2;
  }
`;
