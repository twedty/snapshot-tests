import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem"}}>
            {'https://github.com/twedty'}
            <Card.Img variant="top" src={'https://avatars.githubusercontent.com/u/157083523?v=4'} />
            <Card.Body>
                <Card.Title>James Twedt</Card.Title>
                <Card.Text>
                I am a gamer at heart and I love to solve problems. Coding has been a really fun yet hard way to do both of them.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard