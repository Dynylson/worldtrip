import { Flex, HStack, Text } from "@chakra-ui/react";
import { Characteristics } from "./Characteristics";

export function TripCharacteristics() {
  return (
    <Flex maxW='1400px' mx='auto' mt='5.3rem'>
      <HStack spacing='12rem'>
        <Flex direction='column' alignItems='center'>
          <Characteristics
            src='/icons/cocktail 1.svg'
            alt='Cocktail'
            width={50}
            height={50}
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
        <Flex direction='column' alignItems='center'>
          <Characteristics
            src='/icons/surf 1.svg'
            alt='Surf'
            width={50}
            height={50}
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
        <Flex direction='column' alignItems='center'>
          <Characteristics
            src='/icons/building 1.svg'
            alt='Building'
            width={50}
            height={50}
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
        <Flex direction='column' alignItems='center'>
          <Characteristics
            src='/icons/museum 1.svg'
            alt='Museum'
            width={50}
            height={50}
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
        <Flex direction='column' alignItems='center'>
          <Characteristics
            src='/icons/earth 1.svg'
            alt='Earth'
            width={50}
            height={50}
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
      </HStack>
    </Flex>
  );
}
