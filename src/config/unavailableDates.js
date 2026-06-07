/**
 * Therapist unavailability configuration.
 *
 * bookingStart / bookingEnd — dates blocked in the contact form calendar.
 * bannerStart / bannerEnd — when to show the site-wide availability banner.
 * Add new periods here; both the banner and date picker read from this list.
 */
export const UNAVAILABLE_PERIODS = [
  {
    bookingStart: '2026-07-05',
    bookingEnd: '2026-07-20',
    bannerStart: '2026-06-07',
    bannerEnd: '2026-07-20',
    message:
      'No appointments will be available between 5th July and 20th July, 2026, however I am still continuing to accept bookings for other dates. Thank you for your understanding.',
  },
];

export function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function formatDateISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function startOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function isDateInRange(date, startStr, endStr) {
  const start = parseLocalDate(startStr);
  const end = parseLocalDate(endStr);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  const compare = new Date(date);
  compare.setHours(12, 0, 0, 0);
  return compare >= start && compare <= end;
}

export function isDateUnavailable(date) {
  if (!date) return false;

  const compare = new Date(date);
  compare.setHours(0, 0, 0, 0);
  if (compare < startOfToday()) return true;

  return UNAVAILABLE_PERIODS.some((period) =>
    isDateInRange(compare, period.bookingStart, period.bookingEnd)
  );
}

/** Matchers passed to react-day-picker's `disabled` prop. */
export function getDisabledDateMatchers() {
  const blockedRanges = UNAVAILABLE_PERIODS.map((period) => ({
    from: parseLocalDate(period.bookingStart),
    to: parseLocalDate(period.bookingEnd),
  }));

  return [{ before: startOfToday() }, ...blockedRanges];
}

export function getActiveBannerPeriod(date = new Date()) {
  return UNAVAILABLE_PERIODS.find((period) =>
    isDateInRange(date, period.bannerStart, period.bannerEnd)
  );
}
