import { Text, Heading, Flex } from "@chakra-ui/react";

interface CountriesProps {
  src: string;
  title: string;
  subtitle: string;
}

export function Countries({ src, title, subtitle }: CountriesProps) {
  return (
    <Flex
      direction='column'
      bg={`url(${src}) no-repeat`}
      width={1300}
      height={450}
      alignItems='center'
      justifyContent='center'
    >
      <Heading color='light.text' fontSize='3rem' fontWeight='bold' mb='1rem'>
        {title}
      </Heading>
      <Text color='light.info' fontSize='1.5rem' fontWeight='bold'>
        {subtitle}
      </Text>
    </Flex>
  );
}
