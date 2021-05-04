import React from 'react';
import ToyCard from './ToyCard'

// take note that this is a functional component - think about what we do only with c
const ToyContainer = ({ toys, patchLikes, deleteToy }) => {

  return(
    <div id="toy-collection">
      {/* only use this for mapping over toys and passing data down to the toy card */}
      {toys.map(toy => <ToyCard deleteToy={deleteToy} patchLikes={patchLikes} toy={toy} key={toy.id} />)}
    </div>
  );
}

export default ToyContainer;
