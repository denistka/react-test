import React from 'react'
import Tag from './Tag'
import PropTypes from 'prop-types'

const TagsList = ({ tags }) => (
    <ul>
        {tags.map(tag =>
            <Tag
                key={ tag.id }
                { ...tag }
            />
        )}
    </ul>
);

TagsList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        sentimentScore: PropTypes.number.isRequired
    })).isRequired
};

export default TagsList;