import React, { Component } from 'react';
import firebaseConfig from './config/firebaseConfig';
import _ from 'lodash';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      education: [],
      mainprofile: [],
      personaldetail: [],
      publication: [],
      related: [],
      skill: [],
      training: [],
      work: []
    };

  }

  componentWillMount(){
    //loop state, get data from firebase based on key of state
    for( var key in this.state ){
      if(this.state.hasOwnProperty(key)){
        this.getDataRef(key);
      }
    }
    
  }

  getDataRef( dataKey ){
    let dataRef = firebaseConfig.database().ref( dataKey ).orderByKey();
    dataRef.on('value', snapshot => {
      this.setState( { [dataKey]: this.getData( dataKey, snapshot.val() ) });
    });
  }

  getData( stateKey, values ){
    
    let val = values;
    let dataVal = _(val)
                    .keys()
                    .map( dataKey => {
                      let cloned = _.clone( val[dataKey] );
                      cloned.key = dataKey;
                      return cloned;
                    })
                    .value();
    return dataVal;
  }

  render() {
    console.log( this.state );
    return (
      <div className="App">
      </div>
    );
  }

  componentDidUpdate(){
  }

}

export default App;
