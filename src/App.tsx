import React from "react";
import { Canvas } from "@react-three/fiber";
import { Fullscreen, Container, Text } from "@react-three/uikit";
import { Defaults } from "./packages/kits/default/theme";
import { Button } from "./packages/kits/default/button";
// import { Defaults } from "@/theme";

export default function App() {
  return (
    <Canvas
      flat
      camera={{ position: [0, 0, 18], fov: 35 }}
      style={{ height: "100dvh", touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <Fullscreen flexDirection='column' padding={100} gap={100}>
        <Defaults>
          <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor='red' />
          <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor='blue' />
          <Container width={"100%"} alignItems={"center"}>
            <Button
              variant='secondary'
              size='sm'
              maxWidth={200}
              backgroundColor={"blue"}
              hover={{ backgroundColor: "red" }}
              active={{ backgroundColor: "green" }}
              // focus={{ backgroundColor: "green" }}
              // click={{ backgroundColor: "red"}}
              // onClick={() => window.open('https://github.com/pmndrs/uikit/tree/main/examples/dashboard', '_blank')}
            >
              <Text>Source Code</Text>
            </Button>{" "}
          </Container>
        </Defaults>
      </Fullscreen>
    </Canvas>
  );
}
