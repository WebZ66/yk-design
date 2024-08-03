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
    icon: ['fas', 'circle-info'],
    color: '#909399',
  },
  success: {
    icon: ['fas', 'circle-check'],
    color: '#68c23c',
  },
  warning: {
    icon: ['fas', 'triangle-exclamation'],
    color: '#e6a23c',
  },
  error: {
    icon: ['fas', 'triangle-xmark'],
    color: '#f57879',
  },
  danger: {
    icon: ['fas', 'circle-exclamation'],
    color: '#f57879',
  },
}
