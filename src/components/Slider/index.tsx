import { Heading, Box, Flex } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Countries } from "./Countries";

export function Slider() {
  return (
    <>
      <Box
        color='dark.text'
        textAlign='center'
        mt='6rem'
        _before={{
          content: '""',
          display: "block",
          width: "5.625rem",
          height: "2px",
          background: "dark.text",
          margin: "0 auto",
          marginBottom: "3.25rem",
        }}
      >
        <Heading fontWeight='medium'>Vamos nessa?</Heading>
        <Heading fontWeight='medium'>Então escolha seu continente</Heading>
      </Box>
      <Flex maxW='1400px' mx='auto' my='3rem'>
        <Swiper>
          <SwiperSlide>
            <Countries
              src='/countries/europe.png'
              title='Europa'
              subtitle='O continente mais antigo.'
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
