import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { siteName, img, icon } from '../helpers/utils';
import { request } from '../helpers/api';

class Show extends React.Component {
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
    request(`/tv/${this.props.match.params.id}?`, 'credits,images,reviews,similar,videos')
    .then(data => this.setState({data}))
  }
  // crew(credits){
  //   const findJob = str => credits.crew.find(cr => cr.job === str)
  //   return {
  //     director: findJob("Director"),
  //     writer: findJob("Writer"),
  //     producer: findJob("Producer"),
  //     composer: findJob("Original Music Composer")
  //   }
  // }
  render () {
    const { title, overview, poster_path, release_date, credits, created_by } = this.state.data
    // const crew = credits && this.crew(credits)
    const stars = credits && credits.cast.filter(actor => actor.order < 10)
    console.log(this.state.data);
    return (
      <div className="a">
        <h1>{title}</h1>
        <span>{release_date && release_date.split("-")[0]}</span>
        {poster_path && <img src={img(poster_path, "w300")} style={{width: "300px"}} className="" alt=""/>}
        <div className="">
          <span> Created by: </span>
            {created_by && created_by.map(creator => <span key={creator.name}>{creator.name}</span>)}
        </div>
        <p>{overview}</p>
        <ul className="actors">
          {stars && stars.map(star => (
            <li className="star" key={star.name}>
              <div className="star__name">
                <Link to={`/p/${star.id}`} className="title">{star.name}</Link>
                <span>{star.character}</span>
              </div>
              <Link to={`/p/${star.id}`} className="title">
                <img src={star.profile_path ? img(star.profile_path, "w300") : icon('person-placeholder.png')} style={{width: "240px"}} className="" alt=""/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Show;
