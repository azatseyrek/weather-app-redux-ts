import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {Weather} from '../store/types/types';

export const useCustumDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelecet: TypedUseSelectorHook<RootState> = useSelector;
