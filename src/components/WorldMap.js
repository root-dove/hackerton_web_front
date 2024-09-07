import React, { useEffect } from 'react';
import { LarkMap } from '@antv/larkmap';
import { LineLayer, Scene } from '@antv/l7';

const WorldMap = () => {
  const onSceneLoaded = (scene) => {
    fetch('https://gw.alipayobjects.com/os/rmsportal/UEXQMifxtkQlYfChpPwT.txt')
      .then((res) => res.text())
      .then((data) => {
        const layer = new LineLayer({
          blend: 'normal',
        })
          .source(data, {
            parser: {
              type: 'csv',
              x: 'lng1',
              y: 'lat1',
              x1: 'lng2',
              y1: 'lat2',
            },
          })
          .size(1)
          .shape('arc3d')
          .animate({
            enable: true,
            interval: 0.1,
            trailLength: 0.5,
            duration: 2,
          })
          .color('#8C1EB2')
          .style({
            opacity: 0.8,
          });
        scene.addLayer(layer);
      });
    };
    if(!window.mapboxgl) window.mapboxgl = {};
    window.mapboxgl.accessToken = 'pk.eyJ1IjoiaHVpMTYwMSIsImEiOiJja2U5ejRvZWcweGpuMnhweDhlNnhocjcxIn0.ZbppeoZobKSami5SvfN_jA';
  return (
    <LarkMap 
      mapType="Mapbox" 
      style={{ height: '300px' }} 
      onSceneLoaded={onSceneLoaded}
      mapStyle="dark"
      center={[107.77791556935472, 35.443286920228644]}
      zoom={2.9142882493605033}
      token="pk.eyJ1IjoiaHVpMTYwMSIsImEiOiJja2U5ejRvZWcweGpuMnhweDhlNnhocjcxIn0.ZbppeoZobKSami5SvfN_jA"
    >
      <h2 style={{ position: 'absolute', left: '10px', color: 'white' }}>Animated Line Map</h2>
    </LarkMap>
  );
};

export default WorldMap;
