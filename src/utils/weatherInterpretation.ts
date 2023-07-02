export const weatherInterpretation = (code: number) => {
  switch (code) {
    case 0:
      return 'Clear sky'
      break
    case 1:
      return 'Mainly clear'
      break
    case 2:
      return 'partly cloudy'
      break
    case 3:
      return 'overcast'
      break
    case 45:
      return 'fog'
      break
    case 48:
      return 'depositing rime fog'
      break
    case 51:
      return 'Light '
      break
    case 52:
      return 'moderate '
      break
    case 53:
      return 'dense intensity '
      break
    case 56:
    case 57:
      return 'Freezing Drizzle '
      break
    case 61:
    case 63:
    case 65:
      return 'Rain '
      break
    case 66:
    case 67:
      return 'Freezing Rain'
      break
    case 71:
    case 73:
    case 75:
      return 'Snow fall'
      break
    case 77:
      return 'Snow grains'
      break
    case 80:
    case 81:
    case 82:
      return 'Rain showers'
      break
    case 85:
    case 86:
      return 'Snow showers slight and heavy'
      break

    default:
      ''
      break
  }
}
