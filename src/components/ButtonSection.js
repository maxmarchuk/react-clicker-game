import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSection extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className="button-section">
                <h4 className="button-section-title">{title}</h4>
                <div className="button-section-children">{children}</div>
            </div>
        );
    }
}

ButtonSection.propTypes = {
    title: PropTypes.string
};
ButtonSection.defaultProps = {
    title: 'ButtonSectionTitle'
};

export default ButtonSection;
