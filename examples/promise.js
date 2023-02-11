const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("load script failed"));
    document.head.append(script);
  });
};
loadScript("www.google.com")
  .then((script) => console.log(script))
  .catch((Error) => console.log(Error));
