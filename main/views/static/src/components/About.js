import React, { useEffect } from 'react';
import { Typography as Text } from '@material-ui/core';

export default function About() {
    useEffect(() => {
        document.title = "About"
    }, []);

    return (
        <div className="about">
            <Text variant="h4" component="h4" gutterBottom>About Page</Text>
            <Text variant="p" component="p" gutterBottom>
                This template was built by <a href="https://github.com/TechStudent11" style={{text_decoration: 'none'}}>TechStudent11</a>.
            </Text>
        </div>
    )
}
