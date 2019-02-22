import React from 'react'
import { connect } from 'react-redux'
import TagsList from '../components/TagsList'
import { getTagsList } from '../actions';

class TagsCloud extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getTagsList())
    }

    render() {
        return (
            <div className='tags-cloud'>
                <TagsList  tags={ this.props.items }/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.tags.items
});

export default connect(mapStateToProps)(TagsCloud)
