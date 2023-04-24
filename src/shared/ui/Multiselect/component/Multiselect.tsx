'use client';

import './Multiselect.scss';

import { FontIcon, Icons, SelectOption } from '@shared/ui';
import clsx from 'clsx';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface Props {
  className?: string;
  placeholder?: string;
  options?: SelectOption[];
  defaultValue?: SelectOption[];
  onSelect?: (options: SelectOption[]) => void;
}

function Multiselect({
  className,
  placeholder = '',
  options = [],
  defaultValue = [],
  onSelect = () => null,
}: Props) {
  const [tags, setTags] = useState<SelectOption[]>(defaultValue);
  const [searchValue, setSearchValue] = useState<string>('');

  const onTagClick = (e: MouseEvent, option: SelectOption) => {
    const value = tags.filter((tag) => tag !== option);
    setTags(value);
    onSelect(value);
  };

  const onItemClick = (option: SelectOption) => {
    const value = [...tags, option];
    setTags(value);
    onSelect(value);
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value ?? '');
  };

  const filterOptions = (option: SelectOption) => {
    return !tags.includes(option) && option.label.includes(searchValue);
  };

  return (
    <div className={clsx('multiselect', className)}>
      <div tabIndex={-1} placeholder={placeholder} className="multiselect__field title-regular-1">
        {tags.map((option) => (
          <div
            key={`tag-${option.id}`}
            className="multiselect__tag title-regular-0"
            onClick={(e: MouseEvent<HTMLDivElement>) => onTagClick(e, option)}
          >
            {option.label}
            <FontIcon className="multiselect__tag-icon" name={Icons.DELETE} />
          </div>
        ))}

        <input
          className="multiselect__input title-regular-1"
          placeholder={placeholder}
          onInput={onSearch}
        />
      </div>

      <div className="multiselect__dropdown">
        {options.filter(filterOptions).map((option) => (
          <div
            key={option.id}
            className="multiselect__dropdown-item"
            onClick={() => onItemClick(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Multiselect;
