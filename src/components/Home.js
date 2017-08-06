import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { siteName, img } from '../helpers/utils';
import { request } from '../helpers/api';

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    this.request()
  }
  request(){
    request(this.props.url + "&")
    .then(res =>
      this.setState({data: res.results})
    )
  }
  render(){
    console.log(this.state.data);
    return(
      <div className="a">
        <h1>{this.props.title}</h1>
        <ul>
          {this.state.data.map((res, i) => {
            if (i < 10) {
              return (
                <li key={i}>
                  <Link to={`/m/${res.id}`} className="title">{res.name ? res.name : res.title}</Link>
                  <img src={img(res.backdrop_path, "w500")} className="" alt=""/>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

const Home = () => {
  return (
    <DocumentTitle title={`${siteName} | Home`}>
      <div className="home">
        <List title='In Theaters' url='/movie/now_playing?'/>
        <List title='On TV' url='/tv/airing_today?'/>
      </div>
    </DocumentTitle>
  )
}

export default Home;
