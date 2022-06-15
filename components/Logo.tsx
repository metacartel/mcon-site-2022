import { Stack, Text, AspectRatio, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginLeft="-8"
    >
      <Text as="span" role="img" aria-labelledby="chili emoji" fontSize="24px">
        🌶️
      </Text>
      {/* <svg
        width="85"
        height="40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path fill="url(#pattern0)" d="M2 11h19.5v18H2z" />
        <path
          d="M41.897 17.277v1.861h-1.868v7.41h-2.434v-7.41h-1.859v-1.861h-1.312v9.271H32V13h2.424v1.852h1.868v1.862h1.868v1.862h1.304v-1.862h1.868v-1.862H43.2V13h2.424v13.548H43.2v-9.271h-1.303zM50.402 26.548v-1.834h-1.868v-9.862h1.868V13h6.16v1.852h1.869v2.425h-2.434v-1.862h-5.04v8.736h5.04v-1.852h2.434v2.415h-1.869v1.834h-6.16zM63.299 26.548v-1.834H61.43v-9.862h1.868V13h6.16v1.852h1.868v9.862H69.46v1.834H63.3zm.556-2.397h5.04v-8.736h-5.04v8.736zM79.823 20.99V19.14h-1.859v-1.862h-1.312v9.271h-2.424V13h2.424v1.852h1.868v1.862h1.868v1.862h1.304V13h2.433v13.548h-2.433v-5.557h-1.869z"
          fill="#fff"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0" transform="scale(.07692 .08333)" />
          </pattern>
          <image
            id="image0"
            width="13"
            height="12"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAABMUlEQVQokYXQv0oDQRDH8e+siAQCV+SPpwTsRAmIIMgZEBufw4ewSSmW4gMoYhULESFCwEZIowjRPk2IAeVMNlcoCpJCcmNxhxcLuYWFHZbPzm8WVSVtL18NdLI2pKxK0+r21piF86ECVG0/Hc1klYv6NO6sUrV9PXDnEVVNc1RtX+s9Q2EE7VdJ6bQSaKVp9a5tKD4Jm+WQz4GR/zudWSWr8GDgUqichABytGfieDULO24CTq3iAvcC1wJz4L9D6bEo/noQx5sAH7tDxVG4icEX0P0bIkLH9hc4qwotA7cxAF7WwHeT8ZOZajY67BvIARnABz8XAa8dip+LUccLtLgR4iwqHMavFeDNEQCCb1h6VmmVozuvkUc6XgCgzjj5xdEUZMbQcw0lGwrE3Rp5AH4AOXKdkZJVydIAAAAASUVORK5CYII="
          />
        </defs>
      </svg> */}
    </Stack>
  );
};

export default Logo;
