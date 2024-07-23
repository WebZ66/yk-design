export const getSize = (size: number | string) => {
  if (typeof size == 'number') {
    return size
  }
  switch (size) {
    case 's':
      return 24
    case 'm':
      return 32
    case 'l':
      return 40
    case 'xl':
      return 80
    default:
      return 40
  }
}

export const getShape = (shape: number | string) => {
  if (typeof shape == 'number') {
    return shape
  }
  switch (shape) {
    case 'circle':
      return '50%'
    case 'square':
      return 8 + 'px'
    default:
      return '50%'
  }
}
export const iconNameMap = {
  info: {
    name: 'jinggao',
    color: '#909399',
  },
  success: {
    name: 'quangou',
    color: '#68c23c',
  },
  warning: {
    name: 'jinggao3',
    color: '#e6a23c',
  },
  error: {
    name: 'quancha',
    color: '#f57879',
  },
  danger: {
    name: 'quancha',
    color: '#f57879',
  },
}
