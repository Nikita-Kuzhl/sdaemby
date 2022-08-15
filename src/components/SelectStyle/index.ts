import { StylesConfig } from 'react-select'

const SelectStyle: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: !isFocused ? '#F8F8F8' : 'white',
    border: !isFocused ? '2px solid #F8F8F8' : '2px solid rgba(102, 78, 249, 0.8)',
    borderRadius: 20,
    outline: 'none',
    boxShadow: isFocused ? '0px 10px 20px rgba(0, 96, 206, 0.1)' : 'none',
    '&:hover': {
      border: !isFocused ? '2px solid rgba(102, 78, 249, 0)' : '2px solid rgba(102, 78, 249, 0.8)',
      background: !isFocused ? 'rgba(102, 78, 249, 0.1)' : 'white',
    },
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    fontFamily: 'Inter',
    fontWeight: 500,
    color: '#1E2123',
    fontSize: 14,
    background: isFocused || isSelected ? '#F8F8F8' : 'white',
    '&:hover': {
      backgroundColor: '#F8F8F8',
    },
    '&:first-of-type': {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  }),
  menu: (styles) => ({
    ...styles,
    position: 'absolute',
    zIndex: 5,
    borderRadius: 10,
    padding: 0,
    boxShadow: '0px 0px 40px rgba(135, 124, 202, 0.3)',
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: 185,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  placeholder: (styles) => ({
    ...styles,
    display: 'flex',
    gap: 7,
    fontWeight: 500,
    fontSize: 14,
    alignItems: 'center',
  }),
  dropdownIndicator: (styles) => ({ ...styles, color: '#664EF9' }),
  valueContainer: (styles) => ({
    ...styles,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '17px',
    color: '#1E2123',
  }),
}
export default SelectStyle
