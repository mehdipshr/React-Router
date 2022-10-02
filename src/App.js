import {Link, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About"
import { BookList} from "./pages/BookList";
import {NotFound} from "./pages/NotFound"
import {Book} from "./pages/Book"


function App() {
  return (
    <>
<nav>
  <ul>
    <li> <Link to="/">Home</Link></li>
    <li> <Link to="/About">About</Link></li>
    <li> <Link to="/Books">BookList</Link></li>
  </ul>
</nav>

    <Routes>
      <Route path="/"  element ={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
       {/* <Route path="/Books" element= {<BookList/>}></Route>
       <Route path="/Books/:id" element={<Book/>}></Route>
       <Route path="/Books/new" element={<BookList/>}></Route> */}

       <Route path="/Books">
      <Route index element= {<BookList/>}/>
       <Route path=":id" element={<Book/>}/>
       <Route path="new" element={<BookList/>}/>
       </Route>

       <Route path="*" element= {<NotFound/>}></Route>
     </Routes>
     </>
  );
}

export default App;
