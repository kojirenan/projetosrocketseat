export default function DarkMode({
  html,
  buttonLightMode,
  buttonDarkMode,
}) {
  const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style)

  const lightColors = {
    fc: getStyle(html, "--fc"),
    bc: getStyle(html, "--bc"),
    pc: getStyle(html, "--pc"),
    hc: getStyle(html, "--hc"),
    phc: getStyle(html, "--phc"),
    bg: getStyle(html, "--bg"),
    bci: getStyle(html, "--bci"),
  }

  const darkColors = {
    fc: getStyle(html, "--fc-dark"),
    bc: getStyle(html, "--bc-dark"),
    pc: getStyle(html, "--pc-dark"),
    hc: getStyle(html, "--hc-dark"),
    phc: getStyle(html, "--phc-dark"),
    bg: getStyle(html, "--bg-dark"),
    bci: getStyle(html, "--bci-dark"),
  }

  const transformKey = key => "--" + key

  const changeColor = (colors) => {
    Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
  }

  function dark() {
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    changeColor(darkColors)
  }

  function light() {
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
    changeColor(lightColors)
  }

  return {
    dark,
    light,
  }
}
