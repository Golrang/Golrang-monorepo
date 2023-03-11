import { ConfigProvider as AntConfigProvider, theme } from "antd";
import { ThemeConfig } from "antd/lib/config-provider/context";
import { TConfigProvider } from "./ConfigProvider.types";

const token = theme.defaultConfig.token;
const defaultTheme: ThemeConfig = {
    ...theme,
    token: {
        ...token,
        fontFamily: "IRANSansFaNum"
    }
}
export const ConfigProvider = ({ theme, ...rest }: TConfigProvider) => {
    if (theme) {
        if (theme.token) {
            theme.token.fontFamily = "IRANSansFaNum"
        }
    }

    const generatedTheme = theme || defaultTheme
    return (
        <AntConfigProvider theme={generatedTheme}  {...rest} />
    )
}
