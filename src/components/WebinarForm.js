import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { WebinarContext } from './WebinarContext';

const WebinarForm = ({ show, handleClose, editWebinar }) => {
  const { addWebinar, updateWebinar } = useContext(WebinarContext);
  const [webinar, setWebinar] = useState(editWebinar || {
    id: null,
    instructorName: '',
    instructorRole: '',
    instructorCompany: '',
    topics: '',
    webinarTitle: '',
    startDate: '',
    startTime: '',
    endTime: '',
  });

  useEffect(() => {
    if (editWebinar) {
      setWebinar(editWebinar);
    }
  }, [editWebinar]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setWebinar({ ...webinar, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (webinar.id) {
      updateWebinar(webinar);
    } else {
      webinar.id = Date.now(); // Generate a unique ID
      addWebinar(webinar);
    }
    handleClose();
  };

  const handleReset = () => {
    setWebinar(editWebinar || {
      id: null,
      instructorName: '',
      instructorRole: '',
      instructorCompany: '',
      topics: '',
      webinarTitle: '',
      startDate: '',
      startTime: '',
      endTime: '',
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{webinar.id ? 'Edit Webinar' : 'Create Webinar'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col md={6}>
                <h5>Instructor Details</h5>
                <Form.Group controlId="instructorName">
                  <Form.Label>Instructor Name*</Form.Label>
                  <Form.Control type="text" value={webinar.instructorName} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="instructorRole">
                  <Form.Label>Instructor Role*</Form.Label>
                  <Form.Control type="text" value={webinar.instructorRole} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="instructorCompany">
                  <Form.Label>Instructor Company*</Form.Label>
                  <Form.Control type="text" value={webinar.instructorCompany} onChange={handleChange} required />
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
                <Form.Label>Instructor Image</Form.Label>
                <div className="image-upload">
                  <input type="file" id="file-input" />
                  <label htmlFor="file-input" className="image-upload-label">
                    <div className="image-upload-placeholder">+</div>
                  </label>
                </div>
                <Form.Group controlId="topics" className="w-100 mt-5">
                  <Form.Label>Topics*</Form.Label>
                  <Form.Control type="text" value={webinar.topics} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <h5>Webinar Details</h5>
                <Form.Group controlId="webinarTitle">
                  <Form.Label>Webinar Title*</Form.Label>
                  <Form.Control type="text" value={webinar.webinarTitle} onChange={handleChange} required />
                </Form.Group>

                <Row>
                  <Col md={4}>
                    <Form.Group controlId="startDate">
                      <Form.Label className="mt-2">Start Date*</Form.Label>
                      <Form.Control type="date" value={webinar.startDate} onChange={handleChange} required />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group controlId="startTime">
                      <Form.Label className="mt-2">Start Time*</Form.Label>
                      <Form.Control type="time" value={webinar.startTime} onChange={handleChange} required />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group controlId="endTime">
                      <Form.Label className="mt-2">End Time*</Form.Label>
                      <Form.Control type="time" value={webinar.endTime} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className="d-flex justify-content-between mt-4">
            <Button variant="primary" type="submit">{webinar.id ? 'Update' : 'Create'} Webinar</Button>
            <Button variant="secondary" onClick={handleReset}>Cancel</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WebinarForm;
