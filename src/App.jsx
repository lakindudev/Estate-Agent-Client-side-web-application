import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import SearchForm from "./Components/SearchForm.jsx"

function App() {
  

  return (
    <>
      <NavBar />

      <h1 className="search-head">Estate Agend Property Search</h1>

      <SearchForm />
      
      <Footer />
    </>
  )
}

export default App
