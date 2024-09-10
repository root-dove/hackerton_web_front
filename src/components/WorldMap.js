import React, { useEffect } from 'react';
import { LarkMap } from '@antv/larkmap';
import { LineLayer, Scene } from '@antv/l7';

const WorldMap = () => {
  const onSceneLoaded = (scene) => {
    fetch('/attackData.txt')
      .then((res) => res.text())
      .then((data) => {
        const realData = data;
        data = data.split('\n').filter((line, index) => index === 0 || Math.random() > 0.90).join('\n');
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
          .shape('arc')
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
        setInterval(() => {
          layer.setData(realData.split('\n').filter((line, index) => index === 0 || Math.random() > 0.90).join('\n'));
        }, 60000);
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
      mapOptions={{
        zoom: 3,
        center: [127.51424646, 36.56344139],
      }}
      token="pk.eyJ1IjoiaHVpMTYwMSIsImEiOiJja2U5ejRvZWcweGpuMnhweDhlNnhocjcxIn0.ZbppeoZobKSami5SvfN_jA"
    >
    </LarkMap>
  );
};

export default WorldMap;
