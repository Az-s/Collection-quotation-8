import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Spinners from '../Spinners/Spinners';
import axiosApi from '../../axiosApi';

const AddQuote = ({ history }) => {

    const [addQuote, setaddQuote] = useState({
        author: '',
        category: '',
        text: '',
    });

    const [loading, setLoading] = useState(false);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setaddQuote(prev => ({
            ...prev,
            [name]: value,
        }))
    };

    const createQuote = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axiosApi.post('/quotes.json', { ...addQuote })
        } finally {
            setLoading(false);
            history.replace('/');
        }
    }

    let form = (
        <Form className='p-5' onSubmit={createQuote}>
            <Form.Select aria-label="Floating label select example"
                as="select"
                name='category'
                value={addQuote.category}
                onChange={onInputChange}
            >
                <option>Open this select menu</option>
                <option value={'star-wars'}>Star Wars</option>
                <option value={'famous-people'}>Famous people</option>
                <option value={'saying'}>Saying</option>
                <option value={'humor'}>Humor</option>
                <option value={'motivational'}>Motivational</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    name='author'
                    placeholder="Author"
                    value={addQuote.author}
                    onChange={onInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quote text</Form.Label>
                <Form.Control
                    type="text"
                    name='text'
                    placeholder="Quote Text"
                    value={addQuote.text}
                    onChange={onInputChange}
                    as="textarea"
                    rows={3}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

    if (loading) {
        form = <Spinners />
    }

    return (
        <>
            <Card style={{ width: '90%', marginTop: '5rem' }} className="mx-5">
                <Card.Header>Add new Quote</Card.Header>
                {form}
            </Card>
        </>
    )
}

export default AddQuote;
