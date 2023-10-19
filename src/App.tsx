import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { ButtonPage, DatePickerPage } from "./pages";
import { Button, DatePicker } from "./components";
import { useState } from "react";
import { DateRangePickerPage } from "./pages/DateRangePickerPage/DateRangePickerPage";
import { DateRangePicker } from "./components/DateRangePicker";

const components = [
  {
    name: "Button",
    ComponentPage: ButtonPage,
    Component: () => <Button>Button</Button>,
  },
  {
    name: "DatePicker",
    ComponentPage: DatePickerPage,
    Component: () => {
      const [selectedDate, setSelectedDate] = useState<Date | null>(null);

      return <DatePicker onChange={setSelectedDate} selectedDate={selectedDate} />;
    },
  },
  {
    name: "DateRangePicker",
    ComponentPage: DateRangePickerPage,
    Component: () => {
      return <DateRangePicker />
    }
  }
];

function App() {
  const navigate = useNavigate(); 
  const { pathname } = useLocation();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    navigate(event.target.value);
  }

  return (
    <div className="app">
      <header className="header">
        <select
          onChange={handleChange}
          defaultValue={pathname.slice(1)}
          placeholder="Choose component"
        >
          <option value="">All components</option>
          {components.map(({ name }) => {
            return (
              <option value={name.toLowerCase()} key={name}>
                {name}
              </option>
            );
          })}
        </select>
      </header>

      <div className="page-wrapper">
        {pathname === "/" &&
          components.map(({ name, Component }) => {
            return (
              <div className="component" key={name}>
                <h3 className="component-name">{name}</h3>
                <Component />
              </div>
            );
          })}

        {pathname !== "/" && (
          <Routes>
            {components.map(({ name, ComponentPage }) => {
              return (
                <Route
                  path={name.toLowerCase()}
                  element={<ComponentPage />}
                  key={name}
                />
              );
            })}
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
