import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const Tag = ({ id, label, sentimentScore }) => (
            <li style={{
                fontSize: `${ sentimentScore / 100 }em`,
                animationDelay: `${ Math.random() * 2 }s`,
                animationDuration: `${ Math.random() * 7 + 7 }s`
            }}>
                <Link to={ id }>
                    { label }
                </Link>
            </li>
        );

Tag.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    sentimentScore: PropTypes.number.isRequired
};

export default Tag;