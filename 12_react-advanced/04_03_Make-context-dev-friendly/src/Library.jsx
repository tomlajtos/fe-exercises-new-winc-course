// TODO:
// Find out what's going on or provide feedback about material:
// * find clarification for Context import comment in course material
//   reffering to files importing things from eachother? >> Exercise 4/4-Creating and Consuming Context (task guide)
// * description on how to import Library context is super unclear and results in an error as well

import { LibraryContextProvider } from "./LibraryContextProvider";
import { Books } from "./Books";

function Library() {
  return (
    <div className="App">
      <h1>Library</h1>
      <LibraryContextProvider>
        <Books />
      </LibraryContextProvider>
    </div>
  );
}

export default Library;
