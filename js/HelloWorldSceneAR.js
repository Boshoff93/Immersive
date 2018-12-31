'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,Viro3DObject,
  ViroAmbientLight,
  ViroMaterials,
  ViroOmniLight,
  ViroFlexView,
  ViroQuad,
} from 'react-viro';

import ListButton from './ListButton'

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    this.state = {
      text : "Initializing AR...",
    };
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (     
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroOmniLight color="#FFFFFF" position={[0,0,0]} />
        <ListButton text={this.state.text} position={{x: 0, y:-1, z: -3}} rotation={{y: 0}}/>
        <ListButton text={this.state.text} position={{x: 2.12, y:-1, z: -2.12}} rotation={{y: -45}}/>
        <ListButton text={this.state.text} position={{x: -2.12, y:-1, z: -2.12}} rotation={{y: 45}}/>
        <ListButton text={this.state.text} position={{x: 3, y:-1, z: 0}} rotation={{y: -90}}/>
        <ListButton text={this.state.text} position={{x: -3, y:-1, z: 0}} rotation={{y: 90}}/>
        <ListButton text={this.state.text} position={{x: 2.12, y:-1, z: 2.12}} rotation={{y: -135}}/>
        <ListButton text={this.state.text} position={{x: -2.12, y:-1, z: 2.12}} rotation={{y: 135}}/>
        <ListButton text={this.state.text} position={{x: 0, y:-1, z: 3}} rotation={{y: 180}}/> 
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!!!!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}



module.exports = HelloWorldSceneAR;
