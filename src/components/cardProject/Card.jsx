import React from "react";
import { Card, Button } from 'react-bootstrap';
import './Card.css';

function CardProject(props) {

    return (
        <Card className="col-md-3 my-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}` + props.project.image} />
            <Card.Body>
                <Card.Title>{props.project.name}</Card.Title>
                <Card.Text>{props.project.description}</Card.Text>
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <Button className="" variant="primary" href={props.project.projectLink} target="_blank" rel="noopener noreferrer">
                            Visit Page
                        </Button>
                        <Button className="" variant="primary" href={props.project.gitLink} target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardProject;