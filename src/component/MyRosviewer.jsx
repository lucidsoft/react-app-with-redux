import React, { Component } from 'react';
import * as ROS3D from 'ros3d';
import * as ROSLIB from 'roslib'
//import './css/general.css';

class MyRosviewer extends Component {

    render() {

        let ros = new ROSLIB.Ros({
          url : 'ws://localhost:9090'
        });

        console.log(ros);

        let viewer = new ROS3D.Viewer({
          divID : 'urdf',
          width : 800,
          height : 600,
          antialias : true
        });

        viewer.addObject(new ROS3D.Grid());

        let tfClient = new ROSLIB.TFClient({
          ros : ros,
          angularThres : 0.01,
          transThres : 0.01,
          rate : 10.0
        });

        let urdfClient = new ROS3D.UrdfClient({
          ros : ros,
          tfClient : tfClient,
          path : 'http://resources.robotwebtools.org/',
          rootObject : viewer.scene,
          //loader : ROS3D.COLLADA_LOADER_2
        });

        return (
            <div id="urdf"></div>
        );
    }
}

export default MyRosviewer;