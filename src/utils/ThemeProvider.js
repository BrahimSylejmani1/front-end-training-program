/**
 * Created by LeutrimNeziri on 21/02/2019.
 */
import React from "react"
import {MuiThemeProvider as ThemeProviderMaterialUI, createMuiTheme} from "@material-ui/core/styles"
import Theme from 'utils/Theme'
import "normalize.css"
class ThemeProvider extends React.Component {
  render() {
    const {children, theme: themeProp} = this.props
    let theme = createMuiTheme(Theme.getTheme())
    return (
      <ThemeProviderMaterialUI theme={themeProp || theme}>
        {children}
      </ThemeProviderMaterialUI>
    )
  }
}

export default ThemeProvider
