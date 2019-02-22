import React from 'react';
import PropTypes from "prop-types";

const TagFullInfo = ({ label, mentions, pageType }) => (
    <div className='tag-full-info'>
        <p><span className="field-name">label:</span><span className='value'>{ label }</span></p>

        {Object.keys(mentions).map((item) => (
            <p key={ item }><span className="field-name">{ item } mentions:</span><span className='value'>{ mentions[item] }</span></p>))}

        <p>
            <span className="field-name">list of page types:</span>
            {Object.keys(pageType).map((item) => <span className='value value--tag' key={ item }>{ item }</span>)}</p>
    </div>
);

TagFullInfo.propTypes = {
    label: PropTypes.string.isRequired,
    mentions: PropTypes.shape({}).isRequired,
    pageType: PropTypes.shape({}).isRequired
};

export default TagFullInfo;