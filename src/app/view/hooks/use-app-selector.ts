import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../state/types';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default useAppSelector;
