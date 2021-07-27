import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinícius Reis</Text>
          <Text color="gray.300" fontSize="small">
            vinicius.moreira2003@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Vinicius Reis"
        src="https://github.com/reisvini1.png"
      />
    </Flex>
  );
}
