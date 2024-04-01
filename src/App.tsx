import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Fullscreen, Container, Text } from "@react-three/uikit";
import { Defaults } from "./packages/kits/default/theme";
import { Button } from "./packages/kits/default/button";
import { ButtonPowerful } from "./components/custom/ButtonPowerful";
// import { Defaults } from "@/theme";

const useManageFocus = ({ length }: { length: number }) => {
  const [selected_index, set_selected_index] = useState(0);
  const registeredButtonsRef = React.useRef<{ index: number; onClick: any }[]>([]);

  const registerButton = ({ index, onClick }: { index: number; onClick: any }) => {
    const contains_button_already = registeredButtonsRef.current.some(btn => btn.index === index);
    if (!contains_button_already) {
      registeredButtonsRef.current.push({ index, onClick });
    }
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        if (selected_index === 0) {
          return;
        }
        set_selected_index(selected_index - 1);
      } else if (e.key === "ArrowDown") {
        if (selected_index === length - 1) {
          return;
        }
        set_selected_index(selected_index + 1);
      } else if (e.key === "Enter") {
        const selected_button = registeredButtonsRef.current.find(btn => btn.index === selected_index);
        if (selected_button) {
          selected_button.onClick();
        }
      }
    },
    [selected_index]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { selected_index, set_selected_index, registerButton };
};

export default function App() {
  const { selected_index, registerButton } = useManageFocus({ length: 2 });
  return (
    <Canvas
      flat
      camera={{ position: [0, 0, 18], fov: 35 }}
      style={{ height: "100dvh", touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <Fullscreen flexDirection='column' padding={100} gap={100}>
        <Defaults>
          <Container width={"100%"} alignItems={"center"} gap={20}>
            <ButtonPowerful
              index={0}
              selected_index={selected_index}
              parentHelperFn={registerButton}
              onClick={() => window.open("https://liliputing.com", "_blank")}
              //
              variant='secondary'
              size='sm'
              maxWidth={200}
              backgroundColor={"blue"}
              hover={{ backgroundColor: "red" }}
              active={{ backgroundColor: "green" }}
            >
              <Text>Press me</Text>
            </ButtonPowerful>

            <ButtonPowerful
              index={1}
              selected_index={selected_index}
              parentHelperFn={registerButton}
              onClick={() => window.open("https://google.com", "_blank")}
              //
              variant='secondary'
              size='sm'
              maxWidth={200}
              backgroundColor={"blue"}
              hover={{ backgroundColor: "red" }}
              active={{ backgroundColor: "green" }}
            >
              <Text>Press me 2</Text>
            </ButtonPowerful>

            {/* <Button
              variant='secondary'
              size='sm'
              maxWidth={200}
              backgroundColor={"blue"}
              hover={{ backgroundColor: "red" }}
              active={{ backgroundColor: "green" }}
              // focus={{ backgroundColor: "green" }}
              // click={{ backgroundColor: "red"}}
              data-id='morse'
              onClick={() => window.open("https://github.com/pmndrs/uikit/tree/main/examples/dashboard", "_blank")}
            >
              <Text>Morse Mode</Text>
            </Button>
            <Button
              variant='secondary'
              size='sm'
              maxWidth={200}
              backgroundColor={"blue"}
              hover={{ backgroundColor: "red" }}
              active={{ backgroundColor: "green" }}
              // focus={{ backgroundColor: "green" }}
              // click={{ backgroundColor: "red"}}
              data-id='shmorgas'
              onClick={() => window.open("https://github.com/pmndrs/uikit/tree/main/examples/dashboard", "_blank")}
            >
              <Text>Shmorgas Bode</Text>
            </Button> */}
          </Container>
        </Defaults>
      </Fullscreen>
    </Canvas>
  );
}
