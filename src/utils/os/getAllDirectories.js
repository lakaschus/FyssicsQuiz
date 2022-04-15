export function getAllDirectories(modules, level=0) {
  /**
   * Returns als subdirectories given a list of paths
   * @name getAllDirectories
   * @param modules Modules obtained from vite, e.g.
   * import.meta.glob("./debugging/[ASTERIKS].vue")
   * @param level Depth of paths returned 
   */
   const paths = []
   const dirs = []
   for (const path in modules) {
      paths.push(path)
   }
   paths.forEach((path, index) => {
     let splittedPath = path.split('/')
     if (splittedPath.length > level + 2) {
     dirs.push(splittedPath[level + 1])}
   })
   return dirs
  }