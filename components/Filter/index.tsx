import React, { useState } from "react";

import Button from "../Button";

import styles from "./filter.module.scss";

export type FilterFieldType = "text" | "select" | "date";

interface FilterFieldProps {
  name: string;
  label: string;
  type: FilterFieldType;
  placeholder: string;
  options?: string[];
}

interface FilterProps {
  fields: FilterFieldProps[];
  handleFilter: (filters: Record<string, string>) => void;
  handleReset: () => void;
}

const Filter: React.FC<FilterProps> = ({
  fields,
  handleFilter,
  handleReset,
}) => {
  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    null!
  );

  const handleInputChange = (name: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilter = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilter(filterValues);
  };

  const handleResetFilter = () => {
    setFilterValues({});
    handleReset();
  };

  return (
    <form onSubmit={handleApplyFilter} className={styles["filter-form"]}>
      {fields?.map((field, index) => {
        return (
          <div
            key={index + 1}
            className={styles["filter-form__field-container"]}
          >
            <label className={styles["filter-form__field-label"]}>
              {field?.label}
            </label>
            {field?.type === "text" && (
              <input
                type="text"
                placeholder={field?.placeholder}
                value={filterValues[field?.name]}
                onChange={(e) => handleInputChange(field?.name, e.target.value)}
              />
            )}
            {field?.type === "date" && (
              <input
                type="date"
                placeholder={field?.placeholder}
                value={filterValues[field.name]}
                onChange={(e) => handleInputChange(field?.name, e.target.value)}
              />
            )}
            {field?.type === "select" && (
              <select
                value={filterValues[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              >
                <option value="">Select</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        );
      })}
      <div className={styles["filter-form__button-wrapper"]}>
        <Button
          variant="secondary"
          label="Reset"
          handleClick={handleResetFilter}
          type="button"
        />
        <Button variant="primary" label="Filter" type="submit" />
      </div>
    </form>
  );
};

export default Filter;
