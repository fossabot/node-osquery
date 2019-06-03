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

export interface IAppsData {
  // Name of the Name.app folder
  name: string;
  // Absolute and full Name.app path
  path: string;
  // Info properties CFBundleExecutable label
  bundle_executable: string;
  // Info properties CFBundleIdentifier label
  bundle_identifier: string;
  // Info properties CFBundleName label
  bundle_name: string;
  // Info properties CFBundleShortVersionString label
  bundle_short_version: string;
  // Info properties CFBundleVersion label
  bundle_version: string;
  // Info properties CFBundlePackageType label
  bundle_package_type: string;
  // Application-set environment variables
  environment: string;
  // Does the app identify as a background agent
  element: string;
  // Info properties DTCompiler label
  compiler: string;
  // Info properties CFBundleDevelopmentRegion label
  development_region: string;
  // Info properties CFBundleDisplayName label
  display_name: string;
  // Info properties CFBundleGetInfoString label
  info_string: string;
  // Minimum version of OS X required for the app to run
  minimum_system_version: string;
  // The UTI that categorizes the app for the App Store
  category: string;
  // Info properties NSAppleScriptEnabled label
  applescript_enabled: string;
  // Info properties NSHumanReadableCopyright label
  copyright: string;
  // The time that the app was last used
  last_opened_time: number;
}

export interface IApps {
  success: boolean;
  data: [IAppsData];
}

export interface IAPTSourcesData {
  // Repository name
  name: string;
  // Source file
  source: string;
  // Repository base URI
  base_uri: string;
  // Release name
  release: string;
  // Repository source version
  version: string;
  // Repository maintainer
  maintainer: string;
  // Repository components
  components: string;
  // Repository architectures
  architectures: string;
}

export interface IAPTSources {
  success: boolean;
  data: [IAPTSourcesData];
}

export interface IARPCacheData {
  // IPv4 address target
  address: string;
  // MAC address of broadcasted address
  mac: string;
  // Interface of the network for the MAC
  interface: string;
  // 1 for true, 0 for false
  permanent: string;
}
export interface IARPCache {
  success: boolean;
  data: [IARPCacheData];
}

export interface IASLData {
  // Unix timestamp. Set automatically
  time: number;
  // Nanosecond time.
  time_nano_sec: number;
  // Sender's address (set by the server).
  host: string;

  // Sender's identification string. Default is process name.
  sender: string;
  // 	Sender's facility. Default is 'user'.
  facility: string;
  // Sending process ID encoded as a string. Set automatically.
  pid: number;
  // GID that sent the log message (set by the server).
  gid: number;
  // UID that sent the log message (set by the server).
  uid: number;
  // Log level number. See levels in asl.h.
  level: number;
  // 	Message
  message: string;
  // Reference PID for messages proxied by launchd
  ref_pid: number;
  // Reference process for messages proxied by launchd
  ref_proc: string;
  // Extra columns, in JSON format. Queries against this column are performed
  // entirely in SQLite, so do not benefit from efficient querying via asl.h.
  extra: string;
}

export interface IASL {
  success: boolean;
  data: [IASLData];
}

export interface IUlimitInfoData {
  // System resource to be limited
  type: string;
  // Current limit value
  soft_limit: string;
  // Maximum limit value
  hard_limit: string;
}

export interface IUlimitInfo {
  success: boolean;
  data: [IUlimitInfoData];
}

export interface IUptimeData {
  // Days of uptime
  days: number;
  // Hours of uptime
  hours: number;
  // Minutes of uptime
  minutes: number;
  // Seconds of uptime
  seconds: number;
  // Total uptime seconds
  total_seconds: number;
}

export interface IUptime {
  success: boolean;
  data: [IUptimeData];
}

export interface IUsbDevicesData {
  // USB Device used address
  usb_address: number;
  // USB Device used port
  usb_port: number;
  // USB Device vendor string
  vendor: string;
  // Hex encoded USB Device vendor identifier
  vendor_id: string;
  // USB Device version number
  version: string;
  // USB Device model string
  model: string;
  // Hex encoded USB Device model identifier
  model_id: string;
  // USB Device serial connection
  serial: string;
  // USB Device class
  class: string;
  // USB Device subclass
  subclass: string;
  // USB Device protocol
  protocol: string;
  // 1 If USB device is removable else 0
  removable: number;
}

export interface IUsbDevices {
  success: boolean;
  data: [IUsbDevicesData];
}
