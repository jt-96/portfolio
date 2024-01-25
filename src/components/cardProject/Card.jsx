import React from "react";
import { Card, Button } from 'react-bootstrap';
import './Card.css';

function CardProject(props) {

    return (
        <Card className="col-md-3 my-3" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}` + props.project.image} />
            <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title>{props.project.name}</Card.Title>
                <Card.Text>{props.project.description}</Card.Text>
                <div className="row d-flex flex-grow-1 align-items-end">
                    <div className="d-flex justify-content-between flex-grow-1">

                        {
                            props.project.projectLink ?

                                <Button className="" variant="primary" href={props.project.projectLink} target="_blank" rel="noopener noreferrer">
                                    Visit Page
                                </Button>

                                :

                                null
                        }

                        {
                            props.project.gitLink ?

                                <Button className="" variant="primary" href={props.project.gitLink} target="_blank" rel="noopener noreferrer">
                                    GitHub Repo
                                </Button>

                                :

                                null
                        }

                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardProject;