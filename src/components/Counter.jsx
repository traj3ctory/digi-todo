import Card from 'react-bootstrap/Card';

const Counter = ({completed , total}) => {

        return (
        <>
            <Card className="counter">
                <Card.Header>Tasks</Card.Header>
                <Card.Body>
                    { completed } / { total }
                </Card.Body>
            </Card>
        </>
    );
}

export default Counter;
