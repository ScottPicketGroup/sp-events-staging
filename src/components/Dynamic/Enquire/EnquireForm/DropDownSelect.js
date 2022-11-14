import React from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"
import { DropDownWrapper } from "./index.css"
import Select from "react-select"
import { components } from "react-select"

const DropDownSelect = ({ title, toUp, isMulti, error }) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "0px",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
    }),
    IndicatorsContainer: (provided, state) => ({ ...provided }),
    indicatorSeparator: (provided, state) => ({ ...provided, display: "none" }),
    menu: (provided, state) => ({
      ...provided,
      marginTop: toUp ? "" : "-1px",
      borderTop: toUp ? "" : "none",
      marginBottom: toUp ? "-1px" : "",
      borderBottom: toUp ? "-none" : "",
      border: "1px #000000 solid",
      outline: "1px solid",
      borderRadius: "0px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#adb4d2",
      fontFamily: "CentraNo2Light",
      fontSize: "1.25rem",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "CentraNo2Light",
      fontSize: "1.25rem",
    }),
  }

  const options = [
    { value: "option1", label: "Option1" },
    { value: "option2", label: "Option2" },
    { value: "option3", label: "Option3" },
    { value: "option4", label: "Option4" },
  ]

  return (
    <DropDownWrapper>
      <Heading3
        style={error ? { color: "#CB0000" } : { color: "" }}
        marginBottom="xs"
      >
        {title}
      </Heading3>
      <Select
        options={options}
        styles={customStyles}
        placeholder={
          isMulti ? "Please select option(s)" : "Please select an option"
        }
        menuColor="red"
        menuPlacement={toUp ? "top" : "bottom"}
        isMulti={isMulti ? true : false}
        components={{
          Menu: props => (
            <components.Menu
              {...props}
              className={toUp ? "menu-up" : "menu-down"}
            />
          ),
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "lightgrey",
            primary: "grey",
            primary50: "lightgrey",
          },
        })}
      />
    </DropDownWrapper>
  )
}

export default DropDownSelect
