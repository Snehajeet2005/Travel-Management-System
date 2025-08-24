"use client";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

import React, { useEffect, useMemo, useState } from 'react';
import { format } from 'currency-formatter';
import { AiOutlineClose } from 'react-icons/ai';

// Fallback Button (since "@/ui/Button" may not exist)
const Button = ({ onClick, disabled, className, label, type = "button" }) => (
  <button type={type} onClick={onClick} disabled={disabled} className={className}>
    {label}
  </button>
);

const NIGHTLY_PRICE = 300; // keep this the same number you used in UI

const BookModal = ({
  listing,
  handleHideModal
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Stable initial dates (created when the component mounts on client after clicking "Book")
  const [dateRange, setDateRange] = useState(() => {
    const start = new Date();
    const end = new Date();
    end.setDate(end.getDate() + 7);
    return [start, end];
  });

  // selectionRange object for DateRangePicker
  const selectionRange = useMemo(() => ({
    startDate: dateRange[0],
    endDate: dateRange[1],
    key: "selection",
  }), [dateRange]);

  // Convert disabledDates (if provided) into Date objects safely
  const disabledDates = useMemo(() => {
    try {
      return Array.isArray(listing?.reservations)
        ? listing.reservations
            .flatMap(r => r?.reservedDates ?? [])
            .map(d => new Date(d))
        : [];
    } catch {
      return [];
    }
  }, [listing]);

  const calcDaysDiff = () => {
    const [startDate, endDate] = dateRange;
    if (!startDate || !endDate) return 0;

    // Normalize to midnight to avoid DST/timezone edge cases
    const s = new Date(startDate); s.setHours(0,0,0,0);
    const e = new Date(endDate);  e.setHours(0,0,0,0);

    const diffDays = Math.ceil((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
    // At least 1 day if user picks same day
    return Math.max(diffDays, 1);
  };

  const handlePayment = async () => {
    setIsLoading(true);

    const [startDate, endDate] = dateRange;
    const days = calcDaysDiff();

    // Frontend-only demo action (no backend)
    console.log("Booking confirmed:", {
      listing,
      startDate,
      endDate,
      days,
      total: NIGHTLY_PRICE * days
    });
    alert("Booking successful! (Check console for details)");

    setIsLoading(false);
  };

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleHideModal?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleHideModal]);

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleHideModal} // click on backdrop closes
      aria-modal="true"
      role="dialog"
    >
      {/* Modal container (clicks inside should NOT close) */}
      <div
        className="w-[92%] sm:w-[90%] md:w-auto max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-100 rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-100 p-4 border-b border-slate-300 flex items-center justify-between rounded-t-2xl">
          <h3 className="font-semibold text-2xl">Book your hotel</h3>
          <button
            type="button"
            onClick={handleHideModal}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-slate-200 transition"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>

        {/* Hotel row */}
        <div className="p-4 flex items-center justify-between">
          <h2 className="font-semibold text-[20px]">Arabian Paradise</h2>
          <span className="text-slate-800">
            {format(325.50, { locale: "en-US" })}
          </span>
        </div>

        {/* Date picker */}
        <div className="px-4 pb-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            disabledDates={disabledDates}
            onChange={({ selection }) => {
              setDateRange([selection.startDate, selection.endDate]);
            }}
          />
        </div>

        {/* Totals */}
        <div className="px-4 py-4 mt-2 border-t border-slate-300 flex items-end justify-between">
          <div className="text-slate-700 flex items-center gap-2">
            <span>{format(NIGHTLY_PRICE, { locale: "en-US" })}</span>
            <span>X</span>
            <span>{calcDaysDiff()}</span>
          </div>
          <div className="text-slate-700">
            Total Price: {format(NIGHTLY_PRICE * calcDaysDiff(), { locale: "en-US" })}
          </div>
        </div>

        {/* Submit */}
        <div className="w-full flex items-center p-4 pb-6">
          <Button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-3/4 mx-auto cursor-pointer rounded-lg py-3 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600 disabled:opacity-60"
            label={isLoading ? "Processing..." : "Submit"}
          />
        </div>
      </div>
    </div>
  );
};

export default BookModal;
