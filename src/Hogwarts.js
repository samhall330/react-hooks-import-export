import React from "react";
// import whoseHouse from "./houses/HagridsHouse";
import whoseHouse from "./houses/whoseHouse";
import HooflePoof from "./houses/Hufflepuff";
import {colors, gryffMascot as mascot, values} from "./houses/Gryffindor";

colors();
// => 'Scarlet and Gold'

mascot();
// => 'The Lion'

values();
// => ReferenceError: values is not defined

export default function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <HooflePoof />
      {/*
				Will render `NOBODY CARES ABOUT US`, even though we renamed `Hufflepuff`
				to `HooflePoof`
			*/}
    </div>
  );
}
// export default Hogwarts;