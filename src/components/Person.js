import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { siteName, img, icon } from '../helpers/utils';
import { request } from '../helpers/api';

class Person extends React.Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    this.request()
  }
  request(){
    request(`/person/${this.props.match.params.id}?`, 'credits,images')
    .then(data => this.setState({data}))
  }
  render(){
    const {name, biography, profile_path, credits} = this.state.data
    console.log(this.state.data);
    return(
      <div className="">
        <h1>{name && name}</h1>
        <img src={profile_path ? img(profile_path, "w300") : icon('person-placeholder.png')} style={{width: "300px"}} className="" alt=""/>
        <p>{biography && biography}</p>
        <ul>
          {credits && credits.cast.map((res, i) => {
              return (
                <li key={i}>
                  <Link to={`/m/${res.id}`} className="title">{res.name ? res.name : res.title}</Link>
                  <span> as {res.character}</span>
                </li>
              )
          })}
        </ul>
      </div>

    )
  }
}

export default Person;
