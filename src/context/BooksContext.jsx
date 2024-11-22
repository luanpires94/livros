import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const BooksContext = createContext();

export const useBooks = () => useContext(BooksContext);

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const addBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  useEffect(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  return (
    <BooksContext.Provider value={{ books, addBook }}>
      {children}
    </BooksContext.Provider>
  );
};

BooksProvider.propTypes = {
  children: PropTypes.object,
};
