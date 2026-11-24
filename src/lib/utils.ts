import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateGoogleCalendarUrl(event: {
  title: string;
  details: string;
  location: string;
  startDate: string; // ISO or YYYYMMDDTHHmmssZ
  endDate: string;
}) {
  const start = event.startDate.replace(/[-:]/g, "").slice(0, 15) + "Z";
  const end = event.endDate.replace(/[-:]/g, "").slice(0, 15) + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: event.details,
    location: event.location,
    dates: `${start}/${end}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(event: {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}) {
  const formatTime = (dateStr: string) =>
    new Date(dateStr)
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Undangan Pernikahan Digital//ID",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${event.location}`,
    `DTSTART:${formatTime(event.startDate)}`,
    `DTEND:${formatTime(event.endDate)}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `${event.title.replace(/\s+/g, "_")}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
