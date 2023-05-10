import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
