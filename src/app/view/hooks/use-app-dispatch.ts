import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/types';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
