import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showingFormReview: false };

  renderContent() {
    if (this.state.showingFormReview) {
      return <SurveyFormReview 
        onCancel={() => this.setState({ showingFormReview: false })}
      />;
    }

    return <SurveyForm 
      onSurveySubmit={() => this.setState({ showingFormReview: true })}
    />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);