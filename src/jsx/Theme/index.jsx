import { createEffect, createSignal, on } from "solid-js";
import storage from "../../js/stroage";

export default function Theme() {
  const [theme, setTheme] = createSignal(storage.get("theme") || "light");

  const themes = {
    light: {
      accent: "#CADEEF",
      bg: "#eee",
      text: "#000",
    },
    dark: {
      accent: "#0c0e14",
      bg: "#161925",
      text: "#C3C7D1",
    },
  };

  function applyTheme(theme) {
    let html = document.documentElement,
      css = html.style.setProperty.bind(html.style);

    storage.set("theme", theme);

    css("--accent", themes[theme].accent);
    css("--bg", themes[theme].bg);
    css("--text", themes[theme].text);
  }

  createEffect(on(theme, applyTheme));

  return (
    <div onClick={() => setTheme(theme() === "light" ? "dark" : "light")}>
      {theme()}
    </div>
  );
}
