import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {
                showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Clovis Carmezini</Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >
                            cloviscarmezini14@gmail.com
                        </Text>
                    </Box>
                )
            }

            <Avatar
                size="md"
                name="Clovis Carmezini"
                src="https://github.com/cloviscarmezini.png"
            />
        </Flex>
    )
}