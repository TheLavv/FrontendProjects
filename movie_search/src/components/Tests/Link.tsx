import React from 'react';
import { string } from 'prop-types';

export const Link = ({ title, url }: any) => {

    return (
        <a href={url}>
            {title}
        </a>
    )
}

Link.propTypes = {
    title: string.isRequired,
    url: string.isRequired
};

export default Link;