import { Flex, HStack, Text } from "@chakra-ui/react";
import { Characteristics } from "./Characteristics";

export function TripCharacteristics() {
  return (
    <Flex direction={["column", "row"]} maxW='1400px' mx='auto' mt='5.3rem'>
      <Flex
        direction='column'
        alignItems='center'
        ml={["1.3rem", "0rem"]}
        mr={["0rem", "10rem"]}
      >
        <Characteristics
          src='/icons/cocktail 1.svg'
          alt='Cocktail'
          width={80}
          height={80}
        />
        <Text
          color='dark.text'
          fontWeight='semibold'
          fontSize='1.5rem'
          mt='1.5rem'
        >
          vida noturna
        </Text>
      </Flex>
      <Flex
        direction='column'
        alignItems='center'
        mr={["0rem", "10rem"]}
        mt={["2rem", "0rem"]}
      >
        <Characteristics
          src='/icons/surf 1.svg'
          alt='Surf'
          width={80}
          height={80}
        />
        <Text
          color='dark.text'
          fontWeight='semibold'
          fontSize='1.5rem'
          mt='1.5rem'
        >
          praia
        </Text>
      </Flex>
      <Flex
        direction='column'
        alignItems='center'
        mr={["0rem", "10rem"]}
        mt={["2rem", "0rem"]}
      >
        <Characteristics
          src='/icons/building 1.svg'
          alt='Building'
          width={80}
          height={80}
        />
        <Text
          color='dark.text'
          fontWeight='semibold'
          fontSize='1.5rem'
          mt='1.5rem'
        >
          moderno
        </Text>
      </Flex>
      <Flex
        direction='column'
        alignItems='center'
        mr={["0rem", "10rem"]}
        mt={["2rem", "0rem"]}
      >
        <Characteristics
          src='/icons/museum 1.svg'
          alt='Museum'
          width={80}
          height={80}
        />
        <Text
          color='dark.text'
          fontWeight='semibold'
          fontSize='1.5rem'
          mt='1.5rem'
        >
          clássico
        </Text>
      </Flex>
      <Flex
        direction='column'
        alignItems='center'
        mr={["0rem", "10rem"]}
        mt={["2rem", "0rem"]}
      >
        <Characteristics
          src='/icons/earth 1.svg'
          alt='Earth'
          width={80}
          height={80}
        />
        <Text
          color='dark.text'
          fontWeight='semibold'
          fontSize='1.5rem'
          mt='1.5rem'
        >
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
}
