import React from 'react'
import { connect } from 'react-redux'
import TagFullInfo from '../components/TagFullInfo'
import { getTagInfo } from '../actions';

class TagDescription extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getTagInfo(this.props.id))
    }
    render() {
        return (
            <TagFullInfo { ...this.props }/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.match.params.id,
        label: state.tags.selectedItem.label,
        pageType: state.tags.selectedItem.pageType,
        mentions: state.tags.selectedItem.mentions
    })
};

export default connect(mapStateToProps)(TagDescription)
