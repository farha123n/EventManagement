import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const Bit = ({ tid }) => {
  const [myBit, setMyBit] = useState(null);
  const { bitProvider } = useContext(AuthContext);
 function reverseArray(arr) {
  return arr.slice().reverse(); // slice() to avoid mutating the original array
}
  useEffect(() => {
    const reversed = reverseArray(bitProvider)
    if (bitProvider && tid) {
      const found = reversed.find(b => b.bitId.toString() === tid.toString());
      console.log(found)

      if (found) {
        setMyBit(found);
      }
    }
  }, [bitProvider, tid]); // include dependencies here

  return (
    <div>
      {myBit ? (
        <p>Bids: {myBit.bitCount}</p>
      ) : (
        <p>No bids yet</p>
      )}
    </div>
  );
};

export default Bit;
