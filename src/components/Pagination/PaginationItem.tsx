import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  numPage: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  isCurrent = false,
  numPage,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {numPage}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
    >
      {numPage}
    </Button>
  );
}
