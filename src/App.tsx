import React from "react";
import { Canvas } from "@react-three/fiber";
import { Fullscreen, Container } from "@react-three/uikit";

export default function App() {
  return (
    <Canvas>
      <Fullscreen flexDirection='row' padding={100} gap={100}>
        <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor='red' />
        <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor='blue' />
      </Fullscreen>
    </Canvas>
  );
}
