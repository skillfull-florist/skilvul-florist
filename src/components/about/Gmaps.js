import React from 'react';

const gmapsSrc =
  'https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed';

const gmapsCanvas = {
  overflow: 'hidden',
  background: 'none !important',
  height: '320px',
  width: '320px',
};

const mapRouter = {
  position: 'relative',
  textAlign: 'right',
  height: '320px',
  width: '320px',
};

const GmapsAddress = () => {
  return (
    <div style={mapRouter}>
      <div style={gmapsCanvas}>
        <iframe
          title='gmap_canvas'
          width='320'
          height='320'
          id='gmap_canvas'
          src={gmapsSrc}
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
        ></iframe>
      </div>
    </div>
  );
};

export default GmapsAddress;
