import React, { Component } from 'react';

import moviesData from '../data/movies.json';

export default class requestMovies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: false,
//       isLoad: false,
//     };
//   }
//   componentDidMount() {
    // let url = 'http://localhost/simplon/api-movies/src/data/movies.json';
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           isLoad: true,
//           items: json,
//         });
//       });
//   }
  render() {
    // var { isLoad, items } = this.state;
    // if (isLoad) {
    //   return <div className="load">Chargement de la page...</div>;
    // } else {
      return (
        <div className="cardMedia ">
          {moviesData.map((moviesDetail, index) => {
            return (
              <div key={index} className="card shadow mx-3 my-5">
                <h3 className="text-center text-white p-2 bg-dark">
                  {moviesDetail.titleMedia}
                </h3>
                <img src={moviesDetail.imgMedia} className="imgcard" alt="" />
              </div>
            );
          })}
        </div>
      );
    // }
  }
}
