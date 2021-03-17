import Card from 'react-bootstrap/Card';

const Counter = ({completed , total}) => {

        return (
        <div className="d-none d-md-block">
            <Card className="counter">
                <Card.Header>Tasks</Card.Header>
                <Card.Body>
                    { completed } / { total }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Counter;
