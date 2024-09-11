import React, { useEffect, useRef } from 'react';
import { EarthLayer, LineLayer, Scene } from '@antv/l7';
import { Earth } from '@antv/l7-maps';

const WorldMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    // check already map exist
    if (mapRef.current.children.length) return;

    const scene = new Scene({
      id: mapRef.current,
      map: new Earth({}),
    });

    scene.setBgColor('#333');

    const earthlayer = new EarthLayer()
      .source('https://gw.alipayobjects.com/mdn/rms_23a451/afts/img/A*3-3NSpqRqUoAAAAAAAAAAAAAARQnAQ', {
        parser: {
          type: 'image',
        },
      })
      .color('#2E8AE6')
      .shape('fill')
      .style({
        globalOptions: {
          ambientRatio: 0.6,
          diffuseRatio: 0.4,
          specularRatio: 0.1,
        },
      })
      .animate({
        enable: true,
      });

    scene.on('loaded', () => {
      scene.addLayer(earthlayer);
      // scene.addLayer(atomLayer);
      // scene.addLayer(bloomLayer);

      fetch('/attackData.txt')
        .then((res) => res.text())
        .then((data) => {
          const realData = data;
          data = data.split('\n').filter((line, index) => index === 0 || Math.random() > 0.90).join('\n');
          const flyLine = new LineLayer({ blend: 'normal' })
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng1',
                y: 'lat1',
                x1: 'lng2',
                y1: 'lat2',
              },
            })
            .color('#ff0000aa')
            .shape('arc3d')
            .size(0.2)
            .active(true)
            .animate({
              interval: 2,
              trailLength: 2,
              duration: 1,
            })
            .style({
              segmentNumber: 60,
              globalArcHeight: 20,
            });
          setInterval(() => {
            flyLine.setData(realData.split('\n').filter((line, index) => index === 0 || Math.random() > 0.90).join('\n'));
          }, 60000);
          scene.addLayer(flyLine);
        });

      earthlayer.setEarthTime(0.0);
    });

    return () => {
      scene.destroy();
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '300px' }} />;
};

export default WorldMap;