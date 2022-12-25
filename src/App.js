import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Navigation from './components/navigation/Navigation'
import SearchResults from './components/navigation/SearchResults'
import Home from './components/home/Home'
import MoviePage from './components/moviepage/MoviePage'
import EntryPage from './components/notebook/EntryPage'
import Notebook from './components/notebook/Notebook'
import Watchlist from './components/watchlist/Watchlist'
import AddEntryDialog from './components/notebook/AddEntryDialog'
import Login from './components/login/Login'
import Footer from './components/Footer'

import movieService from './services/movies'


const App = () => {
  const [searchResults, setSearchResults] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (query) => {
    movieService
      .searchMovies(query)
      .then(results => {
        setSearchResults(results)
        navigate(`/search/${query}`)
      })
  }

  const handleAddEntryDialog = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navigation onSearch={handleSearch}/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' />
        <Route path='/login' element={<Login />}/>
        <Route path='/search/:query' element={<SearchResults results={searchResults}/>} />
        <Route path='/movie/:id' element={<MoviePage handleAddEntryDialog={handleAddEntryDialog} />} />
        <Route path='/notebook/:username/:entryId' element={<EntryPage />} />
        <Route path='/profile/:username' />
        <Route path='/notebook' element={<Notebook />}/>
        <Route path='/watchlist' element={<Watchlist handleAddEntryDialog={handleAddEntryDialog}/>}/>
        <Route path='/settings' />
      </Routes>
      <AddEntryDialog isOpen={isOpen} handleAddEntryDialog={handleAddEntryDialog} /> 
      
      <Footer />
    </div>
  )
}

export default App
