import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../state/store';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default useAppSelector;
