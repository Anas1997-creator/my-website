/* ============================================================
   SITE CONFIG: the one place to edit the booking link.

   1. In Cal.com, create ONE event type (for example "Consultation")
      and enable multiple durations: 30, 45 and 60 minutes.
   2. Connect Google Calendar (Gmail) in Cal.com. Cal.com then emails
      a confirmation to BOTH the professor and the person who books.
   3. Paste the event link below, e.g. "zainulabidin/consultation"
      or the full URL "https://cal.com/zainulabidin/consultation".
   ============================================================ */
const BOOKING_LINK = "https://cal.com/zainulabidin/consultation";

/* Price is $50 per hour, charged pro rata. Sessions are capped at 60 minutes. */
const HOURLY_RATE_USD = 50;
const DURATIONS_MIN = [30, 45, 60];
