import React, { useState, useEffect } from 'react';
import { Card, Button, Row , Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axiosApi from '../../axiosApi';

const AllQuotes = ({ match, history }) => {

    const [allQuotes, setallQuotes] = useState([])

    console.log(match.params.name)

    useEffect(() => {
        const fetchData = async () => {
            let url = 'quotes.json'

            if(match.params.name) {
                url += `?orderBy="category"&equalTo=${match.params.name}`
            }

            const response = await axiosApi.get(url);
            const allQuotes = Object.keys(response.data).map(id => ({
                ...response.data[id],
                id,
            }))
            setallQuotes(allQuotes);
        };

        fetchData().catch(console.error);
    }, [match.params.name]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axiosApi.get('quotes.json');
    //         const allQuotes = Object.keys(response.data).map(id => ({
    //             ...response.data[id],
    //             id,
    //         }))
    //         setallQuotes(allQuotes);
    //     };

    //     fetchData().catch(console.error);
    // }, []);

    const deleteQuote = async () => {
        await axiosApi.delete('quotes' + match.params.id + '.json');
        history.replace('/');
    }

    return (
        <>
            {allQuotes.map(quote => (
                <Card style={{ margin: '2rem' }} className='mx-5' key={quote.id} >
                    <Card.Header> Quote by: {quote.author}</Card.Header>
                    <Card.Body>
                        <Card.Text>{quote.text}</Card.Text>
                        <Row className='d-flex justify-content-between'>
                            <Col>
                                <NavLink to={'/post' + quote.id}><Button variant="outline-secondary" >Edit Quote</Button></NavLink>
                            </Col>
                            <Col>
                                <Button variant="danger" onClick={deleteQuote}>&#10006;</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default AllQuotes;
