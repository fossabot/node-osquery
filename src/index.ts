import { spawn } from 'child_process';
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

  /**
   * Executes the raw sql query
   *
   * @param {string} sql
   * @returns {Promise<object>}
   * @memberof OSQuery
   */
  public query(sql: string): Promise<object> {
    // returning the promise
    return new Promise<object>((res, rej) => {
      // initializing the variables for data
      let data: string = '';
      let error: string = '';

      // creating an instance of
      const command = spawn(this.path, ['--json', sql]);

      // on success response
      command.stdout.on('data', (chunk: Buffer) => {
        // add data chunk to data
        data += chunk.toString();
      });

      // on error response
      command.stderr.on('data', (chunk: Buffer) => {
        error += chunk.toString();
      });

      // fired when command is exit
      command.on('exit', (code) => {
        // if exit successfully
        if (code === 0) {
          // resolve the promise
          // tslint:disable-next-line: no-unsafe-any
          res({ success: true, data: JSON.parse(data) });
        } else {
          // reject the promise
          rej({ success: false, data: error });
        }
      });
    });
  }
}
