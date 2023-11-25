module.exports = {
  preset: 'ts-jest/presets/default',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
