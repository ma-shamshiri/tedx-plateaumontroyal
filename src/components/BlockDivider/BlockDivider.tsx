import React from 'react';
import { Box } from '@chakra-ui/react';


const BlockDivider: React.FC = () => {

    return (
        <Box
            position="relative"
            width="100%"
            height={{base:"5rem", lg:"13rem"}}
            bg="#D9D4C1"
            overflow="hidden"
        >
        </Box>
    );
};

export default BlockDivider;
