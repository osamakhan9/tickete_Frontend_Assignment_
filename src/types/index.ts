export type iconsName =
  | "tickete-logo"
  | "lock"
  | "question-mark"
  | "trophy"
  | "info"
  | "info-fill"
  | "rating-start"
  | "ticket"
  | "calendar"
  | "clock"
  | "users"
  | "globe"
  | "plus"
  | "piggy-bank"
  | "card"
  | "visa"
  | "mastercard"
  | "diners-club"
  | "apple-pay"
  | "google-pay"
  | "cross"
  | "support-illustration"
  | "arrow-left"
  | "radio-selected"
  | "radio-unselected";

export type IconsPropstype = {
  name: iconsName;
  size?: string;
  color?: string;
};
