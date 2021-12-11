import React, { useEffect } from 'react';
import {
    Typography as Text,
    ButtonGroup,
    Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Homepage() {
    useEffect(() => {
        document.title = "Homepage"
    }, []);
    
    return (
        <div className="homepage">
            <Text variant="h4" component="h4" gutterBottom>Homepage</Text>
            <ButtonGroup>
                <Button variant='contained' color='primary' to='/about' component={Link}>
                    About Page
                </Button>
                <Button variant='contained' color='secondary' href='/api'>
                    API Link
                </Button>
            </ButtonGroup>
        </div>
    )
}
