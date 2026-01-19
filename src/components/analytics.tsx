"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { GoogleAnalytics } from "@next/third-parties/google";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function Analytics({ gaId }: { gaId: string }) {
  const [cookieConsent, setCookieConsent] = useState(false);

  // Check for consent on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedConsent = localStorage.getItem("cookie_consent");

    if (storedConsent === "granted") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCookieConsent(true);
    } else if (storedConsent === null) {
      // Show toast if no choice has been made
      const toastId = toast(
        <p className="whitespace-nowrap">
          We use cookies to analyze our traffic.
        </p>,
        {
          style: { width: "fit-content" },
          duration: Infinity,
          closeButton: false,
          dismissible: false,
          action: (
            <div className="flex gap-2">
              <Button variant="link" size="sm" asChild>
                <Link href={"#"}>Learn more</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  localStorage.setItem("cookie_consent", "denied");
                  toast.dismiss(toastId);
                }}
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  localStorage.setItem("cookie_consent", "granted");
                  setCookieConsent(true);
                  toast.dismiss(toastId);
                }}
              >
                Accept
              </Button>
            </div>
          ),
        },
      );
    }
  }, []);

  if (!cookieConsent) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
