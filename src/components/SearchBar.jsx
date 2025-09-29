import { useEffect, useRef, useState } from "react";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  UsersIcon,
  ChevronDownIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "@heroicons/react/24/outline";

const MIN_OCCUPANCY = {
  adults: 1,
  children: 0,
  rooms: 1,
};

const OCCUPANCY_LABELS = {
  adults: {
    label: "Adults",
    helper: "Ages 13+",
  },
  children: {
    label: "Children",
    helper: "Ages 2-12",
  },
  rooms: {
    label: "Rooms",
    helper: "Bedrooms needed",
  },
};

const BULLET = String.fromCharCode(183);

const formatNoun = (count, singular, plural) => (count === 1 ? singular : plural);

const formatDate = (value) => {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
};

function SearchBar({ filters, onFiltersChange, onSearch }) {
  const [isOccupancyOpen, setIsOccupancyOpen] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  const checkInInputRef = useRef(null);
  const checkOutInputRef = useRef(null);

  useEffect(() => {
    const handleClickAway = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsOccupancyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, []);

  useEffect(() => {
    if (!isOccupancyOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOccupancyOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOccupancyOpen]);

  const updateFilter = (field, value) => {
    onFiltersChange({ ...filters, [field]: value });
  };

  const handleInputChange = (field) => (event) => {
    updateFilter(field, event.target.value);
  };

  const adjustOccupancy = (field, delta) => {
    const minValue = MIN_OCCUPANCY[field] ?? 0;
    const nextValue = Math.max(minValue, filters[field] + delta);
    updateFilter(field, nextValue);
  };

  const openDatePicker = (inputRef, field) => {
    setFocusedField(field);

    if (!inputRef.current) {
      return;
    }

    if (typeof inputRef.current.showPicker === "function") {
      inputRef.current.showPicker();
    } else {
      inputRef.current.focus();
    }
  };

  const handleDateButtonBlur = () => {
    setFocusedField(null);
  };

  const occupancySummary = [
    `${filters.adults} ${formatNoun(filters.adults, "adult", "adults")}`,
    `${filters.children} ${formatNoun(filters.children, "child", "children")}`,
    `${filters.rooms} ${formatNoun(filters.rooms, "room", "rooms")}`,
  ].join(` ${BULLET} `);

  const closeOccupancy = () => setIsOccupancyOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    closeOccupancy();
    onSearch();
  };

  const renderDateField = (field, copy) => {
    const { label, placeholder, inputRef, min } = copy;
    const value = filters[field];
    const isFilled = Boolean(value);
    const displayValue = isFilled ? formatDate(value) : placeholder;

    return (
      <label className="search-bar__field search-bar__field--date">
        <span className="search-bar__label">{label}</span>
        <button
          type="button"
          className={`search-bar__date-button${isFilled ? " is-filled" : ""}${focusedField === field ? " is-focused" : ""}`}
          onClick={() => openDatePicker(inputRef, field)}
          onFocus={() => setFocusedField(field)}
          onBlur={handleDateButtonBlur}
          aria-haspopup="dialog"
        >
          {displayValue || placeholder}
        </button>
        <input
          ref={inputRef}
          id={`search-${field}`}
          type="date"
          name={field}
          value={value}
          onChange={handleInputChange(field)}
          min={min}
          className="search-bar__date-input"
        />
      </label>
    );
  };

  const occupancySegmentClass = `search-bar__segment search-bar__segment--occupancy${
    isOccupancyOpen ? " is-open" : ""
  }`;

  return (
    <form
      ref={formRef}
      className="search-bar"
      onSubmit={handleSubmit}
      aria-label="Search listings"
    >
      <div className="search-bar__segment">
        <BuildingOffice2Icon className="search-bar__icon" aria-hidden="true" />
        <label className="search-bar__field">
          <span className="search-bar__label">Destination</span>
          <input
            id="search-destination"
            type="text"
            name="destination"
            value={filters.destination}
            onChange={handleInputChange("destination")}
            placeholder="Where are you going?"
            autoComplete="off"
          />
        </label>
      </div>

      <div className="search-bar__segment search-bar__segment--dates">
        <CalendarDaysIcon className="search-bar__icon" aria-hidden="true" />
        {renderDateField("checkIn", {
          label: "Check-in",
          placeholder: "Check-in date",
          inputRef: checkInInputRef,
        })}
        <span className="search-bar__dash" aria-hidden="true">
          —
        </span>
        {renderDateField("checkOut", {
          label: "Check-out",
          placeholder: "Check-out date",
          inputRef: checkOutInputRef,
          min: filters.checkIn || undefined,
        })}
      </div>

      <div className={occupancySegmentClass}>
        <UsersIcon className="search-bar__icon" aria-hidden="true" />
        <button
          type="button"
          className="search-bar__occupancy-trigger"
          onClick={() => setIsOccupancyOpen((open) => !open)}
          onBlur={() => {
            if (!isOccupancyOpen) {
              setFocusedField(null);
            }
          }}
          onFocus={() => setFocusedField("occupancy")}
          aria-expanded={isOccupancyOpen}
          aria-haspopup="dialog"
        >
          <span className="search-bar__label">Travelers & rooms</span>
          <span className="search-bar__occupancy-summary">{occupancySummary}</span>
          <ChevronDownIcon className="search-bar__chevron" aria-hidden="true" />
        </button>
        {isOccupancyOpen && (
          <div
            className="search-bar__occupancy-panel"
            role="dialog"
            aria-label="Select travelers and rooms"
          >
            {Object.entries(OCCUPANCY_LABELS).map(([key, copy]) => (
              <div key={key} className="search-bar__occupancy-row">
                <div className="search-bar__occupancy-text">
                  <span>{copy.label}</span>
                  <small>{copy.helper}</small>
                </div>
                <div className="search-bar__occupancy-controls">
                  <button
                    type="button"
                    className="search-bar__counter"
                    onClick={() => adjustOccupancy(key, -1)}
                    disabled={filters[key] <= (MIN_OCCUPANCY[key] ?? 0)}
                    aria-label={`Decrease ${copy.label.toLowerCase()}`}
                  >
                    <MinusSmallIcon aria-hidden="true" />
                  </button>
                  <span className="search-bar__occupancy-value">{filters[key]}</span>
                  <button
                    type="button"
                    className="search-bar__counter"
                    onClick={() => adjustOccupancy(key, 1)}
                    aria-label={`Increase ${copy.label.toLowerCase()}`}
                  >
                    <PlusSmallIcon aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
            <div className="search-bar__occupancy-footer">
              <button
                type="button"
                className="search-bar__occupancy-done"
                onClick={closeOccupancy}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      <button type="submit" className="search-bar__submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
