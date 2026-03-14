export async function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);

    if (existing) {
      resolve(existing);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.type = 'module';
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}
