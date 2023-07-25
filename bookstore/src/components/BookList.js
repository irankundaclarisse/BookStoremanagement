import React, { useState } from 'react';

const BookList = ({ books, onAddClick, onUpdateClick, onDeleteClick }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newPublished, setNewPublished] = useState('');
  const [newISBN, setNewISBN] = useState('');
  const [newPublisher, setNewPublisher] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAddSubmit = () => {
    // Create a new book object from the input data
    const newBook = {
      title: newTitle,
      author: newAuthor,
      published: newPublished,
      isbn: newISBN,
      publisher: newPublisher,
      description: newDescription,
    };

    onAddClick(newBook);

    // Reset the input states and hide the "Add" modal
    setNewTitle('');
    setNewAuthor('');
    setNewPublished('');
    setNewISBN('');
    setNewPublisher('');
    setNewDescription('');
    setShowAddModal(false);
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-4">BookStore Inventory Management</h1>

      {/* Add Button */}
      <div className="text-right mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Author</th>
            <th className="border border-gray-400 px-4 py-2">Published</th>
            <th className="border border-gray-400 px-4 py-2">ISBN</th>
            <th className="border border-gray-400 px-4 py-2">Publisher</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border border-gray-400">
              <td className="border border-gray-400 px-4 py-2">{book.id}</td>
              <td className="border border-gray-400 px-4 py-2">{book.title}</td>
              <td className="border border-gray-400 px-4 py-2">{book.author}</td>
              <td className="border border-gray-400 px-4 py-2">{book.published}</td>
              <td className="border border-gray-400 px-4 py-2">{book.isbn}</td>
              <td className="border border-gray-400 px-4 py-2">{book.publisher}</td>
              <td className="border border-gray-400 px-4 py-2">{book.description}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                  onClick={() => onUpdateClick(book)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onDeleteClick(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Book Information</h2>
            <form>
              <label htmlFor="newTitle">Title</label>
              <input
                type="text"
                id="newTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              {/* Add input fields for other book attributes (e.g., author, published, isbn, publisher, description) */}
              <button type="button" onClick={handleAddSubmit}>Add</button>
              <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
