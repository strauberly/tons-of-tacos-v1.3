"use client";

import { useDisplayContext } from "@/context/display-context";
import { useAlertContext } from "@/context/alert-context";
export default function Alert() {
  const { showAlert } = useDisplayContext();
  const { alert } = useAlertContext();

  return (
    <>
      {showAlert && (
        <div>
          <p>{alert}</p>
        </div>
      )}
    </>
  );
}
