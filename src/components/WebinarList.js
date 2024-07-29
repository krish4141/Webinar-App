import React, { useContext, useState } from 'react';
import { WebinarContext } from './WebinarContext';
import CardComponent from './CardComponent';
import WebinarForm from './WebinarForm';
import { Button, FormControl, InputGroup, Container, Row, Col, Form } from 'react-bootstrap';
import './WebinarList.css';

const WebinarList = () => {
  const { webinars, deleteWebinar } = useContext(WebinarContext);
  const [showForm, setShowForm] = useState(false);
  const [editWebinar, setEditWebinar] = useState(null);
  const [filterTopic, setFilterTopic] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreate = () => {
    setEditWebinar(null);
    setShowForm(true);
  };

  const handleEdit = (webinar) => {
    setEditWebinar(webinar);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditWebinar(null);
  };

  const handleFilterChange = (e) => {
    setFilterTopic(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredWebinars = webinars.filter(webinar => {
    return (
      (!filterTopic || webinar.topics.includes(filterTopic)) &&
      (webinar.instructorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
       webinar.instructorRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
       webinar.webinarTitle.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <Container>
      <Row className="align-items-center mb-3">
        <Col>
          <h1>Webinar</h1>
        </Col>
        <Col className="text-right" style={{ marginLeft:"780px"}}>
          <Button onClick={handleCreate} className="btn btn-primary">Add Webinar</Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <FormControl
              placeholder="Search for webinar"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <Form.Control as="select" value={filterTopic} onChange={handleFilterChange}>
            <option value="">Topic</option>
            {/* Add more options dynamically if needed */}
            <option value="Front End Engineering">Front End Engineering</option>
            <option value="Career">Career</option>
            <option value="Other Topics">Other Topics</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        {filteredWebinars.map(webinar => (
          <Col md={4} key={webinar.id} className="mb-4">
            <CardComponent 
              webinar={webinar}
              onEdit={handleEdit}
              onDelete={() => deleteWebinar(webinar.id)}
            />
          </Col>
        ))}
      </Row>
      {showForm && (
        <WebinarForm show={showForm} handleClose={handleClose} editWebinar={editWebinar} />
      )}
    </Container>
  );
};

export default WebinarList;
