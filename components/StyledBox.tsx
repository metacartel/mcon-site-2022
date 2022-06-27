import { useState } from "react";
import { Flex, Box, Text, IconButton, BoxProps } from "@chakra-ui/react";
import { HiX } from "react-icons/hi";

interface StyledBoxProps extends BoxProps {
  title?: string;
  showIcon?: boolean;
  children: React.ReactNode;
  collapsed?: boolean;
}

const StyledBox = ({
  title,
  showIcon = false,
  children,
  collapsed = false,
  ...props
}: StyledBoxProps) => {
  const [collapsedContent, setCollapsedContent] = useState(collapsed);
  const handleCollapse = () => setCollapsedContent(!collapsedContent);

  return (
    <Flex
      direction="column"
      borderTop="4px solid black"
      borderX="4px solid black"
      borderBottom="4px solid black"
      position="relative"
      {...props}
      onClick={handleCollapse}
    >
      <Flex
        direction="row"
        bgColor="primaryNeon"
        padding={0}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        borderBottom="4px solid black"
      >
        {title && (
          <>
            {collapsedContent ? (
              <Flex
                borderBottom={
                  collapsedContent ? "2px solid black" : "4px solid black"
                }
                boxShadow={
                  collapsedContent ? "-20px 20px 0px 1px black" : "none"
                }
                width="100%"
              >
                <Text
                  color="black"
                  fontFamily="Dagheest-Italic"
                  fontStyle="italic"
                  paddingLeft={4}
                  paddingY={1}
                  width="100%"
                >
                  {title}
                </Text>
              </Flex>
            ) : (
              <Text
                color="black"
                fontFamily="Dagheest-Italic"
                fontStyle="italic"
                paddingLeft={4}
                width="100%"
              >
                {title}
              </Text>
            )}
          </>
        )}
        {showIcon && (
          <IconButton
            aria-label="Close box"
            color="black"
            alignSelf="flex-end"
            icon={<HiX />}
            padding={0}
            borderLeft="4px solid black"
            borderRadius="0"
          />
        )}
      </Flex>
      {!collapsedContent && (
        <Box
          borderBottom="2px solid black"
          boxShadow="-20px 10px 0px 10px black"
        >
          {children}
        </Box>
      )}
    </Flex>
  );
};

export default StyledBox;
