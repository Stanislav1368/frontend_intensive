// src/pages/Books.js
import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import { getBooks } from "../api/books";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books Page</h1>
      <Row gutter={16}>
        {books.map((book) => (
          <Col span={8} key={book.id}>
            <Card title={book.title} bordered={false}>
              <p>
                <b>Genre:</b> {book.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <b>Publication Year:</b> {book.publicationYear ? new Date(book.publicationYear).getFullYear() : "N/A"}
              </p>
              <p>
                <b>Available:</b> {book.isAvailable ? "Yes" : "No"}
              </p>
              <p>
                <b>Author:</b> {book.authors.map((author) => `${author.firstName} ${author.lastName}`).join(", ")}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Books;
