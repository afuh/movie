import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { siteName, img } from '../helpers/utils';
import { request } from '../helpers/api';

class Principal extends React.Component {
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
    request(`/movie/${this.props.match.params.id}?`, 'credits,images,reviews,similar,videos')
    .then(data => this.setState({data}))
  }
  crew(credits){
    const findJob = str => credits.crew.find(cr => cr.job === str)
    return {
      director: findJob("Director"),
      writer: findJob("Writer"),
      producer: findJob("Producer"),
      composer: findJob("Original Music Composer")
    }
  }
  render () {
    const { title, overview, poster_path, release_date, credits } = this.state.data
    const crew = credits && this.crew(credits)
    const stars = credits && credits.cast.filter(actor => actor.order < 10)
    return (
      <div className="a">
        <h1>{title}</h1>
        <span>{release_date && release_date.split("-")[0]}</span>
        <img src={poster_path && img(poster_path, "w300")} style={{width: "300px"}} className="" alt=""/>
        <span> Director: {crew && crew.director.name}</span>
        <p>{overview}</p>
        <ul className="actors">
          {stars && stars.map(star => (
            <li key={star.name}>
              <Link to={`/p/${star.id}`} className="title">{star.name}</Link>
              <img src={img(star.profile_path, "w300")} style={{width: "240px", padding: "10px"}} className="" alt=""/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Principal;
