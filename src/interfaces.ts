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
