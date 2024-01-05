import React from 'react';
import { Html } from '@react-three/drei';
import { VRButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Sky, Stars } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Hands } from '@react-three/xr';
import Cube from './Cube';
import RockStack from './RockStack';

function XRScene(): JSX.Element {
  return (
    <div>
      <Canvas>
        <Physics gravity={[0, -9.81, 0]}>
          <Html>
            {/* You can place your HTML content here */}
            <div>
              <VRButton
                sessionInit={{ optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'] }}
              />
            </div>
          </Html>
          <XR >
            {/* Sky */}
            <Sky />
            {/* Hand tracking */}
            <Hands />
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial color="lightgray" />
            </mesh>



            {/* Interactive Cube */}
            <Cube position={[0, 2, -5]} />

            {/* Rock Stack */}
            <RockStack />


            {/* Your XR content goes here */}
            <mesh rotation={[0, 0.01, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="blue" />
            </mesh>
          </XR>
        </Physics>
        {/* OrbitControls can be conditionally rendered based on whether in VR mode or not */}
      </Canvas>
    </div>
  );
}

export default XRScene;
