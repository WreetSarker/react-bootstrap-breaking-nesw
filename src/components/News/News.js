import React from 'react';
import { Card } from 'react-bootstrap';

const News = (props) => {
    const { title, description, author, publishedAt, urlToImage } = props.article;
    return (
        <div>
            <Card>
                <Card.Img style={{ height: '100px', width: '70px' }} variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{publishedAt}</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default News;