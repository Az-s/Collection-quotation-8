import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Spinners from '../Spinners/Spinners';

const AddQuote = ({ history }) => {

    const [addQuote, setaddQuote] = useState({
        title: '',
        description: '',
    });

    const [loading, setLoading] = useState(false);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        // const name = e.target.name
        // const value = e.target.value
        setPost(prev => ({
            ...prev,
            [name]: value,
        }))
    };

    const createPost = async (e) => {
        e.preventDefault();
        console.log(post);
        setLoading(true);

        try {
            await axiosApi.post('/posts.json', { post })
        } finally {
            setLoading(false);
            history.replace('/');
        }
    }


    let form = (
        <Form className='p-5' onSubmit={createPost}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name='title'
                    placeholder="Title"
                    value={post.title}
                    onChange={onInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name='description'
                    placeholder="Description"
                    value={post.description}
                    onChange={onInputChange}
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
            <Card style={{ width: '100%', marginTop: '5rem' }}>
                <Card.Header>Add new post</Card.Header>
                {form}
            </Card>
        </>
    )
}

export default AddQuote;