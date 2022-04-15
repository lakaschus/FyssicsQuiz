export function resolveAfterNMilliSeconds(n, x = 'resolveAfterNSeconds resolved') {
    /**
     * @name resolveAfterNSeconds
     * @param {number} n Number of milliseconds to resolve
     * @param {any} x Object to be resolved
     */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, n);
    });
  }