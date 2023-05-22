import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

export const footerLinks = [
  {
    id: 1,
    icon: <AiOutlineTwitter />,
    url: 'https://twitter.com/Swastik2001',
  },
  {
    id: 2,
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/swastik-patro-2a54bb19b/',
  },
  {
    id: 3,
    icon: <AiFillGithub />,
    url: 'https://www.linkedin.com/in/swastik-patro-2a54bb19b/',
  },
];

export const ToastType = {
  Warn: 'warn',
  Info: 'info',
  Success: 'success',
  Error: 'error',
};

export const SortType = {
  PRICE_LOW_TO_HIGH: 'price: low to high',
  PRICE_HIGH_TO_LOW: 'price: high to low',
  NAME_A_TO_Z: 'name: a to z',
  NAME_Z_TO_A: 'name: z to a',
};

export const ratingsAvailable = [4, 3, 2, 1, 0];

export const testUser = {
  email: 'jethalal.gada@gmail.com',
  password: 'babitaji1234',
};

export const localStorageKeys = {
  User: 'user',
};

export const delayDebouncedMs = 250;

export const totalSkeletonsLength = 10;

export const delayBetnSuggestionLinkClickAndSearchBlur = 150;
