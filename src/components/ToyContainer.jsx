import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({ toys, patchLikes, deleteToy }) => {

  return(
    <div id="toy-collection">
      {toys.map(toy => <ToyCard deleteToy={deleteToy} patchLikes={patchLikes} toy={toy} key={toy.id} />)}
    </div>
  );
}

export default ToyContainer;
