import { KeyboardEvent } from "react";

export function NumbersOnly(evt: KeyboardEvent<HTMLInputElement> | KeyboardEvent) {
  evt = evt || window.event;
  const charCode = (evt as KeyboardEvent).which || (evt as KeyboardEvent).keyCode;

  if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return false;
  }
}
