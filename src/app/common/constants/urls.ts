const Root = '/';

enum Auth  {
  Base = '',
  Login = 'login',
  Register = 'register',
  ResetPassword = 'reset-password',
  ForgotPassword = 'forgot-password'
}

enum Account {
  Base = '',
}

export { Root, Auth, Account };
