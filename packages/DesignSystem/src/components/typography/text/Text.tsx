import { Typography } from 'antd'
import { TTitleProps } from './text.types'

const { Text: AntText } = Typography


export const Text = ({ children, ...rest }: TTitleProps) => {
  return <AntText {...rest}>{children}</AntText>
}
