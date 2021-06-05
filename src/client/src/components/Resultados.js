import React from 'react';

const Resultados = ({ data, option }) => {
  console.log(data);
  console.log(option);

  return (
    <>
      <div className="cita">
        {Number(option) === 2 &&
          data &&
          data.mediaInfo &&
          data.mediaInfo.map(x => (
            <div className="upper">
              <span>Country {x.country}</span>
              <span>Directores {x.director ? x.director.join(', ') : ''}</span>
              <span>Año {x.release_year}</span>
              <span>Cast {x.cast ? x.cast.join(', ') : ''}</span>
            </div>
          ))}
        {Number(option) === 1 && <h1 style={{ color: '#000' }}>{data.moviesPerCountry}</h1>}
      </div>
    </>
  );
};

export default Resultados;
