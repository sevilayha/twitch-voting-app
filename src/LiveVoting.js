import React, { useState, useEffect, useRef } from 'react';
import firebase from './firebase';
import VotingButton from './VotingButton';

export default function LiveVoting() {
  let collection = useRef();
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    collection.current = firebase.firestore().collection('votes');
    getVotes();
  }, []);

  function getVotes() {
    collection.current.onSnapshot(snap => {
      const votes = [];
      snap.forEach(snapshot => votes.push(snapshot.data()));
      setVotes(votes);
    });
  }

  function vote(type) {
    console.log('type');
    collection.current.add({ vote: type });
  }

  function countVote(type) {
    return votes.filter(vote => vote.vote === type).length;
  }

  const reactCount = countVote('react');
  const vueCount = countVote('vue');
  const angularCount = countVote('angular');

  return (
    <div>
      <h1 className="text-5xl text-center mb-10">The Idea We Are Voting On</h1>
      <div className="flex">
        <VotingButton
          name="React"
          number={reactCount}
          icon="react"
          vote={() => vote('react')}
        />
        <VotingButton
          name="Vue"
          number={vueCount}
          icon="vuejs"
          vote={() => vote('vue')}
        />
        <VotingButton
          name="Angular"
          number={angularCount}
          icon="angular"
          vote={() => vote('angular')}
        />
      </div>
    </div>
  );
}
