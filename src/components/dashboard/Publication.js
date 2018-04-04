import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStatePublication from '../../store/dashboard/publication/mapStateAction';
import dispatchStatePublication from '../../store/dashboard/publication/dispatchStateAction';

class Publication extends Component {
  
  componentWillMount() {
    this.props.fetchPublication();
  }
  
  render() {
    return (
      <div>
        <h1 className="display-4 dashboard-title">Publication</h1>
        <hr/>
        <form>
          <div class="form-group">
            <label for="publication-name">Publication</label>
            <input type="text" class="form-control" id="publication-name" placeholder="Example: Undergraduate Thesis"/>
          </div>

          <div class="form-group">
            <label for="publication-description">Publication Description</label>
            <textarea class="form-control" id="publication-description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="publication-link">Link Publication</label>
            <input type="text" class="form-control" id="publication-link" placeholder="Example: http://repository.upi.edu/14288/"/>
          </div>
          
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>

        <hr/>
      </div>
    );
  }
}

export default connect(mapStatePublication, dispatchStatePublication)(Publication);