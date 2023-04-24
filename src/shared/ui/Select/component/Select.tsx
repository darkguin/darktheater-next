'use client';

import './Select.scss';

import clsx from 'clsx';
import { useState } from 'react';

export interface SelectOption {
  id: string | number;
  label: string;
  value: string;
}

interface Props {
  className?: string;
  placeholder?: string;
  options?: SelectOption[];
  defaultValue?: SelectOption;
  onSelect?: (option: SelectOption) => void;
}

function Select({
  className,
  defaultValue,
  placeholder = '',
  options = [],
  onSelect = () => null,
}: Props) {
  const [value, setValue] = useState<SelectOption | null>(defaultValue ?? null);

  const onOptionSelected = (option: SelectOption) => {
    setValue(option);
    onSelect(option);
  };

  const filterOptions = (option: SelectOption) => {
    return option.id !== value?.id && option.value !== value?.value;
  };

  return (
    <div className={clsx('select', className)}>
      <div tabIndex={-1} placeholder={placeholder} className="select__field title-regular-1">
        {value?.label}
      </div>

      <div className="select__dropdown">
        {options.filter(filterOptions).map((option) => (
          <div
            key={option.id}
            className="select__dropdown-item"
            onClick={() => onOptionSelected(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;
