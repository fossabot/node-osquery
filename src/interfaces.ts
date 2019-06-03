export interface IUsersData {
  // User ID
  uid: number;
  // Group ID (unsigned)
  gid: number;
  // User ID as int64 signed (Apple)
  uid_signed?: number;
  // 	Default group ID as int64 signed (Apple)
  gid_signed?: number;
  // Username
  username: string;
  // Optional user description
  description: string;
  // User's home directory
  directory: string;
  // User's configured default shell
  shell: string;
  // User's UUID (Apple) or SID (Windows)
  uuid?: string;
  // Whether the account is roaming (domain), local, or a system profile
  type: string;
}
export interface IUsers {
  success: boolean;
  data: [IUsersData];
}

export interface IAccountPolicyDataData {
  // User ID
  uid: number;
  // When the account was first created
  creation_time: number;
  // The number of times the user failed to login with the correct password. Resets after a correct password is entered
  failed_login_count: number;
  // The time of the last failed login attempt. Resets after a correct password is entered
  failed_login_timestamp: number;
  // The time the password was last changed
  password_last_set_time: number;
}
export interface IAccountPolicyData {
  success: boolean;
  data: [IAccountPolicyDataData];
}

export interface ICPUIDData {
  // Present feature flags
  feature: string;
  // Bit value or string
  value: string;
  // Register used to for feature value
  output_register: string;
  // Bit in register value for feature value
  output_bit: number;
  // Value of EAX used
  input_eax: string;
}
export interface ICPUID {
  success: boolean;
  data: [ICPUIDData];
}

export interface IACPITablesData {
  // ACPI table name
  name: string;
  // Size of compiled table data
  size: number;
  // MD5 hash of table content
  md5: string;
}

export interface IACPITables {
  success: boolean;
  data: [IACPITablesData];
}

export interface IADConfigData {
  // The OS X-specific configuration name
  name: string;
  // Active Directory trust domain
  domain: string;
  // Canonical name of option
  option: string;
  // Variable typed option value
  value: string;
}

export interface IADConfig {
  success: boolean;
  data: [IADConfigData];
}

export interface IALFData {
  // 1 If allow signed mode is enabled else 0
  allow_signed_enabled: number;
  // 1 If firewall unloading enabled else 0
  firewall_unload: number;
  // tslint:disable-next-line: max-line-length
  // 1 If the firewall is enabled with exceptions, 2 if the firewall is configured to block all incoming connections, else 0
  global_state: number;
  // 1 If logging mode is enabled else 0
  logging_enabled: number;
  // Firewall logging option
  logging_option: number;
  // 	1 If stealth mode is enabled else 0
  stealth_enabled: number;
  // Application Layer Firewall version
  version: string;
}

export interface IALF {
  success: boolean;
  data: [IALFData];
}

export interface IALFExceptionData {
  // Path to the executable that is excepted
  path: string;
  // 	Firewall exception state
  state: number;
}

export interface IALFException {
  success: boolean;
  data: [IALFExceptionData];
}

export interface IALFExplicitAuthsData {
  // Process name explicitly allowed
  process: string;
}

export interface IALFExplicitAuths {
  success: boolean;
  data: [IALFExplicitAuthsData];
}

export interface IALFServicesData {
  // Firewalled service name
  service: string;
  // Process name
  process: string;
  // Firewall service state
  state: number;
}

export interface IALFServices {
  success: boolean;
  data: [IALFServicesData];
}

export interface IAppSchemesData {
  // Name of the scheme/protocol
  scheme: string;
  // Application label for the handler
  handler: string;
  // 	1 if this handler is the OS default, else 0
  enabled: number;
  // 1 if this handler does NOT exist on OS X by default, else 0
  external: number;
  // 1 if this handler is protected (reserved) by OS X, else 0
  protected: number;
}

export interface IAppSchemes {
  success: boolean;
  data: [IAppSchemesData];
}

export interface IAppCompatShimsData {
  // Name of the executable that is being shimmed. This is pulled from the registry.
  executable: string;
  // This is the path to the SDB database.
  path: string;
  // Description of the SDB.
  description: string;
  // 	Install time of the SDB
  install_time: number;
  // Type of the SDB database.
  type: string;
  // Unique GUID of the SDB.
  sdb_id: string;
}

export interface IAppCompatShims {
  success: boolean;
  data: [IAppCompatShimsData];
}
