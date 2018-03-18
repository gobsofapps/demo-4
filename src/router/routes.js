import Empty from '@/views/Empty';
import Home from '@/views/Home';
import Profile from '@/views/Profile';
import RedirectPage from '@/views/RedirectPage';
import Account from '@/views/Profile/account';
import CheckingAccount from '@/views/CheckingAccount';

export default [
  {
    path: '/',
    components: {
      default: Home,
    },
  },
  {
    path: '/checking-account',
    components: {
      default: CheckingAccount,
    },
  },
  {
    path: '/profile',
    components: {
      default: Profile,
    },
  },
  {
    path: '/account',
    components: {
      default: Account,
    },
  },
  {
    path: '/redirect',
    components: {
      default: RedirectPage,
    },
  },
  {
    path: '*',
    component: Empty,
  },
];
