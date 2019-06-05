import { spawn } from 'child_process';
import { join } from 'path';
import {
  IAccountPolicyData,
  IACPITables,
  IADConfig,
  IALF,
  IALFException,
  IALFExplicitAuths,
  IALFServices,
  IAppCompatShims,
  IApps,
  IAppSchemes,
  IAPTSources,
  IARPCache,
  IASL,
  ICPUID,
  IUlimitInfo,
  IUptime,
  IUsbDevices,
  IUserGroups,
  IUsers,
  IUserSSHKeys,
  IVideoInfo,
  IVirtualMemoryInfo,
  IXProtectEntries,
  IXProtectMeta,
  IXProtectReports,
  IYara,
  IYumSources,
} from './interfaces';

export class OSQuery {
  private path: string;

  /**
   * Creates an instance of OSQuery.
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
   * Useful CPU features from the cpuid ASM call
   *
   */
  public cpuid(): Promise<ICPUID> {
    return new Promise<ICPUID>((resolve, reject) => {
      this.query('select * from cpuid')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Additional OS X user account data from the AccountPolicy section of OpenDirectory
   *
   */
  public account_policy_data(): Promise<IAccountPolicyData> {
    return new Promise<IAccountPolicyData>((resolve, reject) => {
      this.query('select * from account_policy_data;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Firmware ACPI functional table common metadata and content
   *
   */
  public acpi_tables(): Promise<IACPITables> {
    return new Promise<IACPITables>((resolve, reject) => {
      this.query('select * from acpi_tables;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * OS X Active Directory configuration.
   *
   */
  public ad_config(): Promise<IADConfig> {
    return new Promise<IADConfig>((resolve, reject) => {
      this.query('select * from ad_config;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * OS X application layer firewall (ALF) service details
   *
   */
  public alf(): Promise<IALF> {
    return new Promise<IALF>((resolve, reject) => {
      this.query('select * from alf;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * OS X application layer firewall (ALF) service exceptions
   *
   */
  public alf_exceptions(): Promise<IALFException> {
    return new Promise<IALFException>((resolve, reject) => {
      this.query('select * from alf_exceptions;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * ALF services explicitly allowed to perform networking
   *
   */
  public alf_explicit_auths(): Promise<IALFExplicitAuths> {
    return new Promise<IALFExplicitAuths>((resolve, reject) => {
      this.query('select * from alf_explicit_auths;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * OS X application layer firewall (Firewall) services
   *
   */
  public alf_services(): Promise<IALFServices> {
    return new Promise<IALFServices>((resolve, reject) => {
      this.query('select * from alf_services;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * OS X application schemes and handlers (e.g., http, file, mailto)
   *
   */
  public app_schemes(): Promise<IAppSchemes> {
    return new Promise<IAppSchemes>((resolve, reject) => {
      this.query('select * from app_schemes;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Application Compatibility shims are a way to persist malware. This table presents
   * the AppCompat Shim information from the registry in a nice format.
   * See http://files.brucon.org/2015/Tomczak_and_Ballenthin_Shims_for_the_Win.pdf for more details.
   *
   */
  public appcompat_shims(): Promise<IAppCompatShims> {
    return new Promise<IAppCompatShims>((resolve, reject) => {
      this.query('select * from appcompat_shims;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * OS X applications installed in known search paths (e.g., /Applications).
   *
   */
  public apps(): Promise<IApps> {
    return new Promise<IApps>((resolve, reject) => {
      this.query('select * from apps;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Current list of APT repositories or software channels
   *
   */
  public apt_sources(): Promise<IAPTSources> {
    return new Promise<IAPTSources>((resolve, reject) => {
      this.query('select * from apt_sources;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Address resolution cache, both static and dynamic (from ARP, NDP).
   *
   */
  public arp_cache(): Promise<IARPCache> {
    return new Promise<IARPCache>((resolve, reject) => {
      this.query('select * from arp_cache;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Queries the Apple System Log data structure for system events
   *
   */
  public asl(): Promise<IASL> {
    return new Promise<IASL>((resolve, reject) => {
      this.query('select * from asl;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * System resource usage limits.
   *
   */
  public ulimit_info(): Promise<IUlimitInfo> {
    return new Promise<IUlimitInfo>((resolve, reject) => {
      this.query('select * from ulimit_info;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Track time passed since last boot.
   *
   */
  public uptime(): Promise<IUptime> {
    return new Promise<IUptime>((resolve, reject) => {
      this.query('select * from uptime;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * USB devices that are actively plugged into the host system
   *
   */
  public usb_devices(): Promise<IUsbDevices> {
    return new Promise<IUsbDevices>((resolve, reject) => {
      this.query('select * from usb_devices;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Local system user group relationships
   *
   */
  public user_groups(): Promise<IUserGroups> {
    return new Promise<IUserGroups>((resolve, reject) => {
      this.query('select * from user_groups;')
        .then(resolve)
        .catch(reject);
    });
  }

  public user_ssh_keys(): Promise<IUserSSHKeys> {
    return new Promise<IUserSSHKeys>((resolve, reject) => {
      this.query('select * from user_ssh_keys;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Local user accounts (including domain accounts that have logged on locally (Windows))
   *
   */
  public users(): Promise<IUsers> {
    return new Promise<IUsers>((resolve, reject) => {
      this.query('select * from users;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Retrieve video card information of the machine
   *
   */
  public video_info(): Promise<IVideoInfo> {
    return new Promise<IVideoInfo>((resolve, reject) => {
      this.query('select * from video_info;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Darwin Virtual Memory statistics.
   *
   */
  public virtual_memory_info(): Promise<IVirtualMemoryInfo> {
    return new Promise<IVirtualMemoryInfo>((resolve, reject) => {
      this.query('select * from virtual_memory_info;')
        .then(resolve)
        .catch(reject);
    });
  }
  /**
   * Database of the machine's XProtect signatures
   *
   */
  public xprotect_entries(): Promise<IXProtectEntries> {
    return new Promise<IXProtectEntries>((resolve, reject) => {
      this.query('select * from xprotect_entries;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Database of the machine's XProtect browser-related signatures
   *
   */
  public xprotect_meta(): Promise<IXProtectMeta> {
    return new Promise<IXProtectMeta>((resolve, reject) => {
      this.query('select * from xprotect_meta;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Database of XProtect matches (if user generated/sent an XProtect report)
   *
   */
  public xprotext_reports(): Promise<IXProtectReports> {
    return new Promise<IXProtectReports>((resolve, reject) => {
      this.query('select * from xprotext_reports;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Track YARA matches for files or PIDs
   *
   */
  public yara(): Promise<IYara> {
    return new Promise<IYara>((resolve, reject) => {
      this.query('select * from yara;')
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Current list of Yum repositories or software channels.
   *
   */
  public yum_sources(): Promise<IYumSources> {
    return new Promise<IYumSources>((resolve, reject) => {
      this.query('select * from yum_sources;')
        .then(resolve)
        .catch(reject);
    });
  }
}
