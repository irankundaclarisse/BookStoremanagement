
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import Filters from './components/Filters';
import Pagination from './components/Pagination';

const App = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({});

  // Fetch books when the page or filters change
  useEffect(() => {
    fetchBooks();
  }, [currentPage, filters]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/display`, {
        params: { page: currentPage, ...filters },
      });
      setBooks(response.data.data);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const applyFilters = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='mt-4'>
      <h1 className='mx-10 text-lg'>Book Records</h1>
      <Filters applyFilters={applyFilters} />
      <BookList books={books} />
      <Pagination className='mx-4 mt-4' currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;

