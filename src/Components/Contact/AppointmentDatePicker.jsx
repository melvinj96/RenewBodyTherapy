import { useEffect, useId, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { enGB } from 'react-day-picker/locale';
import { format } from 'date-fns';
import {
  formatDateISO,
  getDisabledDateMatchers,
  isDateUnavailable,
  parseLocalDate,
  startOfToday,
} from '../../config/unavailableDates';
import 'react-day-picker/style.css';

function AppointmentDatePicker({ id, value, onChange, required }) {
  const pickerId = useId();
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState(() =>
    value ? parseLocalDate(value) : startOfToday()
  );

  const selectedDate = value ? parseLocalDate(value) : undefined;
  const displayValue = selectedDate
    ? format(selectedDate, 'd MMMM yyyy', { locale: enGB })
    : '';

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (date) => {
    if (!date || isDateUnavailable(date)) return;
    onChange(formatDateISO(date));
    setMonth(date);
    setIsOpen(false);
  };

  return (
    <div className="appointment-date-picker" ref={containerRef}>
      <div className="appointment-date-picker__input-row">
        <input
          type="text"
          id={id}
          name="date"
          className="appointment-date-picker__input"
          value={displayValue}
          onClick={() => setIsOpen(true)}
          placeholder="Select a date"
          autoComplete="off"
          required={required}
          readOnly
          aria-controls={pickerId}
        />
        <button
          type="button"
          className="appointment-date-picker__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close calendar' : 'Open calendar'}
          aria-expanded={isOpen}
          aria-controls={pickerId}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
            <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id={pickerId}
          className="appointment-date-picker__calendar"
          role="dialog"
          aria-label="Choose an appointment date"
        >
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            month={month}
            onMonthChange={setMonth}
            disabled={getDisabledDateMatchers()}
            locale={enGB}
            startMonth={startOfToday()}
            showOutsideDays
            fixedWeeks
          />
        </div>
      )}
    </div>
  );
}

export default AppointmentDatePicker;
