import { extendTheme } from "@chakra-ui/theme-utils";
import { ThemeConfig } from "@chakra-ui/theme";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({config});

export default theme;