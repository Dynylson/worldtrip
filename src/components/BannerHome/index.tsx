import { Flex, Box, Grid, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

import BackgroundHome from "../../../public/BackgroundHome.png";

export function BannerHome() {
  return (
    <Flex
      bgImage="url('/BackgroundHome.png')"
      bgRepeat='no-repeat'
      bgSize='cover'
      maxW='100%'
      height='335px'
      position='relative'
    >
      <Flex
        maxW='1400px'
        w='100%'
        mx='auto'
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex direction='column' ml={["1.3rem"]}>
          <Heading
            color='white'
            justifyContent='start'
            lineHeight='3.375rem'
            fontSize='2.25rem'
            fontWeight='medium'
            mb='1.25rem'
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color='light.info' fontSize='1.25rem' fontWeight='regular'>
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Flex>
        <Box
          position='absolute'
          right='25rem'
          bottom='-1.7rem'
          display={["none", "none", "none", "block"]}
        >
          <Image src='/Airplane.png' alt='Aviao' width='418' height='271' />
        </Box>
      </Flex>
    </Flex>
  );
}
