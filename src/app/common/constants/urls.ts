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

const ModuleEntry = '';
const RootUrl = '/';
const NotFound = 'not-found';

export { Root, Auth, Account, ModuleEntry, RootUrl, NotFound };
