import { join } from 'path';
export class OSQuery {
  private path: string;

  /**
   * Creates an instance of OSQuery.
   * @param {string} [path='']
   * @memberof OSQuery
   */
  constructor(path: string = '') {
    // check if path is not passed
    if (path === '') {
      // check if os is windows
      if (process.platform === 'win32') {
        // add the default path of osquery in windows
        this.path = join('C:\\ProgramData', 'osquery', 'osqueryi.exe');
      } else {
        // add the default path of osquery in linux
        this.path = '/usr/bin/osqueryi';
      }
    } else {
      // add the explicit path by user
      this.path = path;
    }
  }
}
