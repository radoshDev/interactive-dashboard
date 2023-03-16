import { ThemeConfig } from 'antd'

export const COLORS = {
  purple: '#6359E9',
  lightPurple: '#8C89B4',
  textPurple: '#AEABD8',
  lightPurple50: 'rgba(174, 171, 216, 0.5)',
  lightBlue: '#64CFF6',
}

export const theme: ThemeConfig = {
  token: {
    colorBgContainer: 'transparent',
    colorBorder: COLORS.lightPurple50,
    borderRadius: 10,
    colorPrimaryHover: COLORS.lightPurple,
    lineWidthFocus: 1,
  },
  components: {
    Input: {
      fontSizeLG: 12,
      colorBgContainer: '#27264e',
      colorText: COLORS.textPurple,
      colorTextBase: COLORS.lightPurple,
      colorTextQuaternary: COLORS.lightPurple,
      colorTextTertiary: COLORS.lightPurple,
      colorTextPlaceholder: COLORS.lightPurple,
    },
    DatePicker: {
      fontSizeLG: 12,
      lineHeight: 1,
    },
    Select: {
      colorTextQuaternary: COLORS.lightPurple,
      colorTextTertiary: COLORS.lightPurple,
      colorTextPlaceholder: COLORS.lightPurple,
    },
    Table: {
      colorText: '#fff',
      colorTextHeading: COLORS.textPurple,
      colorTextQuaternary: COLORS.lightPurple,
      colorTextPlaceholder: COLORS.lightPurple,
      colorIcon: 'red',
    },
  },
}
