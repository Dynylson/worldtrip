import { Flex } from "@chakra-ui/react";
import Image from "next/image";

import Logo from "../../../public/Logo.svg";

export function Header() {
  return (
    <Flex as='header' justifyContent='center' py='2rem'>
      <Image src={Logo} alt='Logo worldtrip' width={185} height={46} />
    </Flex>
  );
}
