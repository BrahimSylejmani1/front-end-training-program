/**
 * Created by LeutrimNeziri on 21/02/2019.
 */
export default class Theme {
  static getTheme() {
    let theme = {
      type: 'default',
      palette: {
        leadColor: '#3cb9e2',
        leadAccent1: '#1b9ad1',
        leadAccent2: '#086c9e',
        leadDarkAccent1: '#34576a',
        leadDarkAccent2: '#334353',
        bgColor: '#ecf0f1',
        textColor: '#293642',
        textColorInverse: '#fff',
        disabledColor: '#8ca0b3',
        error: {
          main: '#e93d3d'
        },
        success: '#2ac866',
        warning: '#f5a623',
        navBgColor: '#334353',
        borderColor: '#d4d9de',
        common: {
          black: '#000',
          white: '#fff'
        }
      },
      size: {
        displayFontSize: 48,
        avatarSize: 48,
        headingFontSize: 28,
        iconSize: 24,
        headerFontSize: 18,
        titleFontSize: 16,
        defaultFontSize: 14,
        captionFontSize: 12,
        smallFontSize: 10,
        spacing: 8,
        baseRadius: 4,
        //if we want to scale or return every pixel to rem, em, ww ,vh or anything else we will use this function
        px: (num) => num
      },
      typography: {
        useNextVariants: true,
        weight: {
          black: 900,
          bold: 700,
          medium: 500,
          regular: 400,
          light: 200
        },
        fontFamily: 'Roboto, sans-serif'
      },
      transitions: {
        common: 'all ease-in-out 200ms',
        slide: 'translate 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
      },
      zIndex: {
        tooltip: 1100,
        popover: 1010,
        modal: 1000,
        drawer: 901,
        overlay: 900,
      },
      sizes: {
        //TODO: calculate the size of each property depending on responsive breakpoints
        drawer: 350
      },
      // shadows: {
      //   default: '0px 4px 8px 0px rgba(0, 0, 0, 0.13)',
      //   hover: '0px 3px 7px 0px rgba(0, 0, 0, 0.24)',
      //   popover: '0px 7px 13px 0px rgba(0, 0, 0, 0.17)',
      //   modal: '0px 18px 32px 0px rgba(0, 0, 0, 0.47)'
      // }
    }
    return {
      ...theme,
      typography: {
        ...theme.typography,
        display: {
          fontSize: theme.size.displayFontSize,
          fontWeight: theme.typography.weight.light,
          color: theme.palette.textColor
        },
        heading: {
          fontSize: theme.size.headingFontSize,
          fontWeight: theme.typography.weight.medium,
          color: theme.palette.textColor
        },
        header: {
          fontSize: theme.size.headerFontSize,
          fontWeight: theme.typography.weight.medium,
          color: theme.palette.textColor
        },
        headerLight: {
          fontSize: theme.size.headerFontSize,
          fontWeight: theme.typography.weight.light,
          color: theme.palette.textColor
        },
        title: {
          fontSize: theme.size.titleFontSize,
          fontWeight: theme.typography.weight.black,
          color: theme.palette.textColor
        },
        content: {
          fontSize: theme.size.defaultFontSize,
          fontWeight: theme.typography.weight.medium,
          color: theme.palette.textColor
        }
      }
    }
  }
}
