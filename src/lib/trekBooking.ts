export function getTrekBookingHref(trekId: string): string {
  const query = new URLSearchParams({ treks: trekId });
  return `/book-a-trek?${query.toString()}`;
}
