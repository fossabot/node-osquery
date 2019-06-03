import { spawn } from 'child_process';
import { join } from 'path';
import { IUsers } from './interfaces';

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
    return new Promise<object>((resolve, reject) => {
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
          // tslint:disable-next-line: variable-name, no-unsafe-any
          const parsedData = JSON.parse(data);

          // getting all the stderr
          const errors: string[] = error.split('\n');

          // getting the last one error
          const tblErr = errors[errors.length - 2];

          // check if no query run
          if (
            // tslint:disable-next-line: no-unsafe-any
            parsedData.length === 0 &&
            // check for no table found
            /^Error: no such table: .*/.test(tblErr)
          ) {
            // reject the promise
            reject({ success: false, data: tblErr });
          }
          // resolve the promise
          resolve({ success: true, data: parsedData });
        } else {
          // reject the promise
          reject({ success: false, data: error });
        }
      });
    });
  }

  /**
   * Executes the users query
   *
   * @returns {Promise<IUsers>}
   * @memberof OSQuery
   */
  public users(): Promise<IUsers> {
    return new Promise<IUsers>((resolve, reject) => {
      this.query('select * from users;')
        .then(resolve)
        .catch(reject);
    });
  }
}
