/* eslint-disable object-curly-newline */
import { List } from 'immutable';
import { TypeQuestion } from '../../components/AddQuestionForm/types';

// eslint-disable-next-line max-len
const testMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const initialState = {
  isLoading: false,
  error: null,
  values: List<TypeQuestion>([
    { name: 'Александра', email: '', carBrand: 'Volkswagen', carModel: 'Polo IV', text: testMessage },
    { name: 'Евгений', email: '', carBrand: 'Hyundai', carModel: 'Creta', text: testMessage },
    { name: 'Павел', email: '', carBrand: 'Mitsubishi', carModel: 'Pajero', text: testMessage },
  ]),
};

export default initialState;
