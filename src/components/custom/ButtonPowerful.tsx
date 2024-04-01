import React, { useEffect, type ComponentPropsWithoutRef } from "react";
import { Button } from "../../packages/kits/default/button";
import { Container } from "@react-three/uikit";

interface ButtonPowerfulProps {
  index: number;
  selected_index: number;
  parentHelperFn: ({ index, onClick }: { index: number; onClick: any }) => void;
}

export const ButtonPowerful = ({
  children,
  parentHelperFn,
  onClick,
  index,
  selected_index,
  ...restProps
}: ComponentPropsWithoutRef<typeof Button> & ButtonPowerfulProps) => {
  const is_selected = index === selected_index;
  const selected_props = is_selected ? { border: 1, marginTop: -1, marginBottom: -1 } : { border: 0 };

  useEffect(() => {
    parentHelperFn({ index, onClick });
  }, []);

  return (
    <Container width={"auto"} {...selected_props} padding={5} borderColor={"red"}>
      <Button {...restProps} onClick={onClick}>
        {children}
      </Button>
    </Container>
  );
};
