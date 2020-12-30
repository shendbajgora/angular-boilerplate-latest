enum Root {
  Auth = 'auth',
  Account = '',
  Other = '**'
}

enum Auth {
  Login = 'login',
  Register = 'register',
  ResetPassword = 'reset-password',
  ForgotPassword = 'forgot-password'
}

enum Account {
}

const RootUrl = '/';
const ModuleEntry = '';
const NotFound = 'not-found';

export { Root, Auth, Account, RootUrl, ModuleEntry, NotFound };
