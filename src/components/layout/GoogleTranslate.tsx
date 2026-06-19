"use client";
import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { LANGUAGES } from "@/lib/languages";
import type { LangCode } from "@/lib/languages";

const GT_CODE: Record<string, string> = { zh: "zh-CN" };

export function applyGoogleTranslate(langCode: string, retries = 12) {
  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");

  if (!combo) {
    if (retries > 0) setTimeout(() => applyGoogleTranslate(langCode, retries - 1), 400);
    return;
  }

  const target = langCode === "en" ? "" : (GT_CODE[langCode] ?? langCode);
  combo.value = target;
  combo.dispatchEvent(new Event("change"));
}

export default function GoogleTranslate() {
  const pathname = usePathname();

  // Patch DOM methods to silently ignore mismatches caused by Google Translate
  // wrapping text nodes in <font> elements while React still holds old references.
  useEffect(() => {
    const origRemoveChild = Node.prototype.removeChild;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Node.prototype as any).removeChild = function <T extends Node>(child: T): T {
      if (child.parentNode !== this) return child;
      return origRemoveChild.call(this, child) as T;
    };

    const origInsertBefore = Node.prototype.insertBefore;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Node.prototype as any).insertBefore = function <T extends Node>(node: T, ref: Node | null): T {
      if (ref && ref.parentNode !== this) return node;
      return origInsertBefore.call(this, node, ref) as T;
    };
  }, []);

  // Re-apply saved language after every client-side navigation
  useEffect(() => {
    const stored = localStorage.getItem("nm_lang") as LangCode | null;
    if (stored && stored !== "en" && LANGUAGES.some((l) => l.code === stored)) {
      setTimeout(() => applyGoogleTranslate(stored), 350);
    }
  }, [pathname]);

  // Apply saved language once GT widget finishes loading on first mount
  useEffect(() => {
    const stored = localStorage.getItem("nm_lang") as LangCode | null;
    if (stored && stored !== "en" && LANGUAGES.some((l) => l.code === stored)) {
      setTimeout(() => applyGoogleTranslate(stored), 2200);
    }
  }, []);

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <Script id="gt-init" strategy="afterInteractive">
        {`
          window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en", autoDisplay: false },
              "google_translate_element"
            );
          };
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
